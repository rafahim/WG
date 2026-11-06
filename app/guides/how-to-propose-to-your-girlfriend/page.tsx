import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-propose-to-your-girlfriend.json";

export const metadata: Metadata = {
  title: "How to Propose to Your Girlfriend | Wishly",
  description: "Plan a thoughtful, personal proposal with ideas for timing, setting, what to say, and a respectful way to create a romantic proposal website.",
  keywords: ["how to propose to your girlfriend", "romantic proposal ideas", "what to say when proposing", "online proposal website", "creative proposal ideas"],
  alternates: { canonical: "/guides/how-to-propose-to-your-girlfriend/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "How to Propose to Your Girlfriend | Wishly", description: "Plan a thoughtful, personal proposal with ideas for timing, setting, what to say, and a respectful way to create a romantic proposal website.", url: "/guides/how-to-propose-to-your-girlfriend/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/proposal-arcade-template.webp", width: 960, height: 600, alt: "Wishly Arcade Propose romantic proposal template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Propose to Your Girlfriend | Wishly", description: "Plan a thoughtful, personal proposal with ideas for timing, setting, what to say, and a respectful way to create a romantic proposal website.", images: ["https://guide.wishly.bd/assets/editorial/proposal-arcade-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
