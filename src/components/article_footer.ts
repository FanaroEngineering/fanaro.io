export default class ArticleFooter extends HTMLElement {
  static readonly tag: string = "article-footer";

  private static readonly template: string = `
    <style>
      hr {
        margin-left: 0px;
        border: none;
        max-width: 150px;
        width: 35vw;
        height: 0.75px;
        color: var(--text-color);
        background-color: var(--text-color);
      }
      a {
        color: #95c379;
        text-decoration: none;
      }
    </style>
    
    <br />
    <br />
    <br />
    <hr />
    <footer></footer>
  `;

  constructor() {
    super();

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = ArticleFooter.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const footnotes: NodeListOf<HTMLElement> = document.querySelectorAll(
      "sub"
    )!;
    const footer: HTMLElement = this.shadowRoot!.querySelector("footer")!;
    const footnotesLength: number = footnotes.length;
    for (let i = 0; i < footnotesLength; i++) {
      footer.appendChild(footnotes[i]);
      footer.append(document.createElement("br"));
    }
  }
}
