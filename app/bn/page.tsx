import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn.json";

export const metadata: Metadata = {
  title: "Wishly Guide বাংলা — Website তৈরির গাইড",
  keywords: ["Wishly tutorial Bangla", "Wishly দিয়ে website তৈরি", "Wishly দিয়ে personal website বানানোর নিয়ম", "বাংলা ওয়েবসাইট টিউটোরিয়াল", "কোডিং ছাড়া ওয়েবসাইট তৈরি"],
  description: "Wishly দিয়ে birthday, proposal, anniversary ও personal wish website তৈরি শিখুন। বাংলা ভিডিও, template edit, preview, publish ও share guide দেখুন।",
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
    title: "Wishly Guide বাংলা — Website তৈরির গাইড",
    description: "Wishly দিয়ে birthday, proposal, anniversary ও personal wish website তৈরি শিখুন। বাংলা ভিডিও, template edit, preview, publish ও share guide দেখুন।",
    url: "/bn/",
    siteName: "Wishly Guide",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide বাংলা — Website তৈরির গাইড",
    description: "Wishly দিয়ে birthday, proposal, anniversary ও personal wish website তৈরি শিখুন। বাংলা ভিডিও, template edit, preview, publish ও share guide দেখুন।",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
