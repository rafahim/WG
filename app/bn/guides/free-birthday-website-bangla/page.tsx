import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__free-birthday-website-bangla.json";

export const metadata: Metadata = {
  title: "ফ্রিতে Birthday Website বানানোর নিয়ম: No-Code সম্পূর্ণ Guide",
  description: "কোনো coding ছাড়াই free-to-start birthday website তৈরি, ছবি ও মেসেজ সাজানো, preview, publish এবং link share করার ধাপে ধাপে বাংলা গাইড।",
  keywords: ["ফ্রিতে birthday website বানানো", "free birthday website maker", "জন্মদিনের ওয়েবসাইট", "কোডিং ছাড়া ওয়েবসাইট", "অনলাইন জন্মদিনের সারপ্রাইজ"],
  alternates: { canonical: "/bn/guides/free-birthday-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/free-birthday-website-maker/", bn: "https://guide.wishly.bd/bn/guides/free-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/free-birthday-website-maker/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "ফ্রিতে Birthday Website বানানোর নিয়ম: No-Code সম্পূর্ণ Guide", description: "কোনো coding ছাড়াই free-to-start birthday website তৈরি, ছবি ও মেসেজ সাজানো, preview, publish এবং link share করার ধাপে ধাপে বাংলা গাইড।", url: "/bn/guides/free-birthday-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp", width: 1200, height: 630, alt: "নিজের ছবি ও জন্মদিনের শুভেচ্ছা দিয়ে তৈরি personal birthday website" }] },
  twitter: { card: "summary_large_image", title: "ফ্রিতে Birthday Website বানানোর নিয়ম: No-Code সম্পূর্ণ Guide", description: "কোনো coding ছাড়াই free-to-start birthday website তৈরি, ছবি ও মেসেজ সাজানো, preview, publish এবং link share করার ধাপে ধাপে বাংলা গাইড।", images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
