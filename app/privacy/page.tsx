import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/privacy.json";

export const metadata: Metadata = {
  title: "Privacy Policy — Wishly Guide",
  description: "Read how Wishly Guide handles website visits, cookies, advertising technologies, and privacy choices.",
  alternates: {
    canonical: "/privacy/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Privacy Policy — Wishly Guide",
    description: "Read how Wishly Guide handles website visits, cookies, advertising technologies, and privacy choices.",
    url: "/privacy/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — thoughtful ideas and practical tutorials for personal wish websites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Wishly Guide",
    description: "Read how Wishly Guide handles website visits, cookies, advertising technologies, and privacy choices.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
