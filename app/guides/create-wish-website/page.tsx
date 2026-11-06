import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__create-wish-website.json";

export const metadata: Metadata = {
  title: "Create a Personal Wish Website | Wishly",
  description: "Learn how to make a personal wish website with Wishly: choose a template, personalize text and media, customize its design, preview and share it.",
  alternates: {
    canonical: "/guides/create-wish-website/",
    languages: {
  "en": "/guides/create-wish-website/",
  "bn": "/bn/guides/wish-website-toiri/",
  "x-default": "/guides/create-wish-website/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Create a Personal Wish Website | Wishly",
    description: "Learn how to make a personal wish website with Wishly: choose a template, personalize text and media, customize its design, preview and share it.",
    url: "/guides/create-wish-website/",
    siteName: "Wishly Guide",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a Personal Wish Website | Wishly",
    description: "Learn how to make a personal wish website with Wishly: choose a template, personalize text and media, customize its design, preview and share it.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
