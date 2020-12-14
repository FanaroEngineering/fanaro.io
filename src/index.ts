import ArticleFooterElement from "./components/article_footer";
import FanaroNavElement from "./components/fanaro_nav";
import FootnoteElement from "./components/footnote";
import LocalLinkElement from "./components/local_link";

customElements.define(LocalLinkElement.tag, LocalLinkElement);
customElements.define(FootnoteElement.tag, FootnoteElement);
customElements.define(ArticleFooterElement.tag, ArticleFooterElement);
customElements.define(FanaroNavElement.tag, FanaroNavElement);

window.addEventListener("DOMContentLoaded", (_: Event) => {
  document.body.prepend(document.createElement("fanaro-nav"));

  const article: HTMLElement | null = document.querySelector("article");
  if (document.querySelector("article") != null)
    article!.append(document.createElement("article-footer"));
});
