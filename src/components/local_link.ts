export default class LocalLink extends HTMLElement {
  static readonly tag: string = "local-link";

  private static readonly template: string = `
    <style>
      a {
        color: #E67D40;
        text-decoration: none;
      }
    </style>
    
    <a></a>
  `;

  private _link: string;
  private _text: string;

  get link(): string {
    return this._link;
  }

  get text(): string {
    return this._text;
  }

  constructor(link: string = "", text: string = "") {
    super();
    this._link = link;
    this._text = text;

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = LocalLink.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this._link == "" || this._text == "") {
      this._link = this.getAttribute("link")!;
      this._text = this.getAttribute("text")!;
    }

    const innerAnchor: HTMLAnchorElement = this.shadowRoot!.querySelector("a")!;

    innerAnchor.href = this._link;
    innerAnchor.text = this._text;
  }
}
