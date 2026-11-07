import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__personalized-digital-gift-ideas-for-long-distance-loved-ones.json";

export const metadata: Metadata = {
  title: "12 Personalized Digital Gift Ideas for Long-Distance Loved Ones",
  description: "Explore digital gift ideas for long-distance partners, friends and family, including voice notes, memory pages, playlists and private messages.",
  keywords: ["personalized digital gifts", "digital gifts for long distance partner", "virtual gifts for long distance relationship", "online gifts for loved ones", "long distance surprise ideas"],
  alternates: { canonical: "/guides/personalized-digital-gift-ideas-for-long-distance-loved-ones/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "12 Personalized Digital Gift Ideas for Long-Distance Loved Ones", description: "Explore digital gift ideas for long-distance partners, friends and family, from voice notes to memory pages.", url: "/guides/personalized-digital-gift-ideas-for-long-distance-loved-ones/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/long-distance-couple-surprise.webp", width: 1200, height: 630, alt: "A long-distance digital surprise design representing a personal gift shared across distance" }] },
  twitter: { card: "summary_large_image", title: "12 Personalized Digital Gift Ideas for Long-Distance Loved Ones", description: "Explore digital gift ideas for long-distance partners, friends and family, from voice notes to memory pages.", images: ["https://guide.wishly.bd/assets/editorial/long-distance-couple-surprise.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
