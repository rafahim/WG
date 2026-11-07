import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides.json";

export const metadata: Metadata = {
  title: "Relationship & Love Guides | Wishly Guide",
  description: "Explore relationship advice, emotional support, wedding vows, friendship ideas and meaningful ways to stay connected.",
  keywords: ["relationship advice", "first date questions", "show love without spending money", "emotional intimacy", "AI love letter generator", "how to write wedding vows", "sympathy message examples", "friendship day ideas", "first anniversary wishes", "good luck messages for a friend", "questions to ask your best friend", "Wishly"],
  alternates: {
    canonical: "/guides/",
    languages: {
  "en": "/guides/",
  "bn": "/bn/guides/",
  "x-default": "/guides/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Relationship, Love & Website Guides | Wishly",
    description: "Explore helpful guides about proposals, relationship communication, emotional support, love letters, birthdays, anniversaries and personal Wishly websites.",
    url: "/guides/",
    siteName: "Wishly Guide",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship, Love & Website Guides | Wishly",
    description: "Explore helpful guides about proposals, relationship communication, emotional support, love letters, birthdays, anniversaries and personal Wishly websites.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
