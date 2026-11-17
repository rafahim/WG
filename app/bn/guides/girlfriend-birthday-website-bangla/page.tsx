import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__girlfriend-birthday-website-bangla.json";

const pageTitle = "গার্লফ্রেন্ডের জন্মদিনে Personal Website বানাবেন যেভাবে: Roman…";
const pageDescription = "গার্লফ্রেন্ডের জন্মদিনে Wishly দিয়ে personal website তৈরি করুন—নিজের লেখা, পছন্দের ছবি, shared memories, music এবং সুন্দর surprise page সাজানোর নিয়ম জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["গার্লফ্রেন্ডের জন্মদিনের ওয়েবসাইট", "girlfriend birthday website", "জন্মদিনের অনলাইন সারপ্রাইজ", "romantic birthday website", "Wishly birthday"],
  alternates: { canonical: "/bn/guides/girlfriend-birthday-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-girlfriend/", bn: "https://guide.wishly.bd/bn/guides/girlfriend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-girlfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/girlfriend-birthday-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "গার্লফ্রেন্ডের জন্মদিনের জন্য personal message ও ছবিসহ romantic website ধারণা" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
