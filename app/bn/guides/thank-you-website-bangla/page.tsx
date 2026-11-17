import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__thank-you-website-bangla.json";

const pageTitle = "Thank You Website বানানোর নিয়ম: কৃতজ্ঞতা প্রকাশের Digital Page…";
const pageDescription = "কাউকে ধন্যবাদ জানাতে Wishly দিয়ে personal thank-you website তৈরি করুন—কৃতজ্ঞতার message, স্মৃতি, ছবি, design ও link share করার নিয়ম।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/thank-you-website-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["thank you website", "ধন্যবাদ জানানোর website", "digital thank you card", "online thank you message", "Wishly thank you template"],
  alternates: { canonical: "/bn/guides/thank-you-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/thank-you-website-guide/", bn: "https://guide.wishly.bd/bn/guides/thank-you-website-bangla/", "x-default": "https://guide.wishly.bd/guides/thank-you-website-guide/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/thank-you-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Thank you website design with gratitude message and personal photo" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
