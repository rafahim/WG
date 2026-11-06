import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/editorial-policy.json";

export const metadata: Metadata = {
  title: "Editorial Policy — Wishly Guide",
  description: "How Wishly Guide plans, researches, writes, reviews and updates its product explainers and practical tutorials.",
  alternates: {
    canonical: "/editorial-policy/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Editorial Policy — Wishly Guide",
    description: "How Wishly Guide plans, researches, writes, reviews and updates its product explainers and practical tutorials.",
    url: "/editorial-policy/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy — Wishly Guide",
    description: "How Wishly Guide plans, researches, writes, reviews and updates its product explainers and practical tutorials.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
