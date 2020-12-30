import ArticlesTable from "../components/articles_table";
import ArticleFooter from "../components/article_footer";
import FanaroNav from "../components/fanaro_nav";
import Footnote from "../components/footnote";
import LocalLink from "../components/local_link";

export default class Setup {
  constructor() {
    this.define();
    this.prependAppend();
  }

  private article: HTMLElement | null = null;

  private define = (): void => {
    customElements.define(LocalLink.tag, LocalLink);
    customElements.define(Footnote.tag, Footnote);
    customElements.define(ArticleFooter.tag, ArticleFooter);
    customElements.define(FanaroNav.tag, FanaroNav);
    customElements.define(ArticlesTable.tag, ArticlesTable);
  };

  private prependAppend = (): void =>
    window.addEventListener("DOMContentLoaded", (_: Event) => {
      this.prependNav();
      this.appendFooter();
    });

  private prependNav = (): void =>
    document.body.prepend(document.createElement("fanaro-nav"));

  private appendFooter = (): void => {
    this.article = document.querySelector("article");
    if (this.articleContainsFootnotes)
      this.article!.append(document.createElement("article-footer"));
  };

  private get articleContainsFootnotes(): boolean {
    return (
      this.article != null &&
      this.article.querySelectorAll("foot-note").length > 0
    );
  }
}
