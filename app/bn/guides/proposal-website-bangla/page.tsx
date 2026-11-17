import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__proposal-website-bangla.json";

const pageTitle = "অনলাইনে Propose করার Website বানাবেন কীভাবে: Romantic Proposal…";
const pageDescription = "Wishly দিয়ে proposal website তৈরি করার পরিকল্পনা, message, ছবি, design, Preview ও private link share করার ধাপ জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/online-proposal-website.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["proposal website", "অনলাইনে propose করার website", "online proposal page", "digital proposal idea", "romantic website"],
  alternates: { canonical: "/bn/guides/proposal-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/proposal-website/", bn: "https://guide.wishly.bd/bn/guides/proposal-website-bangla/", "x-default": "https://guide.wishly.bd/guides/proposal-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/proposal-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Romantic proposal website design concept with a personal question" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
