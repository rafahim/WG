import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__best-friend-birthday-website-bangla.json";

const pageTitle = "Best Friend-এর Birthday Website বানানোর নিয়ম: Friendship Memor…";
const pageDescription = "Best friend-এর জন্মদিনে funny memory, friendship milestone, group message ও ছবি দিয়ে একটি personal Wishly birthday website তৈরি করুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/best-friend-forever.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["best friend birthday website", "বন্ধুর জন্মদিনের ওয়েবসাইট", "বন্ধুর জন্মদিনের অনলাইন সারপ্রাইজ", "friendship birthday ideas", "Wishly best friend"],
  alternates: { canonical: "/bn/guides/best-friend-birthday-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-best-friend/", bn: "https://guide.wishly.bd/bn/guides/best-friend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-best-friend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/best-friend-birthday-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "বন্ধুত্বের স্মৃতি ও ছবিসহ best friend birthday website-এর ধারণা" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
