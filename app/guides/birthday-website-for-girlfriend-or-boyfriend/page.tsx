import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-girlfriend-or-boyfriend.json";

const pageTitle = "Birthday Website for Girlfriend or Boyfriend";
const pageDescription = "Plan a birthday website for your girlfriend or boyfriend with a personal message, shared memories, thoughtful photos and a reveal that fits their style.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["birthday website for girlfriend", "birthday website for boyfriend", "girlfriend birthday website", "boyfriend birthday website", "romantic birthday website ideas"],
  alternates: { canonical: "/guides/birthday-website-for-girlfriend-or-boyfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-for-girlfriend-or-boyfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp", width: 1200, height: 630, alt: "A romantic birthday surprise idea prepared for a partner" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
