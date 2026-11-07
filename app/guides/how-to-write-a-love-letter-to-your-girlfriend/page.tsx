import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-write-a-love-letter-to-your-girlfriend.json";

export const metadata: Metadata = {
  title: "Write a Love Letter to Your Girlfriend",
  description: "Learn how to write a heartfelt love letter to your girlfriend with a personal opening, meaningful memories, specific appreciation and a natural closing.",
  keywords: ["how to write a love letter to your girlfriend", "love letter for girlfriend", "romantic letter ideas", "what to write in a love letter"],
  alternates: { canonical: "/guides/how-to-write-a-love-letter-to-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Write a Love Letter to Your Girlfriend", description: "Learn how to write a heartfelt love letter to your girlfriend with a personal opening, meaningful memories, specific appreciation and a natural closing.", url: "/guides/how-to-write-a-love-letter-to-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/love-letter-template.webp", width: 960, height: 600, alt: "Wishly Love Letter template preview for a personal romantic message" }] },
  twitter: { card: "summary_large_image", title: "Write a Love Letter to Your Girlfriend", description: "Learn how to write a heartfelt love letter to your girlfriend with a personal opening, meaningful memories, specific appreciation and a natural closing.", images: ["https://guide.wishly.bd/assets/editorial/love-letter-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
