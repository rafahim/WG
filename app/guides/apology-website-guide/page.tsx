import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__apology-website-guide.json";

export const metadata: Metadata = {
  title: "How to Make an Apology Website | Wishly",
  description: "Learn how to plan a sincere apology website with accountability, clear words and respectful boundaries. Includes a simple page structure and sharing checklist.",
  alternates: { canonical: "/guides/apology-website-guide/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", title: "How to Make an Apology Website | Wishly", description: "Learn how to plan a sincere apology website with accountability, clear words and respectful boundaries. Includes a simple page structure and sharing checklist.", url: "/guides/apology-website-guide/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — practical inspiration for meaningful moments" }] },
  twitter: { card: "summary_large_image", title: "How to Make an Apology Website | Wishly", description: "Learn how to plan a sincere apology website with accountability, clear words and respectful boundaries. Includes a simple page structure and sharing checklist.", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
