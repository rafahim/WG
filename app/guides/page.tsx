import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides.json";

export const metadata: Metadata = {
  title: "Relationship & Love Guides | Wishly Guide",
  description: "Practical relationship advice, emotional support, love letters, proposal ideas, birthday surprises and tutorials for creating personal websites.",
  keywords: ["relationship advice", "romantic ideas", "love letter", "proposal ideas", "emotional support", "birthday surprise website", "anniversary website", "Wishly"],
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
