import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__miss-you-website-bangla.json";

const pageTitle = "কাউকে Miss করলে “Miss You” Website বানাবেন কীভাবে: Personal Di…";
const pageDescription = "প্রিয় মানুষ, বন্ধু বা পরিবারের কাউকে miss করলে Wishly দিয়ে personal website তৈরি করুন—message, স্মৃতি, photo ও link share করার নিয়ম জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/miss-you-template.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["miss you website", "মিস ইউ ওয়েবসাইট", "digital miss you letter", "দূরে থাকা প্রিয় মানুষের জন্য website", "long distance website"],
  alternates: { canonical: "/bn/guides/miss-you-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/how-to-make-a-miss-you-website/", bn: "https://guide.wishly.bd/bn/guides/miss-you-website-bangla/", "x-default": "https://guide.wishly.bd/guides/how-to-make-a-miss-you-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/miss-you-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Miss you website-এর জন্য personal letter ও স্মৃতির ছবি" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
