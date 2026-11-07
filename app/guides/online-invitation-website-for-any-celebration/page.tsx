import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__online-invitation-website-for-any-celebration.json";

const pageTitle = "How to Create an Online Invitation Website";
const pageDescription = "Plan an online invitation website with clear event details, schedule, location, guest information, response instructions and a mobile-friendly shareable page.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["online invitation website", "digital invitation website", "create online invitation page", "party invitation website", "event invitation website"],
  alternates: { canonical: "/guides/online-invitation-website-for-any-celebration/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: pageTitle, description: pageDescription, url: "/guides/online-invitation-website-for-any-celebration/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp", width: 1200, height: 630, alt: "A clean online invitation website layout with event details and elegant design" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["https://guide.wishly.bd/assets/editorial/online-wedding-invitation-checklist.webp"] }
};
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
