from pathlib import Path
from urllib.parse import urlsplit, unquote
from html.parser import HTMLParser
import json, re, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / 'app'
CONTENT = ROOT / 'src' / 'content'
PUBLIC = ROOT / 'public'
errors = []

class Inspector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs=[]; self.ids=set(); self.jsonld=[]; self.images=[]; self.h1_count=0; self.h2_count=0; self._in_json=False; self._buffer=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if attrs.get('id'): self.ids.add(attrs['id'])
        if tag == 'img': self.images.append(attrs)
        if tag == 'h1': self.h1_count += 1
        if tag == 'h2': self.h2_count += 1
        for key in ('href','src'):
            value=attrs.get(key)
            if value: self.refs.append(value)
        if tag=='script' and attrs.get('type')=='application/ld+json':
            self._in_json=True; self._buffer=[]
    def handle_endtag(self, tag):
        if tag=='script' and self._in_json:
            self._in_json=False; self.jsonld.append(''.join(self._buffer))
    def handle_data(self, data):
        if self._in_json: self._buffer.append(data)

routes={}
route_data={}
for f in APP.rglob('page.tsx'):
    route='/' if f.parent==APP else '/' + f.parent.relative_to(APP).as_posix().replace('\\','/') + '/'
    routes[route]=f
for f in CONTENT.glob('*.json'):
    try: data=json.loads(f.read_text(encoding='utf-8'))
    except Exception as exc:
        errors.append(f'Invalid JSON: {f.name}: {exc}'); continue
    route_data[f.stem]=data

# Verify every route imports its own content data and exports page metadata.
for route, page in routes.items():
    src=page.read_text(encoding='utf-8')
    if 'export const metadata' not in src: errors.append(f'Missing Metadata API export: {page}')
    imp=re.search(r'from "@/content/([^\"]+)\.json"',src)
    if not imp: errors.append(f'Missing page content import: {page}'); continue
    key=imp.group(1)
    if key not in route_data: errors.append(f'Content JSON missing for {page}: {key}'); continue
    data=route_data[key]
    parser=Inspector(); parser.feed(data.get('html',''))
    if parser.h1_count != 1: errors.append(f'Expected one H1 in {route}, found {parser.h1_count}')
    if parser.h2_count < 2: errors.append(f'Expected at least two H2 headings in {route}, found {parser.h2_count}')
    for image in parser.images:
        if not image.get('alt'): errors.append(f'Image missing descriptive alt text in {route}: {image.get("src")}')
        if not image.get('width') or not image.get('height'): errors.append(f'Image missing intrinsic dimensions in {route}: {image.get("src")}')
        if not image.get('loading'): errors.append(f'Image missing loading hint in {route}: {image.get("src")}')
        if not image.get('decoding'): errors.append(f'Image missing decoding hint in {route}: {image.get("src")}')
    for raw in parser.jsonld:
        try: json.loads(raw)
        except Exception as exc: errors.append(f'Invalid JSON-LD in {route}: {exc}')
    # Verify same-site links and anchors.
    for ref in parser.refs:
        u=urlsplit(ref)
        if u.scheme or u.netloc:
            if u.scheme in ('http','https') and u.netloc=='guide.wishly.bd': path=u.path or '/'
            else: continue
        else: path=u.path
        if path == '':
            target_route=route
        elif path == '/':
            target_route='/'
        elif path.startswith('/assets/') or path in ('/favicon.svg','/site.webmanifest','/robots.txt','/sitemap.xml','/ads.txt'):
            target=PUBLIC/path.lstrip('/')
            if not target.exists() and path!='/ads.txt': errors.append(f'Broken public asset in {route}: {ref}')
            continue
        else:
            target_route=path if path.endswith('/') else path+'/'
        if target_route not in routes:
            # Allow public file references not covered by the explicit assets list.
            target=PUBLIC/path.lstrip('/')
            if not target.exists(): errors.append(f'Broken local route/file in {route}: {ref}')
            continue
        if u.fragment:
            target_key=re.search(r'from "@/content/([^\"]+)\.json"',routes[target_route].read_text(encoding='utf-8'))
            if target_key and target_key.group(1) in route_data:
                target_parser=Inspector(); target_parser.feed(route_data[target_key.group(1)].get('html',''))
                if unquote(u.fragment) not in target_parser.ids:
                    errors.append(f'Broken in-page anchor in {route}: {ref}')

# Sitemap resolves to actual Next app routes.
sitemap=PUBLIC/'sitemap.xml'
try:
    root=ET.parse(sitemap).getroot()
    ns={'sm':'http://www.sitemaps.org/schemas/sitemap/0.9'}
    seen=set()
    for item in root.findall('sm:url',ns):
        loc=item.findtext('sm:loc',default='',namespaces=ns)
        if not loc: errors.append('Sitemap entry missing loc'); continue
        if loc in seen: errors.append(f'Duplicate sitemap loc: {loc}')
        seen.add(loc)
        path=urlsplit(loc).path or '/'
        r=path if path.endswith('/') else path+'/'
        if r not in routes: errors.append(f'Sitemap points to missing route: {loc}')
