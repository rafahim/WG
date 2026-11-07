import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-ask-a-girl-to-be-your-girlfriend.json";

export const metadata: Metadata = {
  title: "Ask a Girl to Be Your Girlfriend | Wishly",
  description: "Learn how to ask a girl to be your girlfriend with clear, considerate words\u2014in person, over text or across distance\u2014and how to respect her answer.",
  keywords: ["how to ask a girl to be your girlfriend", "how to ask her to be my girlfriend over text", "what to say to make a relationship official", "ask someone to be your girlfriend long distance"],
  alternates: { canonical: "/guides/how-to-ask-a-girl-to-be-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Ask a Girl to Be Your Girlfriend | Wishly", description: "Learn how to ask a girl to be your girlfriend with clear, considerate words\u2014in person, over text or across distance\u2014and how to respect her answer.", url: "/guides/how-to-ask-a-girl-to-be-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp", width: 960, height: 600, alt: "Wishly Valentine proposal template preview" }] },
  twitter: { card: "summary_large_image", title: "Ask a Girl to Be Your Girlfriend | Wishly", description: "Learn how to ask a girl to be your girlfriend with clear, considerate words\u2014in person, over text or across distance\u2014and how to respect her answer.", images: ["https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
