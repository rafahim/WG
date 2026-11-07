import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__ai-birthday-message-generator-how-to-personalize-wishes.json";

export const metadata: Metadata = {
  title: "AI Birthday Message Generator: Personalize Your Wish",
  description: "Learn how to use an AI birthday message generator for ideas, choose the right tone and add personal details so a birthday wish does not sound generic.",
  keywords: ["AI birthday message generator", "AI birthday wishes", "personalized birthday message ideas", "birthday wish prompt", "how to write a birthday message"],
  alternates: { canonical: "/guides/ai-birthday-message-generator-how-to-personalize-wishes/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "AI Birthday Message Generator: Personalize Your Wish", description: "Learn how to use an AI birthday message generator for ideas, choose the right tone and add personal details so a birthday wish does not sound generic.", url: "/guides/ai-birthday-message-generator-how-to-personalize-wishes/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp", width: 1200, height: 630, alt: "A personalized birthday wish website preview with room for a heartfelt message" }] },
  twitter: { card: "summary_large_image", title: "AI Birthday Message Generator: Personalize Your Wish", description: "Learn how to use an AI birthday message generator for ideas, choose the right tone and add personal details so a birthday wish does not sound generic.", images: ["https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