except Exception as exc: errors.append(f'Sitemap parse failed: {exc}')

# Verify static export config, scripts, assets, deploy workflow and ads disabled.
config=(ROOT/'next.config.ts').read_text(encoding='utf-8')
if 'output: "export"' not in config: errors.append('Next static export is not enabled')
if 'trailingSlash: true' not in config: errors.append('trailingSlash must be true for clean GitHub Pages output')
package=json.loads((ROOT/'package.json').read_text(encoding='utf-8'))
if not (ROOT/'package-lock.json').exists(): errors.append('package-lock.json is required for reproducible npm ci installs')
if package['dependencies'].get('next')!='16.4.5': errors.append('Next.js version is not pinned to 16.4.5')
workflow=(ROOT/'.github/workflows/pages.yml').read_text(encoding='utf-8')
for token in ('npm ci --no-audit --no-fund','npm run typecheck','npm run build','path: ./out','actions/deploy-pages@v4'):
    if token not in workflow: errors.append(f'GitHub Pages workflow missing {token}')
if workflow.find('run: npm run build') > workflow.find('run: npm run typecheck'):
    errors.append('GitHub Pages workflow should build first so Next.js route type files exist before the explicit typecheck')
ads=(PUBLIC/'assets/ads-config.js').read_text(encoding='utf-8')
if not re.search(r'enabled\s*:\s*false',ads): errors.append('AdSense must remain disabled until real account IDs are configured')
layout=(APP/'layout.tsx').read_text(encoding='utf-8')
if 'ca-pub-9101632317352495' not in layout: errors.append('AdSense loader missing the supplied publisher ID')
if 'ca-pub-9101632317352495' not in ads: errors.append('Ad configuration missing the supplied publisher ID')
if 'google.com, pub-9101632317352495, DIRECT, f08c47fec0942fa0' not in (PUBLIC/'ads.txt').read_text(encoding='utf-8'): errors.append('ads.txt seller record missing or incorrect')
for f in ('public/CNAME','public/robots.txt','public/sitemap.xml','public/sitemap-index.xml','public/feed.xml','public/bn/feed.xml','public/assets/site-bundle.css','scripts/build-seo-assets.py','public/assets/ads.js','public/assets/ads-config.js','app/layout.tsx','app/not-found.tsx','src/components/HtmlPage.tsx'):
    if not (ROOT/f).exists(): errors.append(f'Missing required file: {f}')


# Validate the current video-guide and editorial additions.
for key in route_data:
    value = route_data[key].get('jsonLd')
    if value is not None and not isinstance(value, (dict, list)):
        errors.append(f'Invalid JSON-LD container in {key}: expected an object or list')
    if isinstance(value, list) and any(not isinstance(item, dict) for item in value):
        errors.append(f'JSON-LD list contains serialized strings in {key}')

about_data = route_data.get('about', {})
about_html = about_data.get('html', '')
if 'about-video-showcase' in about_html:
    errors.append('About page should not duplicate the homepage featured video section')
home_html = route_data.get('home', {}).get('html', '')
if 'home-video-guides-teaser' not in home_html:
    errors.append('Homepage featured video section is missing')

for key in ('video-guides', 'bn-video-guides'):
    data = route_data.get(key, {})
    html = data.get('html', '')
    if 'youtube-nocookie.com/embed/OfXaVJMdWRA' not in html:
        errors.append(f'{key}: user-provided YouTube embed is missing')
    if html.count('<h1') != 1:
        errors.append(f'{key}: expected exactly one H1')
    if html.count('class=\"reading-progress\"') != 1 or html.count('class=\"back-top\"') != 1:
        errors.append(f'{key}: duplicate reading-progress or back-to-top controls')

# Video sitemap has to contain actual watch pages, a stable thumbnail, and a YouTube player URL.
video_sitemap = PUBLIC / 'video-sitemap.xml'
try:
    root_video = ET.parse(video_sitemap).getroot()
    vns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'video': 'http://www.google.com/schemas/sitemap-video/1.1'}
    video_entries = root_video.findall('sm:url', vns)
    if len(video_entries) < 1:
        errors.append('Video sitemap has no watch page entries')
    for entry in video_entries:
        loc = entry.findtext('sm:loc', default='', namespaces=vns)
        video_node = entry.find('video:video', vns)
        if not loc or video_node is None:
            errors.append('Video sitemap entry is missing its page URL or video node')
            continue
        for required in ('thumbnail_loc', 'title', 'description', 'player_loc'):
            if not video_node.findtext('video:' + required, default='', namespaces=vns):
                errors.append(f'Video sitemap entry missing video:{required}: {loc}')
        player = video_node.findtext('video:player_loc', default='', namespaces=vns)
        if 'youtube-nocookie.com/embed/OfXaVJMdWRA' not in player:
            errors.append(f'Video sitemap has an unexpected player URL: {player}')
