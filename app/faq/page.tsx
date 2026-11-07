import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/faq.json";

export const metadata: Metadata = {
  title: "Wishly Guide FAQ: Editing, Publishing & Sharing",
  description: "Find answers about Wishly, the personal website maker: templates, no-code editing, photos, design settings, publishing, sharing and privacy.",
  alternates: {
    canonical: "/faq/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Wishly Guide FAQ: Editing, Publishing & Sharing",
    description: "Find answers about Wishly, the personal website maker: templates, no-code editing, photos, design settings, publishing, sharing and privacy.",
    url: "/faq/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide FAQ: Editing, Publishing & Sharing",
    description: "Find answers about Wishly, the personal website maker: templates, no-code editing, photos, design settings, publishing, sharing and privacy.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
