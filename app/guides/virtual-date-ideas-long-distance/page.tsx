import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__virtual-date-ideas-long-distance.json";

export const metadata: Metadata = {
  title: "Virtual Date Ideas for Long-Distance Couples",
  description: "Explore virtual date ideas for long-distance couples, including movie nights, online games, cooking together, question prompts and creative shared activities.",
  keywords: ["virtual date ideas for long distance couples", "online date ideas for couples", "long distance date night ideas", "virtual romantic date ideas"],
  alternates: { canonical: "/guides/virtual-date-ideas-long-distance/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Virtual Date Ideas for Long-Distance Couples", description: "Explore virtual date ideas for long-distance couples, including movie nights, online games, cooking together, question prompts and creative shared activities.", url: "/guides/virtual-date-ideas-long-distance/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/midnight-love-template.webp", width: 960, height: 600, alt: "Wishly Midnight Love template preview for a digital date surprise" }] },
  twitter: { card: "summary_large_image", title: "Virtual Date Ideas for Long-Distance Couples", description: "Explore virtual date ideas for long-distance couples, including movie nights, online games, cooking together, question prompts and creative shared activities.", images: ["https://guide.wishly.bd/assets/editorial/midnight-love-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
