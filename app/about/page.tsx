import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/about.json";

export const metadata: Metadata = {
  title: "About Wishly Guide — The Story Behind Wishly",
  description: "Discover what Wishly is, how its no-code personal website maker works and how Wishly Guide helps you create pages for meaningful moments.",
  alternates: {
    canonical: "/about/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "About Wishly Guide — The Story Behind Wishly",
    description: "Discover what Wishly is, how its no-code personal website maker works and how Wishly Guide helps you create pages for meaningful moments.",
    url: "/about/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Wishly Guide — The Story Behind Wishly",
    description: "Discover what Wishly is, how its no-code personal website maker works and how Wishly Guide helps you create pages for meaningful moments.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
