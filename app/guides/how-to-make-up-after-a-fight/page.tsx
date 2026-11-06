import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/guides__how-to-make-up-after-a-fight.json";

export const metadata: Metadata = {
  title: "How to Make Up After a Fight | Wishly Guide",
  description: "Learn how couples can reconnect after an argument through a respectful pause, listening, accountability, repair and clearer agreements for next time.",
  keywords: ["how to make up after a fight", "how to fix relationship after argument", "how to reconnect after a fight with partner", "relationship conflict repair"],
  alternates: { canonical: "/guides/how-to-make-up-after-a-fight/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "article", title: "How to Make Up After a Fight | Wishly Guide", description: "Learn how couples can reconnect after an argument through a respectful pause, listening, accountability, repair and clearer agreements for next time.", url: "/guides/how-to-make-up-after-a-fight/", siteName: "Wishly Guide", locale: "en_US", images: [{ url: "https://guide.wishly.bd/assets/editorial/lumen-sorry-template.webp", width: 960, height: 600, alt: "Wishly Lumen Sorry apology template preview" }] },
  twitter: { card: "summary_large_image", title: "How to Make Up After a Fight | Wishly Guide", description: "Learn how couples can reconnect after an argument through a respectful pause, listening, accountability, repair and clearer agreements for next time.", images: ["https://guide.wishly.bd/assets/editorial/lumen-sorry-template.webp"] }
};

export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
