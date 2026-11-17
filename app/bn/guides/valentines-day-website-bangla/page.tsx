import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__valentines-day-website-bangla.json";

export const metadata: Metadata = {
  title: "Valentine’s Day Surprise Website: ভালোবাসার মানুষের জন্য Digital Gift",
  description: "নিজেদের গল্প, প্রিয় ছবি, love letter ও shareable page দিয়ে Valentine’s Day surprise website তৈরির সম্পূর্ণ বাংলা গাইড।",
  keywords: ["valentines day website bangla", "ভ্যালেন্টাইনস ডে সারপ্রাইজ ওয়েবসাইট", "valentine website for girlfriend", "valentine digital gift", "প্রেমিকের জন্য valentine surprise"],
  alternates: { canonical: "/bn/guides/valentines-day-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/valentines-day-surprise-website/", bn: "https://guide.wishly.bd/bn/guides/valentines-day-website-bangla/", "x-default": "https://guide.wishly.bd/guides/valentines-day-surprise-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Valentine’s Day Surprise Website: ভালোবাসার মানুষের জন্য Digital Gift", description: "নিজেদের গল্প, প্রিয় ছবি, love letter ও shareable page দিয়ে Valentine’s Day surprise website তৈরির সম্পূর্ণ বাংলা গাইড।", url: "/bn/guides/valentines-day-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp", width: 1200, height: 630, alt: "ব্যক্তিগত চিঠি ও স্মৃতি দিয়ে তৈরি Valentine website-এর ধারণা" }] },
  twitter: { card: "summary_large_image", title: "Valentine’s Day Surprise Website: ভালোবাসার মানুষের জন্য Digital Gift", description: "নিজেদের গল্প, প্রিয় ছবি, love letter ও shareable page দিয়ে Valentine’s Day surprise website তৈরির সম্পূর্ণ বাংলা গাইড।", images: ["https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
