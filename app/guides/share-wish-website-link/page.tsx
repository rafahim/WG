import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__share-wish-website-link.json";

export const metadata: Metadata = {
  title: "How to Share a Website Link | Wishly Guide",
  description: "Learn how Wishly link previews work and how to add a custom preview title, description and photo before sharing your published website.",
  alternates: {
    canonical: "/guides/share-wish-website-link/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "How to Share a Website Link | Wishly Guide",
    description: "Learn how Wishly link previews work and how to add a custom preview title, description and photo before sharing your published website.",
    url: "/guides/share-wish-website-link/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Share a Website Link | Wishly Guide",
    description: "Learn how Wishly link previews work and how to add a custom preview title, description and photo before sharing your published website.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
