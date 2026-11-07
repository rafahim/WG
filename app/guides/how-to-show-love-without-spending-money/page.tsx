import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-show-love-without-spending-money.json";

export const metadata: Metadata = {
  title: "How to Show Love Without Spending Money | 20 Ideas",
  description: "Discover practical ways to show love without spending money, from attentive listening and thoughtful notes to shared time and reliable everyday support.",
  keywords: ["how to show love without spending money", "ways to show love without gifts", "free romantic ideas", "how to show someone you care", "thoughtful no cost gestures"],
  alternates: { canonical: "/guides/how-to-show-love-without-spending-money/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Show Love Without Spending Money | 20 Ideas", description: "Discover practical ways to show love without spending money, from attentive listening and thoughtful notes to shared time and reliable everyday support.", url: "/guides/how-to-show-love-without-spending-money/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp", width: 960, height: 600, alt: "A handwritten gratitude note representing a personal, no-cost expression of care" }] },
  twitter: { card: "summary_large_image", title: "How to Show Love Without Spending Money | 20 Ideas", description: "Discover practical ways to show love without spending money, from attentive listening and thoughtful notes to shared time and reliable everyday support.", images: ["https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
