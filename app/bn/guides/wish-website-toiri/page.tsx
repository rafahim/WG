import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wish-website-toiri.json";

export const metadata: Metadata = {
  title: "Wishly দিয়ে Personal Wish Website তৈরি",
  description: "Wishly দিয়ে personal wish website তৈরি শিখুন: template বেছে লেখা ও ছবি edit, theme/font বদল, preview, publish এবং link share করার বাংলা গাইড।",
  alternates: {
    canonical: "/bn/guides/wish-website-toiri/",
    languages: {
  "en": "/guides/create-wish-website/",
  "bn": "/bn/guides/wish-website-toiri/",
  "x-default": "/guides/create-wish-website/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: "Wishly দিয়ে Personal Wish Website তৈরি",
    description: "Wishly দিয়ে personal wish website তৈরি করার সম্পূর্ণ বাংলা নির্দেশনা: template বেছে নেওয়া, লেখা ও ছবি edit, theme/font পরিবর্তন, preview, publish এবং link share।",
    url: "/bn/guides/wish-website-toiri/",
    siteName: "Wishly Guide",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly দিয়ে Personal Wish Website তৈরি",
    description: "Wishly দিয়ে personal wish website তৈরি করার সম্পূর্ণ বাংলা নির্দেশনা: template বেছে নেওয়া, লেখা ও ছবি edit, theme/font পরিবর্তন, preview, publish এবং link share।",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
