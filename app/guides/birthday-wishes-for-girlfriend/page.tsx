import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-wishes-for-girlfriend.json";

export const metadata: Metadata = {
  title: "Birthday Wishes for Your Girlfriend: Sweet, Romantic and Personal Examples",
  description: "Explore romantic, sweet, funny and long-distance birthday wishes for your girlfriend, with practical tips for writing a message that sounds like you.",
  keywords: ["birthday wishes for girlfriend", "happy birthday message for girlfriend", "romantic birthday wishes for her", "birthday paragraph for girlfriend", "long distance girlfriend birthday message"],
  alternates: { canonical: "/guides/birthday-wishes-for-girlfriend/", languages: { en: "https://guide.wishly.bd/guides/birthday-wishes-for-girlfriend/", bn: "https://guide.wishly.bd/bn/guides/girlfriend-birthday-wishes-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-wishes-for-girlfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Wishes for Your Girlfriend: Sweet, Romantic and Personal Examples", description: "Explore romantic, sweet, funny and long-distance birthday wishes for your girlfriend, with practical tips for writing a message that sounds like you.", url: "/guides/birthday-wishes-for-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp", width: 1200, height: 630, alt: "A romantic birthday message and personal surprise idea for a girlfriend" }] },
  twitter: { card: "summary_large_image", title: "Birthday Wishes for Your Girlfriend: Sweet, Romantic and Personal Examples", description: "Explore romantic, sweet, funny and long-distance birthday wishes for your girlfriend, with practical tips for writing a message that sounds like you.", images: ["https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
