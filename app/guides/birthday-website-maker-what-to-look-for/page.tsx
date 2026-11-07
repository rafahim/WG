import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-maker-what-to-look-for.json";

const pageTitle = "Birthday Website Maker: What to Look For";
const pageDescription = "Compare birthday website makers by templates, mobile preview, editing tools, media, privacy and sharing options.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["birthday website maker", "birthday website builder", "best birthday website maker", "make birthday website online", "personalized birthday page maker"],
  alternates: { canonical: "/guides/birthday-website-maker-what-to-look-for/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-maker-what-to-look-for/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp", width: 1200, height: 630, alt: "A personalized wish website maker interface and example page" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
