# Wishly Guide — Next.js Static Export (International + AdSense-ready)

A multi-page, English-first international knowledge and tutorial site for Wishly, with a separate Bengali edition. Its public UI follows the official Wishly product design system: dark #07070b surfaces, pink/violet gradient accents, the Wishly star mark, Inter/Fraunces typography, glass cards, pill navigation and matching CTA styling. The header and footer link directly to the main Wishly website, template library and creation flow. This project uses the Next.js App Router and generates static HTML files at build time for GitHub Pages; no Next.js server is needed at runtime.

## Stack

- Next.js 16.4.5 (App Router)
- React 19.2.0
- TypeScript
- Static export (`output: "export"`)
- Original Wishly Guide HTML content and Wishly visual assets migrated into statically rendered Next.js routes
- Main-site design alignment stylesheet (`public/assets/wishly-main-theme.css`)

## Run locally

Install Node.js 22 LTS, then from this folder:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To test the actual static output:

```bash
npm run typecheck
npm run build
```

Next.js writes the deployable site to `out/`. You can preview it with Python after building:

```bash
py -m http.server 5500 --directory out
```

Then open `http://localhost:5500`.

## GitHub Pages deployment

1. Create a repository such as `wishly-guide`.
2. Upload the **contents of this project folder** to the repository root. Keep `.github/`, `app/`, `src/`, `public/`, `package.json`, and `next.config.ts`.
3. Push to the `main` branch.
4. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
5. The workflow installs dependencies, type-checks, runs `next build`, and deploys the `out/` directory.
6. The default custom domain is `guide.wishly.bd` (also present as `public/CNAME`). Configure a DNS CNAME for host `guide` pointing to `YOUR-GITHUB-USERNAME.github.io`, set the same custom domain in GitHub Pages, wait for DNS verification, and enable HTTPS.
7. Verify `https://guide.wishly.bd/` and submit `https://guide.wishly.bd/sitemap.xml` in Google Search Console.

If you use a different domain, update `public/CNAME`, canonical URLs and sitemap URLs before deploying. Do not use a domain you do not own.

## Main Wishly navigation

The Guide header and footer include direct links to the main product:

- Main website: `https://wishly.bd/`
- Browse templates: `https://wishly.bd/templates/`
- Create a website: `https://wishly.bd/create/`

Each long-form guide also includes a contextual product CTA. These links open the main product in a new tab so readers can keep their place in the guide.

## International SEO

- English is the default at `/`; Bengali is at `/bn/`.
- Only genuinely translated page pairs have reciprocal `hreflang` metadata.
- Each route has a page-specific title, description, canonical URL, Open Graph and Twitter metadata.
- Existing structured data is preserved and emitted in the server-rendered HTML.
- Static `public/sitemap.xml`, `public/robots.txt`, `public/favicon.svg` and `public/site.webmanifest` are deployed as-is.
- Do not create near-identical country landing pages for US, UK, Canada or Australia. Add a regional page only when the content is genuinely different and useful.

## AdSense configuration

The exact Google AdSense loader provided for publisher `ca-pub-9101632317352495` is installed site-wide in `app/layout.tsx` using Next.js `Script` with asynchronous loading and anonymous CORS. The matching seller record is present in `public/ads.txt`:

```text
google.com, pub-9101632317352495, DIRECT, f08c47fec0942fa0
```

The site is configured conservatively:

1. The global AdSense verification/serving script is present, but it does not guarantee that ads will display. The AdSense account must approve the domain. Auto Ads can then be enabled/managed in the AdSense account.
2. Manual display placements are labelled `Advertisements`, but the manual ad renderer remains disabled (`enabled: false`) until real numeric Ad Slot IDs are added to `public/assets/ads-config.js`. Do not invent slot IDs or turn on empty placeholders.
3. Verify the `ads.txt` seller record against the exact record shown in your AdSense account before launch. The current record corresponds to the supplied publisher ID.
4. Keep ads visibly separate from navigation, buttons, downloads, template controls and article links. Do not click your own ads or encourage visitors to do so.
5. For personalized ads to visitors in the EEA, UK and Switzerland, configure a Google-certified Consent Management Platform integrated with the IAB Transparency and Consent Framework. This project does not include a certified CMP. Review consent and privacy requirements for other regions too.
6. Do not place ads on Privacy, Terms, Editorial Policy or Contact pages. Keep sufficient original editorial material on articles; do not add thin content simply to create more ad slots.

