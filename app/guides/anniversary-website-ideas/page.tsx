import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__anniversary-website-ideas.json";

export const metadata: Metadata = {
  title: "Anniversary Website Ideas | Wishly Guide",
  description: "Plan an anniversary website with a shared timeline, favorite photos, a personal letter and design details that reflect your story.",
  alternates: {
    canonical: "/guides/anniversary-website-ideas/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Anniversary Website Ideas | Wishly Guide",
    description: "Plan an anniversary website with a shared timeline, favorite photos, a personal letter and design details that reflect your story.",
    url: "/guides/anniversary-website-ideas/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Anniversary Website Ideas | Wishly Guide",
    description: "Plan an anniversary website with a shared timeline, favorite photos, a personal letter and design details that reflect your story.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
