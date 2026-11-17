import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-invitation-wording-examples.json";

export const metadata: Metadata = {
  title: "Birthday Invitation Wording: Examples for Every Kind of Party",
  description: "Find clear birthday invitation wording for kids, adults, milestone parties, family dinners and virtual celebrations, plus a checklist of details to include.",
  keywords: ["birthday invitation wording", "birthday invitation message", "birthday party invitation examples", "what to write on a birthday invitation", "digital birthday invitation text"],
  alternates: { canonical: "/guides/birthday-invitation-wording-examples/", languages: { en: "https://guide.wishly.bd/guides/birthday-invitation-wording-examples/", bn: "https://guide.wishly.bd/bn/guides/birthday-invitation-message-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-invitation-wording-examples/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Invitation Wording: Examples for Every Kind of Party", description: "Find clear birthday invitation wording for kids, adults, milestone parties, family dinners and virtual celebrations, plus a checklist of details to include.", url: "/guides/birthday-invitation-wording-examples/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "Digital invitation planning with event details and a clear birthday message" }] },
  twitter: { card: "summary_large_image", title: "Birthday Invitation Wording: Examples for Every Kind of Party", description: "Find clear birthday invitation wording for kids, adults, milestone parties, family dinners and virtual celebrations, plus a checklist of details to include.", images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
