import ArticleFooter from "./article_footer";
import FanaroNav from "./fanaro_nav";
import Footnote from "./footnote";
import LocalLink from "./local_link";

export default class Setup {
  constructor() {
    this.define();
    this.prependAppend();
  }

  private define = (): void => {
    customElements.define(LocalLink.tag, LocalLink);
    customElements.define(Footnote.tag, Footnote);
    customElements.define(ArticleFooter.tag, ArticleFooter);
    customElements.define(FanaroNav.tag, FanaroNav);
  };

  private prependAppend = (): void =>
    window.addEventListener("DOMContentLoaded", (_: Event) => {
      this.prependNav();
      this.appendFooter();
    });

  private prependNav = (): void =>
    document.body.prepend(document.createElement("fanaro-nav"));

  private appendFooter = (): void => {
    const article: HTMLElement | null = document.querySelector("article");
    if (article != null)
      article!.append(document.createElement("article-footer"));
  };
}