except Exception as exc:
    errors.append(f'Video sitemap parse failed: {exc}')
robots_text = (PUBLIC / 'robots.txt').read_text(encoding='utf-8')
if 'sitemap-index.xml' not in robots_text:
    errors.append('robots.txt does not reference the sitemap index')
if 'User-agent: OAI-SearchBot\nAllow: /' not in robots_text:
    errors.append('robots.txt should explicitly allow OAI-SearchBot for ChatGPT Search discovery')

# Validate sitemap index, image sitemap extensions and RSS publication feeds.
try:
    index_root = ET.parse(PUBLIC / 'sitemap-index.xml').getroot()
    entries = [n.text for n in index_root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    if set(entries) != {'https://guide.wishly.bd/sitemap.xml', 'https://guide.wishly.bd/video-sitemap.xml'}:
        errors.append('Sitemap index must reference both the page and video sitemaps')
    image_ns = {'image': 'http://www.google.com/schemas/sitemap-image/1.1'}
    image_count = 0
    for item in root.findall('sm:url', ns):
        for image in item.findall('image:image', image_ns):
            image_url = image.findtext('image:loc', default='', namespaces=image_ns)
            if not image_url.startswith('https://guide.wishly.bd/assets/'):
                errors.append(f'Invalid sitemap image URL: {image_url}')
            else:
                local_image = PUBLIC / urlsplit(image_url).path.lstrip('/')
                if not local_image.exists(): errors.append(f'Sitemap image is missing locally: {image_url}')
            image_count += 1
    if image_count == 0: errors.append('Main sitemap contains no image metadata')
except Exception as exc: errors.append(f'Sitemap index/image validation failed: {exc}')
for feed_path in (PUBLIC / 'feed.xml', PUBLIC / 'bn' / 'feed.xml'):
    try:
        feed_root = ET.parse(feed_path).getroot()
        if feed_root.tag != 'rss': errors.append(f'Invalid RSS root: {feed_path}')
        items = feed_root.findall('./channel/item')
        if not items: errors.append(f'RSS feed has no article items: {feed_path}')
        for item in items:
            if not item.findtext('title') or not item.findtext('link') or not item.findtext('description'):
                errors.append(f'RSS item is missing required fields: {feed_path}')
    except Exception as exc: errors.append(f'RSS parse failed for {feed_path}: {exc}')

# Every Article/BlogPosting entity should have a representative image and a stable author/publisher identity.
for key, data in route_data.items():
    def walk_schema(value):
        if isinstance(value, dict):
            if value.get('@type') in ('Article', 'BlogPosting'):
                if not value.get('image'): errors.append(f'Article schema missing image in {key}')
                if not value.get('author'): errors.append(f'Article schema missing author in {key}')
                if not value.get('publisher'): errors.append(f'Article schema missing publisher in {key}')
                if not value.get('datePublished') or not value.get('dateModified'): errors.append(f'Article schema missing publication/modified date in {key}')
                publisher = value.get('publisher') or {}
                if isinstance(publisher, dict) and publisher.get('@id') != 'https://guide.wishly.bd/#organization': errors.append(f'Article schema publisher entity mismatch in {key}')
                author = value.get('author') or {}
                if isinstance(author, dict) and not author.get('@id'): errors.append(f'Article schema author has no stable @id in {key}')
            for child in value.values(): walk_schema(child)
        elif isinstance(value, list):
            for child in value: walk_schema(child)
    walk_schema(data.get('jsonLd'))

layout_source = (APP / 'layout.tsx').read_text(encoding='utf-8')
if 'application/ld+json' not in layout_source or 'https://guide.wishly.bd/#website' not in layout_source:
    errors.append('Global Organization/WebSite JSON-LD is missing')
if not (PUBLIC / 'assets/site-bundle.css').exists(): errors.append('Combined stylesheet is missing')
if 'scripts/build-seo-assets.py' not in workflow: errors.append('GitHub workflow does not regenerate SEO discovery assets')

if errors:
    print('FAIL: Next.js project validation')
    for e in errors: print(' -',e)
    raise SystemExit(1)
print(f'PASS: {len(routes)} statically declared Next.js routes')
print(f'PASS: {len(route_data)} content JSON files parsed')
print(f'PASS: {len(seen)} sitemap URLs map to actual routes')
print('PASS: local route/file links, page anchors, one H1 and at least two H2 headings per content route')
print('PASS: JSON-LD, sitemap index, image sitemap, RSS feeds, page metadata, image alt/dimensions/loading, static export and GitHub Pages workflow')
print('PASS: AdSense publisher loader configured; manual ad units disabled pending approval and real slot IDs')
