import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-for-boyfriend.json";

const pageTitle = "Birthday Website for Your Boyfriend: A Step-by-Step Guide to a…";
const pageDescription = "Create a birthday website for your boyfriend with shared memories, genuine compliments, favourite photos and a design that matches his personality.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/birthday-magic-template.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["birthday website for boyfriend", "boyfriend birthday website", "birthday website ideas for him", "online birthday surprise for boyfriend", "Wishly birthday"],
  alternates: { canonical: "/guides/birthday-website-for-boyfriend/", languages: { en: "https://guide.wishly.bd/guides/birthday-website-for-boyfriend/", bn: "https://guide.wishly.bd/bn/guides/boyfriend-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-website-for-boyfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/birthday-website-for-boyfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Personal birthday website concept with a celebratory message and photo memories" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
