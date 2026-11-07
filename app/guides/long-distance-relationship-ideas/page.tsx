import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__long-distance-relationship-ideas.json";

export const metadata: Metadata = {
  title: "Long-Distance Relationship Ideas | Wishly",
  description: "Practical long-distance relationship ideas for communication, shared routines, meaningful digital surprises, virtual activities and future plans.",
  keywords: ["long distance relationship ideas", "how to keep long distance relationship strong", "long distance couple activities", "long distance relationship surprises"],
  alternates: { canonical: "/guides/long-distance-relationship-ideas/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Long-Distance Relationship Ideas | Wishly", description: "Practical long-distance relationship ideas for communication, shared routines, meaningful digital surprises, virtual activities and future plans.", url: "/guides/long-distance-relationship-ideas/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/miss-you-template.webp", width: 960, height: 600, alt: "Wishly Miss You template for a long-distance message" }] },
  twitter: { card: "summary_large_image", title: "Long-Distance Relationship Ideas | Wishly", description: "Practical long-distance relationship ideas for communication, shared routines, meaningful digital surprises, virtual activities and future plans.", images: ["https://guide.wishly.bd/assets/editorial/miss-you-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
