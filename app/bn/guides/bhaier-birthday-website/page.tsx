import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__bhaier-birthday-website.json";

export const metadata: Metadata = {
  title: "ভাইয়ের Birthday Website বানানোর নিয়ম: মজার স্মৃতি ও শুভেচ্ছার Guide",
  description: "ভাইয়ের জন্মদিনে gaming, sports বা পারিবারিক স্মৃতি, নিজের ছবি এবং আন্তরিক message দিয়ে birthday website তৈরির বাংলা গাইড।",
  keywords: ["ভাইয়ের জন্মদিনের ওয়েবসাইট", "birthday website for brother", "ভাইয়ের birthday surprise", "ভাইকে জন্মদিনের শুভেচ্ছা", "brother birthday website"],
  alternates: { canonical: "/bn/guides/bhaier-birthday-website/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-brother/", bn: "https://guide.wishly.bd/bn/guides/bhaier-birthday-website/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-brother/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "ভাইয়ের Birthday Website বানানোর নিয়ম: মজার স্মৃতি ও শুভেচ্ছার Guide", description: "ভাইয়ের জন্মদিনে gaming, sports বা পারিবারিক স্মৃতি, নিজের ছবি এবং আন্তরিক message দিয়ে birthday website তৈরির বাংলা গাইড।", url: "/bn/guides/bhaier-birthday-website/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp", width: 1200, height: 630, alt: "ভাইয়ের জন্য ব্যক্তিগত শুভেচ্ছাসহ birthday website-এর ধারণা" }] },
  twitter: { card: "summary_large_image", title: "ভাইয়ের Birthday Website বানানোর নিয়ম: মজার স্মৃতি ও শুভেচ্ছার Guide", description: "ভাইয়ের জন্মদিনে gaming, sports বা পারিবারিক স্মৃতি, নিজের ছবি এবং আন্তরিক message দিয়ে birthday website তৈরির বাংলা গাইড।", images: ["https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
