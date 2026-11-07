import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-start-a-difficult-conversation-with-your-partner.json";

export const metadata: Metadata = {
  title: "How to Start a Difficult Conversation With Your Partner",
  description: "Learn a calm, practical way to raise a difficult relationship topic, use clear I-statements, listen to your partner and agree on a next step.",
  keywords: ["how to start a difficult conversation with your partner", "how to talk about problems in a relationship", "relationship conversation starters", "how to communicate feelings to your partner", "I statements relationship examples"],
  alternates: { canonical: "/guides/how-to-start-a-difficult-conversation-with-your-partner/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Start a Difficult Conversation With Your Partner", description: "Learn a calm, practical way to raise a difficult relationship topic, use clear I-statements, listen to your partner and agree on a next step.", url: "/guides/how-to-start-a-difficult-conversation-with-your-partner/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/sorry-letter-guide.webp", width: 1200, height: 630, alt: "A thoughtful apology letter design representing careful and respectful communication" }] },
  twitter: { card: "summary_large_image", title: "How to Start a Difficult Conversation With Your Partner", description: "Learn a calm, practical way to raise a difficult relationship topic, use clear I-statements, listen to your partner and agree on a next step.", images: ["https://guide.wishly.bd/assets/editorial/sorry-letter-guide.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
