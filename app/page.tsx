import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/home.json";

export const metadata: Metadata = {
  title: "Wishly Guide: Relationship, Love & Emotional Support",
  description: "Explore practical guides about relationships, love, emotional support, communication, friendship, family, meaningful messages and special occasions.",
  keywords: ["relationship advice", "how to make your girlfriend happy", "how to apologize", "how to propose", "healthy relationships", "emotional support", "love letter ideas", "long distance relationship ideas", "Wishly"],
  alternates: {
    canonical: "/",
    languages: {
  "en": "/",
  "bn": "/bn/",
  "x-default": "/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Wishly Guide: Relationship, Love & Emotional Support",
    description: "Thoughtful, practical information about love, communication, emotional wellbeing, friendship, family and meaningful moments.",
    url: "/",
    siteName: "Wishly Guide",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide: Relationship, Love & Emotional Support",
    description: "Thoughtful, practical information about love, communication, emotional wellbeing, friendship, family and meaningful moments.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
