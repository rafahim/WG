import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__digital-love-letter-website-bangla.json";

const pageTitle = "Digital Love Letter Website কীভাবে বানাবেন: Online প্রেমপত্রের…";
const pageDescription = "Digital love letter website-এ নিজের লেখা, ছবি, স্মৃতি ও supported media সাজিয়ে প্রিয় মানুষকে personal link পাঠানোর নিয়ম জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/digital-love-letter-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["digital love letter website", "online প্রেমপত্র", "digital love letter", "love letter website maker", "personal love letter page"],
  alternates: { canonical: "/bn/guides/digital-love-letter-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/digital-love-letter-website/", bn: "https://guide.wishly.bd/bn/guides/digital-love-letter-website-bangla/", "x-default": "https://guide.wishly.bd/guides/digital-love-letter-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/digital-love-letter-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Digital love letter website-এর জন্য খোলা চিঠি ও personal memory design" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
