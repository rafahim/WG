import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__personal-website-vs-digital-greeting-card.json";

const pageTitle = "Personal Website vs Digital Greeting Card";
const pageDescription = "Compare personal websites and digital greeting cards by message length, photos, interaction, sharing and privacy.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["personal website vs digital greeting card", "digital greeting card vs website", "online greeting card or website", "personalized digital gift comparison", "website gift ideas"],
  alternates: { canonical: "/guides/personal-website-vs-digital-greeting-card/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/personal-website-vs-digital-greeting-card/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp", width: 1200, height: 630, alt: "A personal wish website example for comparing digital gifts and greeting cards" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
