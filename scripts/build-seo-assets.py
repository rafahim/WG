"""Regenerate the static SEO discovery files from the current Next.js routes/content."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
from datetime import datetime, timezone
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / 'app'
CONTENT = ROOT / 'src' / 'content'
PUBLIC = ROOT / 'public'
BASE = 'https://guide.wishly.bd'
SM = 'http://www.sitemaps.org/schemas/sitemap/0.9'
IMG = 'http://www.google.com/schemas/sitemap-image/1.1'
XHTML = 'http://www.w3.org/1999/xhtml'

ET.register_namespace('', SM)
ET.register_namespace('image', IMG)
ET.register_namespace('xhtml', XHTML)
ET.register_namespace('atom', 'http://www.w3.org/2005/Atom')
ET.register_namespace('dc', 'http://purl.org/dc/elements/1.1/')

class PageHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.images = []
        self.in_h1 = False
        self.h1 = []
        self.in_lead = False
        self.lead = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'img' and a.get('src'):
            self.images.append((a['src'], (a.get('alt') or '').strip()))
        if tag == 'h1': self.in_h1 = True
        if tag == 'p' and 'article-lead' in (a.get('class') or '').split(): self.in_lead = True
    def handle_endtag(self, tag):
        if tag == 'h1': self.in_h1 = False
        if tag == 'p' and self.in_lead: self.in_lead = False
    def handle_data(self, data):
        if self.in_h1: self.h1.append(data)
        if self.in_lead: self.lead.append(data)

def all_objects(value):
    if isinstance(value, dict):
        yield value
        for child in value.values(): yield from all_objects(child)
    elif isinstance(value, list):
        for child in value: yield from all_objects(child)

def route_and_content_map():
    mapping = {}
    for page in APP.rglob('page.tsx'):
        route = '/' if page.parent == APP else '/' + page.parent.relative_to(APP).as_posix().replace('\\', '/') + '/'
        source = page.read_text(encoding='utf-8')
        match = re.search(r'from "@/content/([^"]+)\.json"', source)
        mapping[route] = match.group(1) if match else None
    return mapping

ROUTES = route_and_content_map()

# The only paired translations are versions that have actually been translated.
ALTERNATES = {
    '/': {'en': BASE + '/', 'bn': BASE + '/bn/', 'x-default': BASE + '/'},
    '/bn/': {'en': BASE + '/', 'bn': BASE + '/bn/', 'x-default': BASE + '/'},
    '/guides/': {'en': BASE + '/guides/', 'bn': BASE + '/bn/guides/', 'x-default': BASE + '/guides/'},
    '/bn/guides/': {'en': BASE + '/guides/', 'bn': BASE + '/bn/guides/', 'x-default': BASE + '/guides/'},
    '/guides/create-wish-website/': {'en': BASE + '/guides/create-wish-website/', 'bn': BASE + '/bn/guides/wish-website-toiri/', 'x-default': BASE + '/guides/create-wish-website/'},
    '/bn/guides/wish-website-toiri/': {'en': BASE + '/guides/create-wish-website/', 'bn': BASE + '/bn/guides/wish-website-toiri/', 'x-default': BASE + '/guides/create-wish-website/'},
    '/video-guides/': {'en': BASE + '/video-guides/', 'bn': BASE + '/bn/video-guides/', 'x-default': BASE + '/video-guides/'},
    '/bn/video-guides/': {'en': BASE + '/video-guides/', 'bn': BASE + '/bn/video-guides/', 'x-default': BASE + '/video-guides/'},
}

# Main sitemap with last-modified dates and image discovery metadata.
urlset = ET.Element(f'{{{SM}}}urlset')
for route in sorted(ROUTES, key=lambda x: (x != '/', x)):
    key = ROUTES[route]
    if not key:
        continue
    content_file = CONTENT / f'{key}.json'
    if not content_file.exists():
        raise FileNotFoundError(f'Missing content JSON for {route}: {content_file}')
    data = json.loads(content_file.read_text(encoding='utf-8'))
    entry = ET.SubElement(urlset, f'{{{SM}}}url')
    ET.SubElement(entry, f'{{{SM}}}loc').text = BASE + route
    dates = [obj.get('dateModified') for obj in all_objects(data.get('jsonLd')) if obj.get('dateModified')]
    if dates:
        ET.SubElement(entry, f'{{{SM}}}lastmod').text = sorted(dates)[-1][:10]
    parser = PageHTML()
    parser.feed(data.get('html', ''))
    added = set()
    image_count = 0
    for src, caption in parser.images:
        if not src.startswith('/assets/') or src in added:
            continue
        local_file = PUBLIC / src.lstrip('/')
        if not local_file.is_file():
            continue
        added.add(src)
        image = ET.SubElement(entry, f'{{{IMG}}}image')
        ET.SubElement(image, f'{{{IMG}}}loc').text = BASE + src
        if caption:
            ET.SubElement(image, f'{{{IMG}}}caption').text = caption[:500]
        image_count += 1
        if image_count >= 10:
            break
    for language, href in ALTERNATES.get(route, {}).items():
        ET.SubElement(entry, f'{{{XHTML}}}link', {
            'rel': 'alternate', 'hreflang': language, 'href': href
        })
ET.ElementTree(urlset).write(PUBLIC / 'sitemap.xml', encoding='utf-8', xml_declaration=True)

# A sitemap index keeps the standard page sitemap and video sitemap discoverable.
index = ET.Element(f'{{{SM}}}sitemapindex')
for filename in ('sitemap.xml', 'video-sitemap.xml'):
    child = ET.SubElement(index, f'{{{SM}}}sitemap')
    ET.SubElement(child, f'{{{SM}}}loc').text = BASE + '/' + filename
ET.ElementTree(index).write(PUBLIC / 'sitemap-index.xml', encoding='utf-8', xml_declaration=True)

# RSS feeds use the visible article order from each Guides index.
def build_feed(language='en', maximum=100):
    prefix = 'guides__' if language == 'en' else 'bn__guides__'
    index_key = 'guides' if language == 'en' else 'bn__guides'
    index_data = json.loads((CONTENT / f'{index_key}.json').read_text(encoding='utf-8'))
    parser = PageHTML(); parser.feed(index_data.get('html', ''))
    ordered_keys = []
    for route in re.findall(r'href="(/(?:bn/)?guides/[^"]*/?)"', index_data.get('html', '')):
        route = route if route.endswith('/') else route + '/'
        key = ROUTES.get(route)
        if key and key.startswith(prefix) and key not in ordered_keys:
            ordered_keys.append(key)
    for file in sorted(CONTENT.glob(prefix + '*.json')):
        if file.stem not in ordered_keys:
            ordered_keys.append(file.stem)

    rss = ET.Element('rss', {'version': '2.0'})
    channel = ET.SubElement(rss, 'channel')
    is_bn = language == 'bn'
    feed_url = BASE + ('/bn/feed.xml' if is_bn else '/feed.xml')
    home_url = BASE + ('/bn/' if is_bn else '/')
    ET.SubElement(channel, 'title').text = 'Wishly Guide বাংলা — নতুন গাইড' if is_bn else 'Wishly Guide — Latest Articles'
    ET.SubElement(channel, 'link').text = home_url
    ET.SubElement(channel, 'description').text = 'Wishly দিয়ে website তৈরি ও meaningful moments নিয়ে বাংলা গাইড।' if is_bn else 'New practical guides about relationships, emotional wellbeing, friendship, family and meaningful occasions.'
    ET.SubElement(channel, 'language').text = 'bn-BD' if is_bn else 'en'
    ET.SubElement(channel, '{http://www.w3.org/2005/Atom}link', {
        'href': feed_url, 'rel': 'self', 'type': 'application/rss+xml'
    })
    added = 0
    for key in ordered_keys:
        content_file = CONTENT / f'{key}.json'
        if not content_file.exists():
            continue
        data = json.loads(content_file.read_text(encoding='utf-8'))
        parser = PageHTML(); parser.feed(data.get('html', ''))
        heading = ' '.join(parser.h1).strip()
        excerpt = ' '.join(parser.lead).strip()
        article = next((obj for obj in all_objects(data.get('jsonLd')) if obj.get('@type') in ('BlogPosting', 'Article')), None)
        if not article or not heading:
            continue
        main_page = article.get('mainEntityOfPage')
        main_page_url = main_page.get('@id', '') if isinstance(main_page, dict) else (main_page if isinstance(main_page, str) else '')
        url = article.get('url') or main_page_url
        if not url:
            continue
        date = (article.get('datePublished') or '')[:10]
        try:
            pubdate = datetime.strptime(date, '%Y-%m-%d').replace(tzinfo=timezone.utc)
        except ValueError:
            # No reliable publication date: omit the item rather than invent one.
            continue
        item = ET.SubElement(channel, 'item')
        ET.SubElement(item, 'title').text = heading
        ET.SubElement(item, 'link').text = url
        ET.SubElement(item, 'guid', {'isPermaLink': 'true'}).text = url
        ET.SubElement(item, 'description').text = excerpt[:1200]
        ET.SubElement(item, 'pubDate').text = pubdate.strftime('%a, %d %b %Y %H:%M:%S GMT')
        author = article.get('author')
        if isinstance(author, dict) and author.get('name'):
            ET.SubElement(item, '{http://purl.org/dc/elements/1.1/}creator').text = author['name']
        category = article.get('articleSection')
        if category:
            ET.SubElement(item, 'category').text = str(category)
        added += 1
        if added >= maximum:
            break
    return rss, added

for language, output in (('en', PUBLIC / 'feed.xml'), ('bn', PUBLIC / 'bn' / 'feed.xml')):
    feed, count = build_feed(language)
    output.parent.mkdir(parents=True, exist_ok=True)
    ET.ElementTree(feed).write(output, encoding='utf-8', xml_declaration=True)
    print(f'Generated {output.relative_to(ROOT)} with {count} items')

(PUBLIC / 'robots.txt').write_text(
    # OAI-SearchBot is explicitly allowed so public pages can be considered
    # for ChatGPT Search. GPTBot remains governed by the wildcard rule.
    'User-agent: *\nAllow: /\n\n'
    'User-agent: OAI-SearchBot\nAllow: /\n\n'
    'User-agent: Google-Extended\nAllow: /\n\n'
    'User-agent: Googlebot\nAllow: /\n\n'
    'User-agent: Googlebot-Image\nAllow: /\n\n'
    'User-agent: Mediapartners-Google\nAllow: /\n\n'
    'User-agent: AdsBot-Google\nAllow: /\n\n'
    'User-agent: AdsBot-Google-Mobile\nAllow: /\n\n'
    f'Sitemap: {BASE}/sitemap-index.xml\n',
    encoding='utf-8'
)
print(f'Generated sitemap.xml for {len(ROUTES)} Next.js routes and sitemap-index.xml.')
