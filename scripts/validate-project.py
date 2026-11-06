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
        self.refs=[]; self.ids=set(); self.jsonld=[]; self._in_json=False; self._buffer=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if attrs.get('id'): self.ids.add(attrs['id'])
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
if package['dependencies'].get('next')!='16.4.5': errors.append('Next.js version is not pinned to 16.4.5')
workflow=(ROOT/'.github/workflows/pages.yml').read_text(encoding='utf-8')
for token in ('npm run build','path: ./out','actions/deploy-pages@v4'):
    if token not in workflow: errors.append(f'GitHub Pages workflow missing {token}')
ads=(PUBLIC/'assets/ads-config.js').read_text(encoding='utf-8')
if not re.search(r'enabled\s*:\s*false',ads): errors.append('AdSense must remain disabled until real account IDs are configured')
layout=(APP/'layout.tsx').read_text(encoding='utf-8')
if 'ca-pub-9101632317352495' not in layout: errors.append('AdSense loader missing the supplied publisher ID')
if 'ca-pub-9101632317352495' not in ads: errors.append('Ad configuration missing the supplied publisher ID')
if 'google.com, pub-9101632317352495, DIRECT, f08c47fec0942fa0' not in (PUBLIC/'ads.txt').read_text(encoding='utf-8'): errors.append('ads.txt seller record missing or incorrect')
for f in ('public/CNAME','public/robots.txt','public/sitemap.xml','public/assets/ads.js','public/assets/ads-config.js','app/layout.tsx','app/not-found.tsx','src/components/HtmlPage.tsx'):
    if not (ROOT/f).exists(): errors.append(f'Missing required file: {f}')

if errors:
    print('FAIL: Next.js project validation')
    for e in errors: print(' -',e)
    raise SystemExit(1)
print(f'PASS: {len(routes)} statically declared Next.js routes')
print(f'PASS: {len(route_data)} content JSON files parsed')
print(f'PASS: {len(seen)} sitemap URLs map to actual routes')
print('PASS: local route/file links and page anchors')
print('PASS: JSON-LD, Next Metadata API, static export config and GitHub Pages workflow')
print('PASS: AdSense publisher loader configured; manual ad units disabled pending approval and real slot IDs')
