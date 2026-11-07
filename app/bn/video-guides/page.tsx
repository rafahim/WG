import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn-video-guides.json";
export const metadata: Metadata = {
  title: "Wishly বাংলা ভিডিও গাইড | Personal Website তৈরি শিখুন",
  description: "বাংলায় Wishly দিয়ে Personal Website তৈরির ভিডিও টিউটোরিয়াল দেখুন। Template, message, photo, preview, publish ও share করার ধাপ শিখুন।",
  alternates: { canonical: "/bn/video-guides/", languages: { en: "/video-guides/", bn: "/bn/video-guides/", "x-default": "/video-guides/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1 } },
  openGraph: { type: "website", title: "Wishly বাংলা ভিডিও গাইড", description: "বাংলায় Wishly দিয়ে Personal Website তৈরির ধাপে ধাপে ভিডিও টিউটোরিয়াল।", url: "/bn/video-guides/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-website-bangla-video-tutorial.webp", width: 1672, height: 941, alt: "Wishly personal website tutorial in Bangla" }] },
  twitter: { card: "summary_large_image", title: "Wishly বাংলা ভিডিও গাইড", description: "Wishly দিয়ে Personal Website তৈরির বাংলা ভিডিও।", images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-website-bangla-video-tutorial.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
