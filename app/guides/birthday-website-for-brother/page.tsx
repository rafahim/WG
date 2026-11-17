import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-brother.json";

export const metadata: Metadata = {
  title: "Birthday Website for Your Brother: A Personal Surprise Guide",
  description: "Create a birthday website for your brother with gaming, sports or family memories, meaningful photos and a message he will recognise.",
  keywords: ["birthday website for brother", "brother birthday website", "birthday surprise for brother online", "happy birthday brother page", "brother birthday message website"],
  alternates: { canonical: "/guides/birthday-website-for-brother/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-brother/", bn: "https://guide.wishly.bd/bn/guides/bhaier-birthday-website/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-brother/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Birthday Website for Your Brother: A Personal Surprise Guide", description: "Create a birthday website for your brother with gaming, sports or family memories, meaningful photos and a message he will recognise.", url: "/guides/birthday-website-for-brother/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp", width: 1200, height: 630, alt: "A celebratory birthday website idea for a brother with a personal message" }] },
  twitter: { card: "summary_large_image", title: "Birthday Website for Your Brother: A Personal Surprise Guide", description: "Create a birthday website for your brother with gaming, sports or family memories, meaningful photos and a message he will recognise.", images: ["https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
