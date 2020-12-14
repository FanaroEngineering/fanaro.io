import ArticleFooterElement from "./article_footer";
import FanaroNavElement from "./fanaro_nav";
import FootnoteElement from "./footnote";
import LocalLinkElement from "./local_link";

export default class Setup {
  constructor() {
    this.define();
    this.prependAppend();
  }

  private define = (): void => {
    customElements.define(LocalLinkElement.tag, LocalLinkElement);
    customElements.define(FootnoteElement.tag, FootnoteElement);
    customElements.define(ArticleFooterElement.tag, ArticleFooterElement);
    customElements.define(FanaroNavElement.tag, FanaroNavElement);
  };

  private prependAppend = (): void => {
    window.addEventListener("DOMContentLoaded", (_: Event) => {
      this.prependNav();
      this.appendFooter();
    });
  };

  private prependNav = (): void =>
    document.body.prepend(document.createElement("fanaro-nav"));

  private appendFooter = (): void => {
    const article: HTMLElement | null = document.querySelector("article");
    if (document.querySelector("article") != null)
      article!.append(document.createElement("article-footer"));
  };
}
