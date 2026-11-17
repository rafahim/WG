import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wishly-share-link-bangla.json";

const pageTitle = "Wishly Website-এর Link Copy ও Share করবেন কীভাবে: WhatsApp, Me…";
const pageDescription = "Wishly website publish করার পর link copy, live page test, WhatsApp বা Messenger-এ share এবং private page হলে password আলাদা করে পাঠানোর নিয়ম জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/wishly-link-preview-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["Wishly website link share", "Wishly link copy", "WhatsApp এ Wishly website পাঠানো", "Messenger website share", "Wishly QR code"],
  alternates: { canonical: "/bn/guides/wishly-share-link-bangla/", languages: { en: "https://guide.wishly.bd/guides/share-wish-website-link/", bn: "https://guide.wishly.bd/bn/guides/wishly-share-link-bangla/", "x-default": "https://guide.wishly.bd/guides/share-wish-website-link/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/wishly-share-link-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Wishly published website link preview এবং sharing concept" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
