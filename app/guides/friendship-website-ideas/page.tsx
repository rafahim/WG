import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__friendship-website-ideas.json";

export const metadata: Metadata = {
  title: "Friendship Website Ideas | Wishly Guide",
  description: "Explore friendship website ideas using photo timelines, inside jokes, thank-you notes and shared memories.",
  alternates: { canonical: "/guides/friendship-website-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Friendship Website Ideas | Wishly Guide", description: "Explore friendship website ideas using photo timelines, inside jokes, thank-you notes and shared memories.", url: "/guides/friendship-website-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — practical inspiration for meaningful moments" }] },
  twitter: { card: "summary_large_image", title: "Friendship Website Ideas | Wishly Guide", description: "Explore friendship website ideas using photo timelines, inside jokes, thank-you notes and shared memories.", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
