import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-plan-a-thoughtful-date-night.json";

export const metadata: Metadata = {
  title: "How to Plan a Thoughtful Date Night",
  description: "Plan a meaningful date night with shared-interest ideas, simple preparation, thoughtful details and ways to make the experience comfortable for both people.",
  keywords: ["how to plan a date night", "romantic date night ideas", "cheap date night ideas for couples", "thoughtful date ideas"],
  alternates: { canonical: "/guides/how-to-plan-a-thoughtful-date-night/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "How to Plan a Thoughtful Date Night", description: "Plan a meaningful date night with shared-interest ideas, simple preparation, thoughtful details and ways to make the experience comfortable for both people.", url: "/guides/how-to-plan-a-thoughtful-date-night/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/our-love-map-template.webp", width: 960, height: 600, alt: "Wishly Our Love Map template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Plan a Thoughtful Date Night", description: "Plan a meaningful date night with shared-interest ideas, simple preparation, thoughtful details and ways to make the experience comfortable for both people.", images: ["https://guide.wishly.bd/assets/editorial/our-love-map-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
