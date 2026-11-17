import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__boyfriend-birthday-website-bangla.json";

const pageTitle = "Boyfriend-এর Birthday Website কীভাবে বানাবেন: Personal Surpris…";
const pageDescription = "Boyfriend-এর জন্য birthday website তৈরি করতে photo, funny memories, personal message, colour ও Wishly template কীভাবে সাজাবেন—ধাপে ধাপে জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["boyfriend birthday website", "বয়ফ্রেন্ডের জন্মদিনের সারপ্রাইজ", "birthday website for boyfriend", "জন্মদিনের personal website", "Wishly tutorial"],
  alternates: { canonical: "/bn/guides/boyfriend-birthday-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-boyfriend/", bn: "https://guide.wishly.bd/bn/guides/boyfriend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-boyfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/boyfriend-birthday-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Boyfriend-এর জন্য birthday surprise website design inspiration" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
