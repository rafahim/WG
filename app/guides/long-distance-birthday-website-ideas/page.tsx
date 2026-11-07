import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__long-distance-birthday-website-ideas.json";

export const metadata: Metadata = {
  title: "Long-Distance Birthday Website Ideas",
  description: "Plan a personal long-distance birthday surprise website with a thoughtful message, shared memories, photos and a simple link to send across time zones.",
  alternates: { canonical: "/guides/long-distance-birthday-website-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Long-Distance Birthday Website Ideas", description: "Plan a personal long-distance birthday surprise website with a thoughtful message, shared memories, photos and a simple link to send across time zones.", url: "/guides/long-distance-birthday-website-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/long-distance-birthday-surprise.webp", width: 1200, height: 630, alt: "A long-distance birthday surprise idea with a personal digital message and memories" }] },
  twitter: { card: "summary_large_image", title: "Long-Distance Birthday Website Ideas", description: "Plan a personal long-distance birthday surprise website with a thoughtful message, shared memories, photos and a simple link to send across time zones.", images: ["https://guide.wishly.bd/assets/editorial/long-distance-birthday-surprise.webp"] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
