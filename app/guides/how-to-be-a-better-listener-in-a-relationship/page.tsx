import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-be-a-better-listener-in-a-relationship.json";

export const metadata: Metadata = {
  title: "Be a Better Listener in a Relationship",
  description: "Build better listening habits in a relationship by giving attention, asking open questions, reflecting feelings and avoiding premature advice.",
  keywords: ["how to be a better listener in a relationship", "active listening for couples", "how to listen to your girlfriend", "relationship listening skills"],
  alternates: { canonical: "/guides/how-to-be-a-better-listener-in-a-relationship/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Be a Better Listener in a Relationship", description: "Build better listening habits in a relationship by giving attention, asking open questions, reflecting feelings and avoiding premature advice.", url: "/guides/how-to-be-a-better-listener-in-a-relationship/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp", width: 960, height: 600, alt: "Wishly Coffee With Friend template preview" }] },
  twitter: { card: "summary_large_image", title: "Be a Better Listener in a Relationship", description: "Build better listening habits in a relationship by giving attention, asking open questions, reflecting feelings and avoiding premature advice.", images: ["https://guide.wishly.bd/assets/editorial/coffee-with-friend-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
