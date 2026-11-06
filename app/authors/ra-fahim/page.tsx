import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/developer.json";

export const metadata: Metadata = {
  title: "RA Fahim — Developer & Creator Behind Wishly",
  description: "Meet RA Fahim, the web developer and creator behind Wishly. Explore his work on modern websites, web applications and practical digital products.",
  alternates: { canonical: "/authors/ra-fahim/" },
  authors: [{ name: "RA Fahim", url: "https://rafahim.com/" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "profile", title: "RA Fahim — Developer & Creator Behind Wishly", description: "Meet RA Fahim, the developer and creator behind Wishly.", url: "/authors/ra-fahim/", siteName: "Wishly Guide", images: [{ url: "https://guide.wishly.bd/assets/editorial/ra-fahim-developer-wishly.webp", width: 540, height: 540, alt: "RA Fahim — Web Developer and Creator" }] },
  twitter: { card: "summary_large_image", title: "RA Fahim — Developer & Creator Behind Wishly", description: "Meet the developer and creator behind Wishly.", images: ["https://guide.wishly.bd/assets/editorial/ra-fahim-developer-wishly.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
