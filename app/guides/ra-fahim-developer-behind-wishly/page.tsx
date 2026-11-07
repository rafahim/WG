import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__ra-fahim-developer-behind-wishly.json";

export const metadata: Metadata = {
  title: "RA Fahim: Developer Behind Wishly",
  description: "Meet RA Fahim, the web developer and creator behind Wishly, and learn about the idea of making personal websites easier to create and share.",
  alternates: { canonical: "/guides/ra-fahim-developer-behind-wishly/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "article", publishedTime: "2026-11-07", modifiedTime: "2026-11-07", authors: ["https://guide.wishly.bd/authors/ra-fahim/"], title: "RA Fahim: Developer Behind Wishly", description: "Meet RA Fahim, the web developer and creator behind Wishly, and learn about the idea of making personal websites easier to create and share.", url: "/guides/ra-fahim-developer-behind-wishly/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp", width: 1200, height: 630, alt: "RA Fahim, web developer and creator of Wishly" }] },
  twitter: { card: "summary_large_image", title: "RA Fahim: Developer Behind Wishly", description: "Meet RA Fahim, the web developer and creator behind Wishly, and learn about the idea of making personal websites easier to create and share.", images: ["https://guide.wishly.bd/assets/editorial/wishly-personal-wish-website-maker.webp"] },
  authors: [{ name: "RA Fahim", url: "https://guide.wishly.bd/authors/ra-fahim/" }]
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
