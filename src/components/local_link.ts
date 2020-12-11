export default class LocalLinkElement extends HTMLElement {
  static readonly tag: string = "local-link";

  private link: string | null = null;
  private text: string | null = null;
  article: HTMLElement | null = null;

  private template: HTMLTemplateElement;

  constructor() {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = `
      <style>
        a {
          color: #E67D40;
          text-decoration: none;
        }
      </style>
      <a href=""></a>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.link = this.getAttribute("link")!;
    this.text = this.getAttribute("text")!;

    const innerAnchor: HTMLAnchorElement = this.shadowRoot!.querySelector("a")!;
    innerAnchor.href = this.link;
    innerAnchor.innerText = this.text;
  }

  fetchArticle = (): void => {
    if (this.link != null)
      fetch(this.link)
        .then((response: Response) => response.text())
        .then((htmlAsString: string) => {
          const parser: DOMParser = new DOMParser();

          const articleDocument: Document = parser.parseFromString(
            htmlAsString,
            "text/html"
          );

          this.article = articleDocument.querySelector("article")!;
        });
  };
}
