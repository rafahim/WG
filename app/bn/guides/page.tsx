import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides.json";

export const metadata: Metadata = {
  title: "বাংলা Wishly Guide — Website তৈরির Tutorial",
  description: "Wishly দিয়ে personal wish website তৈরির বাংলা গাইড, template editing, birthday website idea এবং সাধারণ প্রশ্নের উত্তর।",
  alternates: {
    canonical: "/bn/guides/",
    languages: {
  "en": "/guides/",
  "bn": "/bn/guides/",
  "x-default": "/guides/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "বাংলা Wishly Guide — Website তৈরির Tutorial",
    description: "Wishly দিয়ে personal wish website তৈরির বাংলা গাইড, template editing, birthday website idea এবং সাধারণ প্রশ্নের উত্তর।",
    url: "/bn/guides/",
    siteName: "Wishly Guide",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "বাংলা Wishly Guide — Website তৈরির Tutorial",
    description: "Wishly দিয়ে personal wish website তৈরির বাংলা গাইড, template editing, birthday website idea এবং সাধারণ প্রশ্নের উত্তর।",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