AdSense approval is a separate Google review and is not guaranteed by adding the script or ads.txt file.

## Static export constraints

Static export generates HTML, CSS and JavaScript in `out/`; no Node server runs in production. Consequently, this project avoids Next.js features requiring a request-time server, including API routes, Server Actions, cookies-dependent rendering, ISR and built-in image optimization. The existing image assets are served as static files from `public/assets`.

## Important before publishing

- Confirm `guide.wishly.bd` is your chosen domain and DNS points to GitHub Pages.
- Test the production website on phone, desktop and multiple browsers.
- Confirm all Wishly product steps and screenshots still match the live app before publishing/updating tutorials.
- Add original, useful editorial detail to articles over time.
- Set up Search Console, submit the sitemap and monitor indexing, Core Web Vitals and broken links.
- AdSense approval and Google rankings are not guaranteed by code or metadata alone.

## Project structure

```text
app/                 Next.js App Router pages
src/components/      shared server-rendered HTML content component
src/content/         migrated page content as JSON
public/assets/       original CSS, JS, images, icons and ad configuration
public/sitemap.xml   static XML sitemap
public/robots.txt    crawler rules
.github/workflows/   GitHub Pages static build and deployment
next.config.ts       output: export, trailing slashes
```


## AdSense

The sitewide AdSense loader is included in `app/layout.tsx` for publisher `ca-pub-9101632317352495`. `public/ads.txt` contains the corresponding seller record. Manual display units are intentionally disabled until real Ad Slot IDs are supplied. AdSense approval is separate from code integration. For personalized ads in the EEA, UK and Switzerland, configure a Google-certified TCF CMP in line with Google's current requirements.

## Latest navigation and editorial update

The header follows the supplied main Wishly `PublicNavbar` structure and design system: Wishly brand lockup, pill-style navigation, Create Website CTA, account dropdown, responsive mobile menu and direct Main Wishly / Templates / Create links. The homepage and Guides library now surface editorial guides and six topic collections.

This content expansion adds **25 new original English articles**, bringing the guide library to **43 articles**, plus **6 topic hub pages**. The new articles cover proposing, asking someone to be a partner, making a girlfriend feel appreciated, cheering someone up, responding respectfully to anger, apologising, repairing conflict, romantic gestures, love letters, long-distance relationships, virtual dates, birthdays, anniversaries, stress support, healthy communication, personal space, friendship and gratitude.

The articles use real Wishly template preview images from the supplied source project, contextual template links, the Main Wishly website CTA, author attribution to RA Fahim, related-article links, FAQs and Article/Breadcrumb structured data. A dedicated `/authors/ra-fahim/` profile remains available. No unverified traffic, revenue or search-volume numbers are claimed.

The current project has **62 static routes**, **43 guide articles**, **6 topic collections** and **63 page/content JSON records**. The Guides library displays all 43 articles and the homepage features six selected articles plus topic navigation. See `QA-REPORT.txt` and `SEO-CONTENT-MAP.md` for the validation summary and keyword clusters.


## Relationship and emotional content expansion

This edition adds 25 original English guides covering love and romance, proposals, relationship communication, apologies, conflict repair, emotional support, long-distance relationships, anniversaries, birthdays, friendship and gratitude. Six topical collection pages group the guides into useful journeys. Each new article includes a unique title and description, a real Wishly template image, visible FAQ content, BlogPosting/Breadcrumb/FAQ structured data, an author link, relevant template links and a direct path to the main Wishly website.

## Publishing standards

Content is written as general educational guidance, not professional therapy. It emphasises consent, privacy, mutual respect, boundaries and non-coercive communication. Search phrases are used naturally as topics and headings; no fabricated search-volume values or guaranteed ranking claims are included. Review template details and links whenever the main Wishly product changes.

## Content clusters

- Love & Romance: proposals, girlfriend messages, love letters, romantic gestures and date nights.
- Emotional Support: cheering someone up, stress support, anger and personal space.
- Communication & Repair: apologies, making up after arguments, boundaries and active listening.
- Long-Distance Relationships: virtual dates, staying connected and missing someone.
- Special Occasions: birthdays and anniversaries.
- Friendship & Gratitude: best-friend surprises and thank-you messages.
