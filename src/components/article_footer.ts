export default class ArticleFooter extends HTMLElement {
  static readonly tag: string = "article-footer";

  private static readonly template: string = `
    <br />
    <br />
    <br />
    <hr />
    <footer></footer>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ArticleFooter.template;
    const footnotes: NodeListOf<HTMLElement> = document.querySelectorAll(
      "sub"
    )!;
    const footer: HTMLElement = this.querySelector("footer")!;
    const footnotesLength: number = footnotes.length;
    for (let i = 0; i < footnotesLength; i++) {
      footer.appendChild(footnotes[i]);
      footer.append(document.createElement("br"));
    }
  }
}
