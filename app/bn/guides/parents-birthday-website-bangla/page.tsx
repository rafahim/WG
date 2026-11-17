import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__parents-birthday-website-bangla.json";

const pageTitle = "মা-বাবার জন্মদিনে Family Website কীভাবে বানাবেন: ছবি, স্মৃতি ও…";
const pageDescription = "মা বা বাবার জন্মদিনে family photo, কৃতজ্ঞতার message এবং সবার ছোট note দিয়ে সহজ, mobile-friendly birthday website তৈরি করার নিয়ম।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/birthday-wish-website-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["মায়ের জন্মদিনের ওয়েবসাইট", "বাবার জন্মদিনের সারপ্রাইজ", "parents birthday website", "family birthday website", "মা বাবার জন্মদিনের অনলাইন শুভেচ্ছা"],
  alternates: { canonical: "/bn/guides/parents-birthday-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-mom-or-dad/", bn: "https://guide.wishly.bd/bn/guides/parents-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-mom-or-dad/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/parents-birthday-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "পরিবারের ছবি ও জন্মদিনের শুভেচ্ছাসহ family birthday website ধারণা" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
