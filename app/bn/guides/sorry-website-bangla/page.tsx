import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__sorry-website-bangla.json";

const pageTitle = "Sorry বলার জন্য Apology Website বানাবেন কীভাবে: আন্তরিক ক্ষমা…";
const pageDescription = "Wishly দিয়ে apology website তৈরি করার সময় কী লিখবেন, কীভাবে দায়িত্ব স্বীকার করবেন, photo ও design বাছবেন এবং ক্ষমা চাওয়ার পর অপরজনকে সময় দেবেন—জানুন।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/sorry-website-guide.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["sorry website", "apology website", "ক্ষমা চাওয়ার website", "online apology message", "Wishly sorry template"],
  alternates: { canonical: "/bn/guides/sorry-website-bangla/", languages: { en: "https://guide.wishly.bd/guides/apology-website-guide/", bn: "https://guide.wishly.bd/bn/guides/sorry-website-bangla/", "x-default": "https://guide.wishly.bd/guides/apology-website-guide/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/sorry-website-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "ক্ষমা চাওয়ার জন্য personal apology website ও heartfelt message" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
