import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/contact.json";

export const metadata: Metadata = {
  title: "Contact Wishly Guide",
  description: "Contact the Wishly team about guide corrections, product questions, editorial feedback or website-related enquiries.",
  alternates: {
    canonical: "/contact/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Contact Wishly Guide",
    description: "Contact the Wishly team about guide corrections, product questions, editorial feedback or website-related enquiries.",
    url: "/contact/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Wishly Guide",
    description: "Contact the Wishly team about guide corrections, product questions, editorial feedback or website-related enquiries.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
