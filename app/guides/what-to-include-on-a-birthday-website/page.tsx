import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__what-to-include-on-a-birthday-website.json";

const pageTitle = "What to Include on a Birthday Website: Checklist";
const pageDescription = "Use this birthday website checklist to plan the welcome, message, photo gallery, memories, optional media, accessibility checks and shareable link.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["what to include on a birthday website", "birthday website checklist", "birthday webpage ideas", "birthday website sections", "birthday website content"],
  alternates: { canonical: "/guides/what-to-include-on-a-birthday-website/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/what-to-include-on-a-birthday-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp", width: 1200, height: 630, alt: "A personalized birthday website preview with greeting and celebration imagery" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
