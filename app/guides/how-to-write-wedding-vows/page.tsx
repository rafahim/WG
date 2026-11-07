import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-write-wedding-vows.json";

export const metadata: Metadata = {
  title: "How to Write Wedding Vows: Structure & Prompts | Wishly",
  description: "Learn how to write personal wedding vows with a clear structure, reflection prompts and examples. Make promises that sound authentic to your relationship.",
  keywords: ["how to write wedding vows", "wedding vow examples", "personal wedding vows", "what to include in wedding vows", "short wedding vows"],
  alternates: { canonical: "/guides/how-to-write-wedding-vows/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Write Wedding Vows: Structure & Prompts | Wishly", description: "Learn how to write personal wedding vows with a clear structure, reflection prompts and examples. Make promises that sound authentic to your relationship.", url: "/guides/how-to-write-wedding-vows/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wedding-story-website.webp", width: 1200, height: 630, alt: "A romantic wedding story website design with elegant typography and floral details" }] },
  twitter: { card: "summary_large_image", title: "How to Write Wedding Vows: Structure & Prompts | Wishly", description: "Learn how to write personal wedding vows with a clear structure, reflection prompts and examples. Make promises that sound authentic to your relationship.", images: ["https://guide.wishly.bd/assets/editorial/wedding-story-website.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
