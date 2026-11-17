import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__valentines-day-surprise-website.json";

export const metadata: Metadata = {
  title: "Valentine’s Day Surprise Website: A Personal Digital Gift Guide",
  description: "Create a thoughtful Valentine’s Day website with your story, favourite photos, a love letter and a shareable page that feels personal.",
  keywords: ["valentines day surprise website", "valentine website for girlfriend", "valentine website for boyfriend", "digital valentine gift", "romantic valentine website idea"],
  alternates: { canonical: "/guides/valentines-day-surprise-website/", languages: { en: "https://guide.wishly.bd/guides/valentines-day-surprise-website/", bn: "https://guide.wishly.bd/bn/guides/valentines-day-website-bangla/", "x-default": "https://guide.wishly.bd/guides/valentines-day-surprise-website/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Valentine’s Day Surprise Website: A Personal Digital Gift Guide", description: "Create a thoughtful Valentine’s Day website with your story, favourite photos, a love letter and a shareable page that feels personal.", url: "/guides/valentines-day-surprise-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp", width: 1200, height: 630, alt: "Romantic Valentine website concept with a personal letter and shared memories" }] },
  twitter: { card: "summary_large_image", title: "Valentine’s Day Surprise Website: A Personal Digital Gift Guide", description: "Create a thoughtful Valentine’s Day website with your story, favourite photos, a love letter and a shareable page that feels personal.", images: ["https://guide.wishly.bd/assets/editorial/valentine-proposal-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
