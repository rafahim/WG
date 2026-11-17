import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__birthday-invitation-website-bangla.json";

const pageTitle = "Online Birthday Invitation Website বানানোর নিয়ম: Digital দাওয়া…";
const pageDescription = "জন্মদিনের online invitation website-এ date, time, venue, host message ও guest instructions কীভাবে সাজাবেন—Wishly দিয়ে digital দাওয়াত তৈরি করুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["online birthday invitation website", "জন্মদিনের ডিজিটাল দাওয়াত", "birthday invitation link", "digital birthday invitation", "অনলাইন জন্মদিনের কার্ড"],
  alternates: { canonical: "/bn/guides/birthday-invitation-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/digital-birthday-invitation-website-guide/", bn: "https://guide.wishly.bd/bn/guides/birthday-invitation-website-bangla/", "x-default": "https://guide.wishly.bd/guides/digital-birthday-invitation-website-guide/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/birthday-invitation-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "জন্মদিনের digital invitation website-এর design ও event details" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
