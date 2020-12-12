export default class LocalLinkElement extends HTMLElement {
  static readonly tag: string = "local-link";

  private static readonly template: string = `
    <style>
      a {
        color: #E67D40;
        text-decoration: none;
      }
    </style>
    <a href=""></a>
  `;

  private link: string = "";
  private text: string = "";

  constructor() {
    super();

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = LocalLinkElement.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.link = this.getAttribute("link")!;
    this.text = this.getAttribute("text")!;

    const innerAnchor: HTMLAnchorElement = this.shadowRoot!.querySelector("a")!;
    innerAnchor.href = this.link;
    innerAnchor.innerText = this.text;
  }

  private fetchAppendArticle = (): void => {
    fetch(this.link)
      .then((response: Response) => response.text())
      .then((htmlAsString: string) => {
        const parser: DOMParser = new DOMParser();

        const articleDocument: Document = parser.parseFromString(
          htmlAsString,
          "text/html"
        );

        const article: HTMLElement = articleDocument.querySelector("article")!;

        document.body.append(article);
      });
  };

  onclick = (ev: MouseEvent): void => {
    ev.preventDefault();
    this.fetchAppendArticle();
    history.pushState(
      { page: this.link, url: this.link },
      this.text,
      this.link
    );
    this.remove();
  };
}
