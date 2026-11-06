import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-create-a-romantic-surprise-website.json";

export const metadata: Metadata = {
  title: "Create a Romantic Surprise Website",
  description: "Create a romantic surprise website with a personal story, photos, music, meaningful sections and one shareable link using a no-code template.",
  keywords: ["how to create a romantic surprise website", "romantic website for girlfriend", "personal surprise website maker", "online love website without coding"],
  alternates: { canonical: "/guides/how-to-create-a-romantic-surprise-website/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "Create a Romantic Surprise Website", description: "Create a romantic surprise website with a personal story, photos, music, meaningful sections and one shareable link using a no-code template.", url: "/guides/how-to-create-a-romantic-surprise-website/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/romantic-online-proposal.webp", width: 1200, height: 630, alt: "Wishly romantic online proposal website inspiration" }] },
  twitter: { card: "summary_large_image", title: "Create a Romantic Surprise Website", description: "Create a romantic surprise website with a personal story, photos, music, meaningful sections and one shareable link using a no-code template.", images: ["https://guide.wishly.bd/assets/editorial/romantic-online-proposal.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
