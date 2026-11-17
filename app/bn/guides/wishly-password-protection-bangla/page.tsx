import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wishly-password-protection-bangla.json";

const pageTitle = "Wishly Website-এ Password Protection চালু করবেন কীভাবে: সম্পূর…";
const pageDescription = "Wishly website-এ password যোগ, change বা remove করা, visitor unlock, ৩০ দিনের session, password sharing এবং common সমস্যা সমাধান শিখুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/wishly-website-password-protection.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["Wishly website password", "Wishly password protection", "website password protect Bangla", "Wishly website private করা", "ওয়েবসাইটে password দেওয়া"],
  alternates: { canonical: "/bn/guides/wishly-password-protection-bangla/", languages: { en: "https://guide.wishly.bd/guides/password-protect-wishly-website/", bn: "https://guide.wishly.bd/bn/guides/wishly-password-protection-bangla/", "x-default": "https://guide.wishly.bd/guides/password-protect-wishly-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/wishly-password-protection-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Wishly website password lock screen ও password field" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
