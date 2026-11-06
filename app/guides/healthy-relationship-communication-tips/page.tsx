import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__healthy-relationship-communication-tips.json";

export const metadata: Metadata = {
  title: "Healthy Relationship Communication Tips",
  description: "Explore practical relationship communication tips including active listening, clear requests, boundaries, timing, conflict repair and regular check-ins.",
  keywords: ["healthy relationship communication", "relationship communication tips", "how to communicate better with girlfriend", "healthy communication habits for couples"],
  alternates: { canonical: "/guides/healthy-relationship-communication-tips/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Healthy Relationship Communication Tips", description: "Explore practical relationship communication tips including active listening, clear requests, boundaries, timing, conflict repair and regular check-ins.", url: "/guides/healthy-relationship-communication-tips/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp", width: 960, height: 600, alt: "Wishly A Coffee With Friend template preview" }] },
  twitter: { card: "summary_large_image", title: "Healthy Relationship Communication Tips", description: "Explore practical relationship communication tips including active listening, clear requests, boundaries, timing, conflict repair and regular check-ins.", images: ["https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
