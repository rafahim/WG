import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__boner-birthday-website.json";

export const metadata: Metadata = {
  title: "বোনের Birthday Website বানানোর Guide: ছবি, স্মৃতি ও শুভেচ্ছা সাজানোর নিয়ম",
  description: "বোনের জন্মদিনে childhood photo, পারিবারিক স্মৃতি, ব্যক্তিগত চিঠি ও সুন্দর design দিয়ে birthday website তৈরির সম্পূর্ণ বাংলা গাইড।",
  keywords: ["বোনের জন্মদিনের ওয়েবসাইট", "birthday website for sister", "বোনের জন্মদিনের সারপ্রাইজ", "বোনকে জন্মদিনের শুভেচ্ছা website", "sister birthday surprise online"],
  alternates: { canonical: "/bn/guides/boner-birthday-website/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-sister/", bn: "https://guide.wishly.bd/bn/guides/boner-birthday-website/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-sister/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "বোনের Birthday Website বানানোর Guide: ছবি, স্মৃতি ও শুভেচ্ছা সাজানোর নিয়ম", description: "বোনের জন্মদিনে childhood photo, পারিবারিক স্মৃতি, ব্যক্তিগত চিঠি ও সুন্দর design দিয়ে birthday website তৈরির সম্পূর্ণ বাংলা গাইড।", url: "/bn/guides/boner-birthday-website/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp", width: 1200, height: 630, alt: "ছবি ও ব্যক্তিগত শুভেচ্ছা দিয়ে বোনের জন্য birthday website-এর ধারণা" }] },
  twitter: { card: "summary_large_image", title: "বোনের Birthday Website বানানোর Guide: ছবি, স্মৃতি ও শুভেচ্ছা সাজানোর নিয়ম", description: "বোনের জন্মদিনে childhood photo, পারিবারিক স্মৃতি, ব্যক্তিগত চিঠি ও সুন্দর design দিয়ে birthday website তৈরির সম্পূর্ণ বাংলা গাইড।", images: ["https://guide.wishly.bd/assets/editorial/birthday-wish-website-preview.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
