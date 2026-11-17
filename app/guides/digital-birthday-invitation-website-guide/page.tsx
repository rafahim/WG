import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__digital-birthday-invitation-website-guide.json";

const pageTitle = "How to Create a Digital Birthday Invitation Website";
const pageDescription = "Plan a digital birthday invitation page with clear event details, a welcoming message, a suitable design and a link guests can open on mobile.";
const imageUrl = "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["digital birthday invitation website", "online birthday invitation website", "birthday invitation link", "birthday invite website", "digital birthday invite"],
  alternates: { canonical: "/guides/digital-birthday-invitation-website-guide/", languages: { en: "https://guide.wishly.bd/guides/digital-birthday-invitation-website-guide/", bn: "https://guide.wishly.bd/bn/guides/birthday-invitation-website-bangla/", "x-default": "https://guide.wishly.bd/guides/digital-birthday-invitation-website-guide/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/guides/digital-birthday-invitation-website-guide/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Digital invitation website layout for a birthday celebration" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
