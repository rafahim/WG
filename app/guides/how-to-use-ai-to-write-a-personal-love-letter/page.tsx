import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-use-ai-to-write-a-personal-love-letter.json";

export const metadata: Metadata = {
  title: "AI Love Letter Generator: Write a Personal Letter | Wishly",
  description: "Use an AI love letter generator as a starting point, then add real memories, specific details and your own voice so the final letter feels personal and sincere.",
  keywords: ["AI love letter generator", "AI love letter writer", "how to write a love letter with AI", "personal love letter prompt", "AI romantic letter ideas"],
  alternates: { canonical: "/guides/how-to-use-ai-to-write-a-personal-love-letter/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "AI Love Letter Generator: Write a Personal Letter | Wishly", description: "Use an AI love letter generator as a starting point, then add real memories, specific details and your own voice so the final letter feels personal and sincere.", url: "/guides/how-to-use-ai-to-write-a-personal-love-letter/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/digital-love-letter-envelope.webp", width: 1200, height: 630, alt: "A digital love letter envelope representing a personal romantic message" }] },
  twitter: { card: "summary_large_image", title: "AI Love Letter Generator: Write a Personal Letter | Wishly", description: "Use an AI love letter generator as a starting point, then add real memories, specific details and your own voice so the final letter feels personal and sincere.", images: ["https://guide.wishly.bd/assets/editorial/digital-love-letter-envelope.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
