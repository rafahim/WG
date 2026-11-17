import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-girlfriend.json";

const pageTitle = "How to Make a Birthday Website for Your Girlfriend: Romantic I…";
const pageDescription = "Plan a thoughtful birthday website for your girlfriend with a heartfelt message, favourite photos, shared memories, music and a reveal that feels like her.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["birthday website for girlfriend", "girlfriend birthday website", "romantic birthday website", "birthday surprise website for her", "Wishly birthday website"],
  alternates: { canonical: "/guides/birthday-website-for-girlfriend/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-girlfriend/", bn: "https://guide.wishly.bd/bn/guides/girlfriend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-girlfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-for-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Romantic birthday surprise website idea with a personal message and keepsake photos" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
