import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__digital-memory-book-website.json";

export const metadata: Metadata = {
  title: "Create a Digital Memory Book Website",
  description: "Turn photos, captions and shared stories into a digital memory book website with a clear timeline, meaningful chapters and thoughtful sharing.",
  alternates: { canonical: "/guides/digital-memory-book-website/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Create a Digital Memory Book Website", description: "Turn photos, captions and shared stories into a digital memory book website with a clear timeline, meaningful chapters and thoughtful sharing.", url: "/guides/digital-memory-book-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/digital-memory-book-website.webp", width: 1200, height: 630, alt: "A digital anniversary memory book website built around photographs and a personal story" }] },
  twitter: { card: "summary_large_image", title: "Create a Digital Memory Book Website", description: "Turn photos, captions and shared stories into a digital memory book website with a clear timeline, meaningful chapters and thoughtful sharing.", images: ["https://guide.wishly.bd/assets/editorial/digital-memory-book-website.webp"] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
