import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__password-protect-wishly-website.json";

export const metadata: Metadata = {
  title: "Password Protect a Wishly Website | Complete Guide",
  description: "Learn how to add, change or remove password protection on a Wishly website, how visitors unlock it, how long access lasts, and how to share the password safely.",
  alternates: { canonical: "/guides/password-protect-wishly-website/", languages: { en: "https://guide.wishly.bd/guides/password-protect-wishly-website/", bn: "https://guide.wishly.bd/bn/guides/wishly-password-protection-bangla/", "x-default": "https://guide.wishly.bd/guides/password-protect-wishly-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: "How to Password Protect Your Wishly Website: A Complete Step-by-Step Guide", description: "Learn how to add, change or remove password protection on a Wishly website, how visitors unlock it, how long access lasts, and how to share the password safely.", url: "/guides/password-protect-wishly-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-website-password-protection.webp", width: 1200, height: 630, alt: "A laptop showing a password lock screen for a personal surprise website" }] },
  twitter: { card: "summary_large_image", title: "Password Protect a Wishly Website | Complete Guide", description: "Learn how to add, change or remove password protection on a Wishly website, how visitors unlock it, how long access lasts, and how to share the password safely.", images: ["https://guide.wishly.bd/assets/editorial/wishly-website-password-protection.webp"] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
