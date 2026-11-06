import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__what-to-write-when-you-miss-your-girlfriend.json";

export const metadata: Metadata = {
  title: "What to Write When You Miss Your Girlfriend",
  description: "Find thoughtful messages for when you miss your girlfriend, including long-distance texts, voice-note prompts and a simple digital letter outline.",
  keywords: ["what to write when you miss your girlfriend", "I miss you message for girlfriend", "long distance miss you messages", "romantic message when you miss her"],
  alternates: { canonical: "/guides/what-to-write-when-you-miss-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "What to Write When You Miss Your Girlfriend", description: "Find thoughtful messages for when you miss your girlfriend, including long-distance texts, voice-note prompts and a simple digital letter outline.", url: "/guides/what-to-write-when-you-miss-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/miss-you-template.webp", width: 960, height: 600, alt: "Wishly Miss You template preview for a personal message" }] },
  twitter: { card: "summary_large_image", title: "What to Write When You Miss Your Girlfriend", description: "Find thoughtful messages for when you miss your girlfriend, including long-distance texts, voice-note prompts and a simple digital letter outline.", images: ["https://guide.wishly.bd/assets/editorial/miss-you-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
