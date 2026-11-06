import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/topics__emotional-support.json";
export const metadata: Metadata = { title: "Emotional Support | Wishly Guide", description: "Practical, respectful guidance for listening, offering comfort, supporting a partner through stress and respecting personal space.", alternates: { canonical: "/topics/emotional-support/" }, openGraph: { type: "website", title: "Emotional Support | Wishly Guide", description: "Practical, respectful guidance for listening, offering comfort, supporting a partner through stress and respecting personal space.", url: "/topics/emotional-support/", siteName: "Wishly Guide", images: ["https://guide.wishly.bd/assets/og-wishly-guide.png"] }, robots: { index: true, follow: true } };
export default function Page() { return <HtmlPage html={pageData.html} jsonLd={pageData.jsonLd} lang={pageData.lang} />; }
