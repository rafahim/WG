import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__birthday-website-message-ideas.json";

export const metadata: Metadata = {
  title: "Birthday Website Message Ideas & Examples | Wishly Guide",
  description: "Write a memorable birthday website message with a natural opening, a specific memory, thoughtful photo captions and a warm closing.",
  alternates: {
    canonical: "/guides/birthday-website-message-ideas/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Birthday Website Message Ideas & Examples | Wishly Guide",
    description: "Write a memorable birthday website message with a natural opening, a specific memory, thoughtful photo captions and a warm closing.",
    url: "/guides/birthday-website-message-ideas/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Website Message Ideas & Examples | Wishly Guide",
    description: "Write a memorable birthday website message with a natural opening, a specific memory, thoughtful photo captions and a warm closing.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
