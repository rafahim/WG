import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-your-girlfriend-feel-special.json";

export const metadata: Metadata = {
  title: "Make Your Girlfriend Feel Special | Wishly",
  description: "Discover meaningful ways to make your girlfriend feel loved and appreciated through listening, small gestures, quality time and personal surprises.",
  keywords: ["how to make your girlfriend feel special", "how to make girlfriend happy", "ways to show your girlfriend you love her", "thoughtful things to do for girlfriend"],
  alternates: { canonical: "/guides/how-to-make-your-girlfriend-feel-special/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Make Your Girlfriend Feel Special | Wishly", description: "Discover meaningful ways to make your girlfriend feel loved and appreciated through listening, small gestures, quality time and personal surprises.", url: "/guides/how-to-make-your-girlfriend-feel-special/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/midnight-love-template.webp", width: 960, height: 600, alt: "Wishly Midnight Love personal letter template preview" }] },
  twitter: { card: "summary_large_image", title: "Make Your Girlfriend Feel Special | Wishly", description: "Discover meaningful ways to make your girlfriend feel loved and appreciated through listening, small gestures, quality time and personal surprises.", images: ["https://guide.wishly.bd/assets/editorial/midnight-love-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
