import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides.json";

export const metadata: Metadata = {
  title: "Wishly Tutorial Bangla: Website তৈরির গাইড ও ভিডিও",
  keywords: ["Wishly tutorial Bangla", "Wishly দিয়ে website তৈরি", "Wishly দিয়ে personal website বানানোর নিয়ম", "Wishly বাংলা ভিডিও টিউটোরিয়াল", "বাংলা ওয়েবসাইট টিউটোরিয়াল", "কোডিং ছাড়া ওয়েবসাইট তৈরি"],
  description: "Wishly দিয়ে Personal Website তৈরির বাংলা ভিডিও টিউটোরিয়াল, template নির্বাচন, message ও photo edit, preview, publish এবং share করার ধাপে ধাপে গাইড।",
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
    title: "Wishly Tutorial Bangla: Website তৈরির গাইড ও ভিডিও",
    description: "Wishly দিয়ে Personal Website তৈরির বাংলা ভিডিও টিউটোরিয়াল, template নির্বাচন, message ও photo edit, preview, publish এবং share করার ধাপে ধাপে গাইড।",
    url: "/bn/guides/",
    siteName: "Wishly Guide",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Tutorial Bangla: Website তৈরির গাইড ও ভিডিও",
    description: "Wishly দিয়ে Personal Website তৈরির বাংলা ভিডিও টিউটোরিয়াল, template নির্বাচন, message ও photo edit, preview, publish এবং share করার ধাপে ধাপে গাইড।",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
