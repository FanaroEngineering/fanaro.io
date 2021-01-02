export default class LocalLink extends HTMLElement {
  static readonly tag: string = "local-link";

  private static readonly template: string = `    
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
  }

  connectedCallback() {
    this.innerHTML = LocalLink.template;
    if (this._link == "" || this._text == "") {
      this._link = this.getAttribute("link")!;
      this._text = this.getAttribute("text")!;
    }

    const innerAnchor: HTMLAnchorElement = this.querySelector("a")!;

    innerAnchor.href = this._link;
    innerAnchor.innerHTML = this._text;
  }
}
