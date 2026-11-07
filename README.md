# Wishly Guide — Next.js Static Publishing Site

Wishly Guide is an informational publication for practical advice about relationships, emotional wellbeing, communication, friendship, family, meaningful messages, special occasions and creating personal Wishly websites. It is not the Wishly account, dashboard or website-builder application.

**Production origin:** `https://guide.wishly.bd/`  
**Main Wishly product:** `https://wishly.bd/`  
**Framework:** Next.js App Router + TypeScript  
**Deployment:** Next.js Static Export to GitHub Pages (`out/`)  
**Languages:** English-first, with selected Bengali pages

## Local development

Requirements: Node.js 22 LTS (or a compatible supported Node release), npm, and Python 3 for the SEO asset generator/validator.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Static production build

The build generates `.next` route types, exports the site to `out/`, and performs Next.js production checks. Run the explicit TypeScript check after the build so generated route type declarations exist:

```bash
npm ci
python scripts/build-seo-assets.py
python scripts/validate-project.py
npm ci
npm run validate:metadata
npm run build
npm run typecheck
```

`out/` is the static deployment artifact. No Node.js server, API route or database is required at runtime.

## GitHub Pages deployment

1. Push the repository to GitHub on the `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The workflow `.github/workflows/pages.yml` regenerates SEO files, validates routes/assets, installs locked dependencies with `npm ci`, runs the AST-based unique metadata validation, builds, type-checks and publishes `out/`.
4. Set `guide.wishly.bd` as the custom domain in the repository's Pages settings.
5. Add DNS `CNAME`: host `guide` → `YOUR-GITHUB-USERNAME.github.io`.
6. Enable HTTPS after DNS verification.

The `public/CNAME` file already contains `guide.wishly.bd`. If the domain changes, update `metadataBase`, canonical URLs, JSON-LD, sitemap, robots, RSS and CNAME consistently.

## SEO files generated before every deployment

- `public/robots.txt` — allows search crawling and explicitly allows `OAI-SearchBot`; references the sitemap index.
- `public/sitemap.xml` — 114 canonical page URLs plus image discovery metadata and actual language alternates.
- `public/sitemap-index.xml` — references the page sitemap and video sitemap.
- `public/video-sitemap.xml` — identifies the two language watch pages, stable thumbnail and YouTube player URL.
- `public/feed.xml` and `public/bn/feed.xml` — English and Bengali RSS feeds.
- `public/ads.txt` — the supplied AdSense publisher record for this subdomain.

Regenerate these files with:

```bash
python scripts/build-seo-assets.py
python scripts/validate-project.py
```

## Publication content

- `src/content/*.json` contains the server-rendered HTML and JSON-LD for each page.
- `app/**/page.tsx` defines the static URL and Next.js page metadata.
- `public/assets/` contains local fonts, the single stylesheet (`site-bundle.css`, the only CSS the site loads), editorial images and small site scripts.

Keep the publication informational. Do not add account, login, signup, dashboard, template-builder or custom-template actions here. A general **Visit Wishly** link points readers to the main product where relevant.

## AdSense

The AdSense loader and publisher verification metadata are configured with publisher ID `ca-pub-9101632317352495`. Manual ad units remain disabled until the account is approved and genuine Ad Slot IDs are supplied. Keep the privacy policy accurate, configure a Google-certified consent management platform for applicable regions, and verify the correct parent-domain/subdomain setup in AdSense. Presence of the script or `ads.txt` does not mean approval or verification has succeeded.

## AI search and crawling

Google AI Overviews and AI Mode use the normal Google Search crawling/indexing eligibility rules; no special AI schema is required. `OAI-SearchBot` is explicitly allowed for possible ChatGPT Search discovery. This permits crawling but does not guarantee citation, ranking or recommendations. `Google-Extended` is a separate AI training/grounding control and does not affect ordinary Google Search inclusion.

## Important limitations

- SEO can improve crawlability, clarity and eligibility, but cannot guarantee indexing, rankings, traffic, AI citations or AdSense approval.
- No verified Keyword Planner search-volume export is included; the content map records intent themes, not invented volume scores.
- The supplied YouTube video's exact upload date was not verified, so incomplete `VideoObject` rich-result markup was not invented. The video is embedded on dedicated pages and included in the video sitemap.
- Live Core Web Vitals require the deployed site and real-user/lab measurement. The local build has one single stylesheet (`site-bundle.css`, the only CSS the site loads), local preloaded fonts and intrinsic image dimensions/loading hints, but LCP/INP/CLS scores are not claimed here.

## Latest UI adjustment

- Desktop navigation uses a three-column header layout: brand on the left, the pill navigation centered in the viewport, and language/Visit Wishly actions on the right.
- The existing mobile navigation drawer and its background scroll lock are unchanged.
- The featured video was removed from the About page to avoid repeating the video section already present on the homepage. The dedicated Video Guides pages remain available.
