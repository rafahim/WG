import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn.json";

export const metadata: Metadata = {
  title: "Wishly Guide বাংলা — Wishly Website তৈরির গাইড ও টিউটোরিয়াল",
  description: "Wishly দিয়ে জন্মদিনের ওয়েবসাইট, প্রপোজ ওয়েবসাইট, Anniversary surprise ও personal wish website তৈরি করার বাংলা গাইড, টিউটোরিয়াল এবং সহজ নির্দেশনা।",
  alternates: {
    canonical: "/bn/",
    languages: {
  "en": "/",
  "bn": "/bn/",
  "x-default": "/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Wishly Guide বাংলা — Wishly Website তৈরির গাইড ও টিউটোরিয়াল",
    description: "Wishly দিয়ে জন্মদিনের ওয়েবসাইট, প্রপোজ ওয়েবসাইট, Anniversary surprise ও personal wish website তৈরি করার বাংলা গাইড, টিউটোরিয়াল এবং সহজ নির্দেশনা।",
    url: "/bn/",
    siteName: "Wishly Guide",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide বাংলা — Wishly Website তৈরির গাইড ও টিউটোরিয়াল",
    description: "Wishly দিয়ে জন্মদিনের ওয়েবসাইট, প্রপোজ ওয়েবসাইট, Anniversary surprise ও personal wish website তৈরি করার বাংলা গাইড, টিউটোরিয়াল এবং সহজ নির্দেশনা।",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
