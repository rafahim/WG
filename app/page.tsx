import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/home.json";

export const metadata: Metadata = {
  title: "Wishly Guide | Personal Website Ideas & How-to Guides",
  description: "Find birthday website ideas, proposal and anniversary inspiration, wedding invitation tips and personal message guides. Create and share a page with Wishly.",
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
    title: "Wishly Guide | Personal Website Ideas & How-to Guides",
    description: "Find birthday website ideas, proposal and anniversary inspiration, wedding invitation tips and personal message guides. Create and share a page with Wishly.",
    url: "/",
    siteName: "Wishly Guide",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide | Personal Website Ideas & How-to Guides",
    description: "Find birthday website ideas, proposal and anniversary inspiration, wedding invitation tips and personal message guides. Create and share a page with Wishly.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
