import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-a-birthday-website-for-someone.json";

const pageTitle = "How to Make a Birthday Website for Someone";
const pageDescription = "Learn how to make a personal birthday website with a thoughtful message, photos, a simple story and a shareable link. Includes a practical planning checklist.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["how to make a birthday website", "create a birthday website", "birthday website online", "personal birthday website", "birthday surprise website"],
  alternates: { canonical: "/guides/how-to-make-a-birthday-website-for-someone/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/how-to-make-a-birthday-website-for-someone/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/birthday-website-how-to.webp", width: 1200, height: 630, alt: "A birthday website preview with a celebratory message and personal design" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/birthday-website-how-to.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
