import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__proposal-website.json";

export const metadata: Metadata = {
  title: "How to Make a Proposal Website Online: Ideas & Steps | Wishly Guide",
  description: "Plan a romantic proposal website with a thoughtful story, meaningful photos, a clear final question and a respectful way to share it.",
  alternates: {
    canonical: "/guides/proposal-website/",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "article",
    title: "How to Make a Proposal Website Online: Ideas & Steps | Wishly Guide",
    description: "Plan a romantic proposal website with a thoughtful story, meaningful photos, a clear final question and a respectful way to share it.",
    url: "/guides/proposal-website/",
    siteName: "Wishly Guide",
    locale: "en_US",
    images: [{ url: "https://guide.wishly.bd/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration for every special moment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Proposal Website Online: Ideas & Steps | Wishly Guide",
    description: "Plan a romantic proposal website with a thoughtful story, meaningful photos, a clear final question and a respectful way to share it.",
    images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"]
  }
};

export default function Page() {
  return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />;
}
