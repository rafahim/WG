import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://guide.wishly.bd"),
  title: { default: "Wishly Guide | Ideas for Every Meaningful Moment", template: "%s" },
  description: "Independent informational guides about relationships, emotional wellbeing, communication, friendship, family, meaningful messages and special occasions.",
  applicationName: "Wishly Guide",
  creator: "Wishly",
  publisher: "Wishly Guide",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", apple: "/assets/logo-mark-512.png" },
  manifest: "/site.webmanifest",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    siteName: "Wishly Guide",
    title: "Wishly Guide | Ideas for Every Meaningful Moment",
    description: "Practical, people-first guidance about relationships, emotional wellbeing, communication, friendship and meaningful occasions.",
    url: "/",
    locale: "en_US",
    images: [{ url: "/assets/og-wishly-guide.png", width: 1200, height: 630, alt: "Wishly Guide — ideas, tutorials and inspiration" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishly Guide | Ideas for Every Meaningful Moment",
    description: "Practical, people-first guidance about relationships, emotional wellbeing, communication, friendship and meaningful occasions.",
    images: ["/assets/og-wishly-guide.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07070b"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9101632317352495" />
        <link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fraunces-latin-400-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/site-bundle.css?v=20261107" />
        <link rel="alternate" type="application/rss+xml" title="Wishly Guide — English RSS" href="/feed.xml" />
        <link rel="alternate" type="application/rss+xml" title="Wishly Guide — বাংলা RSS" href="/bn/feed.xml" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <Script id="gtm-datalayer" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());" }} />
        <Script id="gtm" async src="https://www.googletagmanager.com/gtm.js?id=GTM-M57HHB74" strategy="beforeInteractive" />
        <Script id="google-adsense" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9101632317352495" crossOrigin="anonymous" strategy="beforeInteractive" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://guide.wishly.bd/#organization",
              "name": "Wishly Guide",
              "url": "https://guide.wishly.bd/",
              "description": "An informational publication offering practical guides about relationships, emotional wellbeing, communication, friendship, family and meaningful occasions.",
              "logo": { "@type": "ImageObject", "url": "https://guide.wishly.bd/assets/logo-mark-512.png", "width": 180, "height": 180 }
            },
            {
              "@type": "WebSite",
              "@id": "https://guide.wishly.bd/#website",
              "url": "https://guide.wishly.bd/",
              "name": "Wishly Guide",
              "description": "Practical ideas, tutorials and thoughtful guidance for meaningful moments.",
              "publisher": { "@id": "https://guide.wishly.bd/#organization" },
              "inLanguage": ["en", "bn"]
            }
          ]
        }).replace(/</g, "\\u003c") }} />
        {children}
        <Script src="/assets/ads-config.js" strategy="beforeInteractive" />
        <Script src="/assets/ads.js" strategy="afterInteractive" />
        <Script src="/assets/main.js?v=20261107" strategy="afterInteractive" />
      </body>
    </html>
  );
}
