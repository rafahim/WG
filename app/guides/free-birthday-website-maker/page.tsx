import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__free-birthday-website-maker.json";

export const metadata: Metadata = {
  title: "How to Make a Free Birthday Website: A Practical No-Code Guide",
  description: "Learn how to create a personal birthday website for free with a ready-made template, photos, a heartfelt message and one shareable link.",
  keywords: ["free birthday website maker", "make a birthday website for free", "free birthday website", "birthday website without coding", "online birthday surprise website"],
  alternates: { canonical: "/guides/free-birthday-website-maker/", languages: { en: "https://guide.wishly.bd/guides/free-birthday-website-maker/", bn: "https://guide.wishly.bd/bn/guides/free-birthday-website-bangla/", "x-default": "https://guide.wishly.bd/guides/free-birthday-website-maker/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "How to Make a Free Birthday Website: A Practical No-Code Guide", description: "Learn how to create a personal birthday website for free with a ready-made template, photos, a heartfelt message and one shareable link.", url: "/guides/free-birthday-website-maker/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp", width: 1200, height: 630, alt: "A personal birthday wish website made with a ready-made design and custom photos" }] },
  twitter: { card: "summary_large_image", title: "How to Make a Free Birthday Website: A Practical No-Code Guide", description: "Learn how to create a personal birthday website for free with a ready-made template, photos, a heartfelt message and one shareable link.", images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
