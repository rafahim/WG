import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__long-distance-relationship-surprise-ideas.json";

export const metadata: Metadata = {
  title: "15 Long-Distance Relationship Surprise Ideas | Wishly",
  description: "Find thoughtful long-distance surprise ideas using messages, video calls, posts or private digital links—without creating pressure.",
  keywords: ["long distance relationship surprise ideas", "long distance surprise for girlfriend", "long distance surprise for boyfriend", "digital surprises for long distance partner", "ways to surprise your partner from afar"],
  alternates: { canonical: "/guides/long-distance-relationship-surprise-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "15 Long-Distance Relationship Surprise Ideas | Wishly", description: "Explore long-distance surprise ideas for messages, video calls, letters and thoughtful digital gifts.", url: "/guides/long-distance-relationship-surprise-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/long-distance-couple-surprise.webp", width: 1200, height: 630, alt: "A long-distance couple connecting through a thoughtful digital surprise" }] },
  twitter: { card: "summary_large_image", title: "15 Long-Distance Relationship Surprise Ideas | Wishly", description: "Explore long-distance surprise ideas for messages, video calls, letters and thoughtful digital gifts.", images: ["https://guide.wishly.bd/assets/editorial/long-distance-couple-surprise.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
