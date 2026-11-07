import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wishly-website-banano-bangla-tutorial.json";

const pageTitle = "Wishly দিয়ে Personal Website তৈরি | বাংলা ভিডিও টিউটোরিয়াল";
const pageDescription = "কোডিং ছাড়াই Wishly দিয়ে Personal Website বানানো শিখুন: template, লেখা-ছবি edit, theme, preview, publish ও share।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/wishly-personal-website-bangla-video-tutorial.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Wishly tutorial Bangla", "Wishly দিয়ে website তৈরি", "Wishly দিয়ে personal website বানানোর নিয়ম",
    "Wishly website tutorial", "বাংলা ভিডিও টিউটোরিয়াল", "personal website maker Bangla",
    "কোডিং ছাড়া ওয়েবসাইট তৈরি", "Wishly Bangla tutorial"
  ],
  alternates: { canonical: "/bn/guides/wishly-website-banano-bangla-tutorial/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/wishly-website-banano-bangla-tutorial/", siteName: "Wishly Guide", locale: "bn_BD",
    images: [{ url: imageUrl, width: 1672, height: 941, alt: "Wishly দিয়ে নিজের Personal Website তৈরি করার বাংলা ভিডিও টিউটোরিয়াল" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
