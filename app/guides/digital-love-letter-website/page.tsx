import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__digital-love-letter-website.json";

export const metadata: Metadata = {
  title: "Digital Love Letter Website Guide | Wishly Guide",
  description: "Learn how to turn a heartfelt letter into a personal online experience with a clear opening, meaningful details, photographs and a thoughtful ending.",
  alternates: {
    canonical: "/guides/digital-love-letter-website/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Digital Love Letter Website Guide | Wishly Guide",
    description: "Learn how to turn a heartfelt letter into a personal online experience with a clear opening, meaningful details, photographs and a thoughtful ending.",
    url: "/guides/digital-love-letter-website/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Love Letter Website Guide | Wishly Guide",
    description: "Learn how to turn a heartfelt letter into a personal online experience with a clear opening, meaningful details, photographs and a thoughtful ending.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
