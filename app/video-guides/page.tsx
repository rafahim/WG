import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/video-guides.json";
export const metadata: Metadata = {
  title: "Wishly Video Guides | Step-by-Step Tutorials",
  description: "Watch step-by-step Wishly tutorials for creating a personal website. Begin with the featured Bangla walkthrough and follow the written guides.",
  alternates: { canonical: "/video-guides/", languages: { en: "/video-guides/", bn: "/bn/video-guides/", "x-default": "/video-guides/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1 } },
  openGraph: { type: "website", title: "Wishly Video Guides | Step-by-Step Tutorials", description: "Watch a step-by-step Bangla walkthrough for creating a personal website with Wishly.", url: "/video-guides/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-website-bangla-video-tutorial.webp", width: 1672, height: 941, alt: "Wishly personal website creation tutorial" }] },
  twitter: { card: "summary_large_image", title: "Wishly Video Guides", description: "Watch a step-by-step Bangla walkthrough for creating a personal website with Wishly.", images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-website-bangla-video-tutorial.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
