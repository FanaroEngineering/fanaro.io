import ArticlesTable from "../components/articles_table";
import ArticleFooter from "../components/article_footer";
import Bitcoin from "../components/bitcoin";
import FanaroNav from "../components/fanaro_nav";
import Footnote from "../components/footnote";
import LocalLink from "../components/local_link";
import Toc, { CustomH2, CustomH3 } from "../components/toc";

export default class Setup {
  constructor() {
    this.define();
    this.prependAppend();
  }

  private get article(): HTMLElement | null {
    return document.querySelector("article");
  }

  private define = (): void => {
    customElements.define(LocalLink.tag, LocalLink);
    customElements.define(Footnote.tag, Footnote);
    customElements.define(ArticleFooter.tag, ArticleFooter);
    customElements.define(FanaroNav.tag, FanaroNav);
    customElements.define(ArticlesTable.tag, ArticlesTable);
    customElements.define(Toc.tag, Toc);
    customElements.define(CustomH2.tag, CustomH2);
    customElements.define(CustomH3.tag, CustomH3);
    customElements.define(Bitcoin.tag, Bitcoin);
  };

  private prependAppend = (): void =>
    window.addEventListener("DOMContentLoaded", (_: Event) => {
      this.prependNav();
      this.appendFooter();
      this.prependToc();
    });

  private prependNav = (): void =>
    document.body.prepend(document.createElement("fanaro-nav"));

  private appendFooter = (): void => {
    if (this.articleContainsFootnotes)
      this.article!.append(document.createElement("article-footer"));
  };

  private get articleContainsFootnotes(): boolean {
    return (
      this.article != null &&
      this.article.querySelectorAll("foot-note").length > 0
    );
  }

  private prependToc = (): void => {
    const h1: HTMLHeadingElement = this.article?.querySelector("h1")!;

    if (document.querySelectorAll("h2").length > 0) {
      h1.parentNode?.insertBefore(
        document.createElement("table-of-contents"),
        h1.previousSibling
      );
    }
  };
}
