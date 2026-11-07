import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__first-date-questions-to-ask-someone.json";

export const metadata: Metadata = {
  title: "25 First Date Questions to Get to Know Someone | Wishly Guide",
  description: "Use these thoughtful first date questions to move beyond small talk, learn about someone naturally and keep the conversation comfortable and respectful.",
  keywords: ["first date questions", "questions to ask on a first date", "good first date conversation starters", "fun first date questions", "meaningful questions to ask someone"],
  alternates: { canonical: "/guides/first-date-questions-to-ask-someone/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "25 First Date Questions to Get to Know Someone | Wishly Guide", description: "Use these thoughtful first date questions to move beyond small talk, learn about someone naturally and keep the conversation comfortable and respectful.", url: "/guides/first-date-questions-to-ask-someone/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp", width: 960, height: 600, alt: "A warm coffee table scene representing relaxed first-date conversation" }] },
  twitter: { card: "summary_large_image", title: "25 First Date Questions to Get to Know Someone | Wishly Guide", description: "Use these thoughtful first date questions to move beyond small talk, learn about someone naturally and keep the conversation comfortable and respectful.", images: ["https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
