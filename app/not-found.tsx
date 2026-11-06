import HtmlPage from "@/components/HtmlPage";
import pageData from "@/content/not-found.json";

export default function NotFound() {
  return <HtmlPage html={pageData.html} lang="en" />;
}
