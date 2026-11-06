import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides.json";

export const metadata: Metadata = {
  title: "Personal Website Guides & Ideas | Wishly Guide",
  description: "Explore step-by-step guides for birthday websites, proposals, anniversaries, wedding invitations, friendship pages and no-code personal websites.",
  alternates: {
    canonical: "/guides/",
    languages: {
  "en": "/guides/",
  "bn": "/bn/guides/",
  "x-default": "/guides/"
},
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    title: "Personal Website Guides & Ideas | Wishly Guide",
    description: "Explore step-by-step guides for birthday websites, proposals, anniversaries, wedding invitations, friendship pages and no-code personal websites.",
    url: "/guides/",
    siteName: "Wishly Guide",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Website Guides & Ideas | Wishly Guide",
    description: "Explore step-by-step guides for birthday websites, proposals, anniversaries, wedding invitations, friendship pages and no-code personal websites.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
