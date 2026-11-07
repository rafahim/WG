import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-build-emotional-intimacy-in-a-relationship.json";

export const metadata: Metadata = {
  title: "How to Build Emotional Intimacy in a Relationship",
  description: "Understand emotional intimacy and explore practical ways to build trust, listen with care, share honestly and create everyday rituals of connection.",
  keywords: ["how to build emotional intimacy in a relationship", "emotional intimacy meaning", "how to feel closer to your partner", "build trust and emotional connection", "emotional connection in relationships"],
  alternates: { canonical: "/guides/how-to-build-emotional-intimacy-in-a-relationship/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Build Emotional Intimacy in a Relationship", description: "Understand emotional intimacy and explore practical ways to build trust, listen with care, share honestly and create everyday rituals of connection.", url: "/guides/how-to-build-emotional-intimacy-in-a-relationship/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/our-love-map-template.webp", width: 960, height: 600, alt: "A shared memory map representing emotional closeness and a couple’s story" }] },
  twitter: { card: "summary_large_image", title: "How to Build Emotional Intimacy in a Relationship", description: "Understand emotional intimacy and explore practical ways to build trust, listen with care, share honestly and create everyday rituals of connection.", images: ["https://guide.wishly.bd/assets/editorial/our-love-map-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
