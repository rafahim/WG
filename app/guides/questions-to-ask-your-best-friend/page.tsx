import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__questions-to-ask-your-best-friend.json";

export const metadata: Metadata = {
  title: "40 Questions to Ask Your Best Friend | Wishly Guide",
  description: "Use these fun and meaningful questions to ask your best friend to reconnect, share memories and learn what matters in each other’s lives today.",
  keywords: ["questions to ask your best friend", "deep questions for best friends", "fun questions to ask friends", "meaningful friendship questions", "questions to get to know your friend better"],
  alternates: { canonical: "/guides/questions-to-ask-your-best-friend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "40 Questions to Ask Your Best Friend | Wishly Guide", description: "Use these fun and meaningful questions to ask your best friend to reconnect, share memories and learn what matters in each other’s lives today.", url: "/guides/questions-to-ask-your-best-friend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/best-friend-forever.webp", width: 960, height: 600, alt: "A friendship-themed memory design representing conversation and shared experiences" }] },
  twitter: { card: "summary_large_image", title: "40 Questions to Ask Your Best Friend | Wishly Guide", description: "Use these fun and meaningful questions to ask your best friend to reconnect, share memories and learn what matters in each other’s lives today.", images: ["https://guide.wishly.bd/assets/editorial/best-friend-forever.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
