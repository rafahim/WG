import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-wish-website.json";

export const metadata: Metadata = {
  title: "Birthday Wish Website Ideas | Wishly Guide",
  description: "Discover birthday website ideas for a personal online surprise, including a memorable opening, meaningful message, photos, music and a shareable link.",
  alternates: {
    canonical: "/guides/birthday-wish-website/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Birthday Wish Website Ideas | Wishly Guide",
    description: "Discover birthday website ideas for a personal online surprise, including a memorable opening, meaningful message, photos, music and a shareable link.",
    url: "/guides/birthday-wish-website/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Wish Website Ideas | Wishly Guide",
    description: "Discover birthday website ideas for a personal online surprise, including a memorable opening, meaningful message, photos, music and a shareable link.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
