type HtmlPageProps = {
  html: string;
  jsonLd?: unknown;
  lang?: string;
};

/** Server-rendered page body migrated from the existing, reviewed static site. */
export default function HtmlPage({ html, jsonLd, lang = "en" }: HtmlPageProps) {
  const serializedJsonLd = jsonLd ? JSON.stringify(jsonLd) : undefined;
  const safeJsonLd = serializedJsonLd?.replace(/</g, "\\u003c") ?? null;
  return (
    <>
      <div
        className={`legacy-page premium-site${lang === "bn" ? " bn" : ""}`}
        lang={lang}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {safeJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      ) : null}
    </>
  );
}
