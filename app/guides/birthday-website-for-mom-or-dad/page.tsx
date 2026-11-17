import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-mom-or-dad.json";

const pageTitle = "Birthday Website for Mom or Dad: A Family Surprise Guide";
const pageDescription = "Make a thoughtful birthday website for a parent with family photos, gratitude, memories, short messages and a simple design they can enjoy on mobile.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/birthday-wish-website-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["birthday website for mom", "birthday website for dad", "birthday website for parents", "family birthday website ideas", "online birthday greeting for parents"],
  alternates: { canonical: "/guides/birthday-website-for-mom-or-dad/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-mom-or-dad/", bn: "https://guide.wishly.bd/bn/guides/parents-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-mom-or-dad/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-for-mom-or-dad/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Warm family birthday website idea with a heartfelt greeting and memories" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
