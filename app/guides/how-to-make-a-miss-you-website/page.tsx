import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-a-miss-you-website.json";

const pageTitle = "How to Make a “Miss You” Website: A Personal Digital Message G…";
const pageDescription = "Create a thoughtful miss-you website for a partner, friend or family member with a gentle message, shared memories, photos and a personal link.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/miss-you-template.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["miss you website", "miss-you website for someone", "digital miss you letter", "long distance relationship website", "personal message website"],
  alternates: { canonical: "/guides/how-to-make-a-miss-you-website/", languages: { en: "https://guide.wishly.bd/guides/how-to-make-a-miss-you-website/", bn: "https://guide.wishly.bd/bn/guides/miss-you-website-bangla/", "x-default": "https://guide.wishly.bd/guides/how-to-make-a-miss-you-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/how-to-make-a-miss-you-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "A gentle miss-you website concept with a personal letter and memory photos" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
