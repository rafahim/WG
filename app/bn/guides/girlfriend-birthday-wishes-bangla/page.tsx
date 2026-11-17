import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__girlfriend-birthday-wishes-bangla.json";

export const metadata: Metadata = {
  title: "গার্লফ্রেন্ডের জন্মদিনের শুভেচ্ছা: Romantic ও Personal Message Ideas",
  description: "গার্লফ্রেন্ডের জন্য romantic, sweet, funny ও long-distance birthday wishes-এর নমুনা এবং নিজের মতো message লেখার সহজ নিয়ম।",
  keywords: ["গার্লফ্রেন্ডের জন্মদিনের শুভেচ্ছা", "birthday wishes for girlfriend bangla", "প্রেমিকার জন্মদিনের মেসেজ", "romantic birthday message for her", "girlfriend birthday paragraph"],
  alternates: { canonical: "/bn/guides/girlfriend-birthday-wishes-bangla/", languages: { en: "https://guide.wishly.bd/guides/birthday-wishes-for-girlfriend/", bn: "https://guide.wishly.bd/bn/guides/girlfriend-birthday-wishes-bangla/", "x-default": "https://guide.wishly.bd/guides/birthday-wishes-for-girlfriend/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "গার্লফ্রেন্ডের জন্মদিনের শুভেচ্ছা: Romantic ও Personal Message Ideas", description: "গার্লফ্রেন্ডের জন্য romantic, sweet, funny ও long-distance birthday wishes-এর নমুনা এবং নিজের মতো message লেখার সহজ নিয়ম।", url: "/bn/guides/girlfriend-birthday-wishes-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp", width: 1200, height: 630, alt: "গার্লফ্রেন্ডের জন্য romantic birthday message ও personal surprise-এর ধারণা" }] },
  twitter: { card: "summary_large_image", title: "গার্লফ্রেন্ডের জন্মদিনের শুভেচ্ছা: Romantic ও Personal Message Ideas", description: "গার্লফ্রেন্ডের জন্য romantic, sweet, funny ও long-distance birthday wishes-এর নমুনা এবং নিজের মতো message লেখার সহজ নিয়ম।", images: ["https://guide.wishly.bd/assets/editorial/girlfriend-birthday-gift-ideas.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
