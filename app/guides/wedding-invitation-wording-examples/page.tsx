import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__wedding-invitation-wording-examples.json";

export const metadata: Metadata = {
  title: "Wedding Invitation Wording: Formal, Casual and Digital Examples",
  description: "Write a clear wedding invitation with wording examples for formal ceremonies, family celebrations and digital invites, plus an essential information checklist.",
  keywords: ["wedding invitation wording", "wedding invitation message examples", "what to write on a wedding invitation", "digital wedding invitation wording", "wedding invitation text"],
  alternates: { canonical: "/guides/wedding-invitation-wording-examples/", languages: { en: "https://guide.wishly.bd/guides/wedding-invitation-wording-examples/", bn: "https://guide.wishly.bd/bn/guides/biyer-dawat-lekhar-niyom/", "x-default": "https://guide.wishly.bd/guides/wedding-invitation-wording-examples/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Wedding Invitation Wording: Formal, Casual and Digital Examples", description: "Write a clear wedding invitation with wording examples for formal ceremonies, family celebrations and digital invites, plus an essential information checklist.", url: "/guides/wedding-invitation-wording-examples/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "Wedding invitation planning checklist with ceremony details and digital design" }] },
  twitter: { card: "summary_large_image", title: "Wedding Invitation Wording: Formal, Casual and Digital Examples", description: "Write a clear wedding invitation with wording examples for formal ceremonies, family celebrations and digital invites, plus an essential information checklist.", images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
