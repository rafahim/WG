import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__theme-font-settings.json";

export const metadata: Metadata = {
  title: "Customize Wishly Template Colors & Fonts",
  description: "Learn how to customize a Wishly template with a color preset, custom HEX color, font selection and a careful mobile preview.",
  alternates: {
    canonical: "/guides/theme-font-settings/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "Customize Wishly Template Colors & Fonts",
    description: "Learn how to customize a Wishly template with a color preset, custom HEX color, font selection and a careful mobile preview.",
    url: "/guides/theme-font-settings/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Customize Wishly Template Colors & Fonts",
    description: "Learn how to customize a Wishly template with a color preset, custom HEX color, font selection and a careful mobile preview.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
