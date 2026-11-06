import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/features.json";

export const metadata: Metadata = {
  title: "Wishly Features: Templates, Editing & Publishing | Wishly Guide",
  description: "Explore Wishly templates, visual editing, photos, video, design settings, preview, publishing and sharing. Options vary by template.",
  alternates: {
    canonical: "/features/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Wishly Features: Templates, Editing & Publishing | Wishly Guide",
    description: "Explore Wishly templates, visual editing, photos, video, design settings, preview, publishing and sharing. Options vary by template.",
    url: "/features/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Features: Templates, Editing & Publishing | Wishly Guide",
    description: "Explore Wishly templates, visual editing, photos, video, design settings, preview, publishing and sharing. Options vary by template.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
