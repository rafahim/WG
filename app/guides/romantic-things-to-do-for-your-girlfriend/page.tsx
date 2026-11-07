import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__romantic-things-to-do-for-your-girlfriend.json";

export const metadata: Metadata = {
  title: "Romantic Things to Do for Your Girlfriend",
  description: "Explore thoughtful romantic ideas for your girlfriend, from simple everyday gestures and meaningful dates to personalised letters and memory websites.",
  keywords: ["romantic things to do for your girlfriend", "cute romantic ideas for girlfriend", "simple romantic gestures", "unique things to do with your girlfriend"],
  alternates: { canonical: "/guides/romantic-things-to-do-for-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "Romantic Things to Do for Your Girlfriend", description: "Explore thoughtful romantic ideas for your girlfriend, from simple everyday gestures and meaningful dates to personalised letters and memory websites.", url: "/guides/romantic-things-to-do-for-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/our-love-map-template.webp", width: 960, height: 600, alt: "Wishly Our Love Map anniversary memory template preview" }] },
  twitter: { card: "summary_large_image", title: "Romantic Things to Do for Your Girlfriend", description: "Explore thoughtful romantic ideas for your girlfriend, from simple everyday gestures and meaningful dates to personalised letters and memory websites.", images: ["https://guide.wishly.bd/assets/editorial/our-love-map-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
