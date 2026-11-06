import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/terms.json";

export const metadata: Metadata = {
  title: "Terms of Use — Wishly Guide",
  description: "Read the terms for using the Wishly Guide information website and its tutorials, links and materials.",
  alternates: {
    canonical: "/terms/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Terms of Use — Wishly Guide",
    description: "Read the terms for using the Wishly Guide information website and its tutorials, links and materials.",
    url: "/terms/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — Wishly Guide",
    description: "Read the terms for using the Wishly Guide information website and its tutorials, links and materials.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
