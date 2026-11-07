import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__meaningful-friendship-day-ideas.json";

export const metadata: Metadata = {
  title: "15 Meaningful Friendship Day Ideas for Best Friends",
  description: "Explore Friendship Day ideas for best friends, long-distance friends and groups, with simple activities, personal messages and keepsakes.",
  keywords: ["friendship day ideas", "how to celebrate friendship day", "friendship day activities", "best friend celebration ideas", "meaningful things to do for a friend"],
  alternates: { canonical: "/guides/meaningful-friendship-day-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "15 Meaningful Friendship Day Ideas for Best Friends", description: "Plan Friendship Day with simple activities, personal messages and memory keepsakes for close and distant friends.", url: "/guides/meaningful-friendship-day-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/best-friend-forever-template.webp", width: 960, height: 600, alt: "A friendship-themed digital keepsake design celebrating shared memories" }] },
  twitter: { card: "summary_large_image", title: "15 Meaningful Friendship Day Ideas for Best Friends", description: "Plan Friendship Day with simple activities, personal messages and memory keepsakes for close and distant friends.", images: ["https://guide.wishly.bd/assets/editorial/best-friend-forever-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
