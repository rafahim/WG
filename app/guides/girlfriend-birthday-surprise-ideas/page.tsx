import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__girlfriend-birthday-surprise-ideas.json";

export const metadata: Metadata = {
  title: "Girlfriend Birthday Surprise Ideas | Wishly",
  description: "Plan a thoughtful birthday surprise for your girlfriend with personal messages, photo memories, useful gifts, shared experiences and a birthday website.",
  keywords: ["girlfriend birthday surprise ideas", "birthday surprise for girlfriend", "unique birthday ideas for girlfriend", "birthday website for girlfriend"],
  alternates: { canonical: "/guides/girlfriend-birthday-surprise-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Girlfriend Birthday Surprise Ideas | Wishly", description: "Plan a thoughtful birthday surprise for your girlfriend with personal messages, photo memories, useful gifts, shared experiences and a birthday website.", url: "/guides/girlfriend-birthday-surprise-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp", width: 960, height: 600, alt: "Wishly A Little Birthday Magic template preview" }] },
  twitter: { card: "summary_large_image", title: "Girlfriend Birthday Surprise Ideas | Wishly", description: "Plan a thoughtful birthday surprise for your girlfriend with personal messages, photo memories, useful gifts, shared experiences and a birthday website.", images: ["https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
