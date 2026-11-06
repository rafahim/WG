import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__share-surprise-website-privately.json";

export const metadata: Metadata = {
  title: "Share a Surprise Website Privately | Wishly",
  description: "Learn how to share a personal surprise website responsibly, protect sensitive information, check links and respect the privacy of people in your photos.",
  alternates: { canonical: "/guides/share-surprise-website-privately/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", title: "Share a Surprise Website Privately | Wishly", description: "Learn how to share a personal surprise website responsibly, protect sensitive information, check links and respect the privacy of people in your photos.", url: "/guides/share-surprise-website-privately/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/private-surprise-website-sharing.webp", width: 1200, height: 630, alt: "A guide to checking a personal surprise website link before sharing it" }] },
  twitter: { card: "summary_large_image", title: "Share a Surprise Website Privately | Wishly", description: "Learn how to share a personal surprise website responsibly, protect sensitive information, check links and respect the privacy of people in your photos.", images: ["https://guide.wishly.bd/assets/editorial/private-surprise-website-sharing.webp"] },
  authors: [{ name: "Wishly Guide", url: "https://guide.wishly.bd/about/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
