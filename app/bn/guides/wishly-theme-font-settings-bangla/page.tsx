import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/bn__guides__wishly-theme-font-settings-bangla.json";

const pageTitle = "Wishly Website-এর Theme ও Font Change করবেন কীভাবে: Design Set…";
const pageDescription = "Wishly editor-এ current template-এর colour, theme ও font পরিবর্তন, mobile settings খুঁজে পাওয়া এবং Preview-তে design যাচাই করার বাংলা নির্দেশনা।";
const imageUrl = "https://guide.wishly.bd/assets/editorial/wishly-builder-design-settings.webp";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription,
  keywords: ["Wishly theme change", "Wishly font change", "Wishly design settings", "Wishly website colour", "Wishly editor Bangla tutorial"],
  alternates: { canonical: "/bn/guides/wishly-theme-font-settings-bangla/", languages: { en: "https://guide.wishly.bd/guides/theme-font-settings/", bn: "https://guide.wishly.bd/bn/guides/wishly-theme-font-settings-bangla/", "x-default": "https://guide.wishly.bd/guides/theme-font-settings/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-17", modifiedTime: "2026-11-17", authors: ["https://guide.wishly.bd/about/"], title: pageTitle, description: pageDescription, url: "/bn/guides/wishly-theme-font-settings-bangla/", siteName: "Wishly Guide", locale: "bn_BD", images: [{ url: imageUrl, width: 1200, height: 630, alt: "Wishly website builder-এর design settings panel ও colour নির্বাচন" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
