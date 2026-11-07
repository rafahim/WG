import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__questions-to-ask-parents-and-grandparents-about-their-lives.json";

export const metadata: Metadata = {
  title: "40 Questions to Ask Parents & Grandparents About Their Lives",
  description: "Use these thoughtful family history questions to invite parents and grandparents to share memories, traditions, lessons, stories and meaningful moments.",
  keywords: ["questions to ask parents about their life", "questions to ask grandparents", "family history questions", "questions to preserve family memories", "meaningful questions for parents"],
  alternates: { canonical: "/guides/questions-to-ask-parents-and-grandparents-about-their-lives/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "40 Questions to Ask Parents & Grandparents About Their Lives", description: "Use these thoughtful family history questions to invite parents and grandparents to share memories, traditions, lessons, stories and meaningful moments.", url: "/guides/questions-to-ask-parents-and-grandparents-about-their-lives/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp", width: 960, height: 600, alt: "A keepsake-style gratitude note representing family memories and stories" }] },
  twitter: { card: "summary_large_image", title: "40 Questions to Ask Parents & Grandparents About Their Lives", description: "Use these thoughtful family history questions to invite parents and grandparents to share memories, traditions, lessons, stories and meaningful moments.", images: ["https://guide.wishly.bd/assets/editorial/gratitude-note-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
