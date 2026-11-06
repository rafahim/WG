import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-celebrate-small-moments-in-a-relationship.json";

export const metadata: Metadata = {
  title: "Celebrate Small Moments in a Relationship",
  description: "Discover simple ways to celebrate everyday relationship milestones, express gratitude and create shared rituals without expensive gifts or grand gestures.",
  keywords: ["how to celebrate small moments in a relationship", "small romantic gestures", "everyday relationship milestones", "ways to appreciate your partner"],
  alternates: { canonical: "/guides/how-to-celebrate-small-moments-in-a-relationship/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Celebrate Small Moments in a Relationship", description: "Discover simple ways to celebrate everyday relationship milestones, express gratitude and create shared rituals without expensive gifts or grand gestures.", url: "/guides/how-to-celebrate-small-moments-in-a-relationship/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp", width: 960, height: 600, alt: "Wishly A Little Forever template preview" }] },
  twitter: { card: "summary_large_image", title: "Celebrate Small Moments in a Relationship", description: "Discover simple ways to celebrate everyday relationship milestones, express gratitude and create shared rituals without expensive gifts or grand gestures.", images: ["https://guide.wishly.bd/assets/editorial/anniversary-forever-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
