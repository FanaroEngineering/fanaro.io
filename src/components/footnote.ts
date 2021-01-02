export default class Footnote extends HTMLElement {
  static readonly tag: string = "foot-note";

  private static readonly template: string = `   
    <sup><a></a></sup>
  `;

  private _text: string = "";
  private index: number = 1;

  get text(): string {
    return this._text;
  }

  constructor(text: string = "") {
    super();
    this.onmouseenter = this.hover;
    this._text = text;
  }

  connectedCallback() {
    this.innerHTML = Footnote.template;
    if (this._text == "") this._text = this.getAttribute("text")!;
    this.calculateNextIndex();
    this.editSup();
    this.editSub();
  }

  private calculateNextIndex = (): void => {
    const article: HTMLElement = document.querySelector("article")!;
    const currentFootnotes = article.querySelectorAll("foot-note")!;
    const numberOfFootnotes: number = currentFootnotes.length;
    this.index = numberOfFootnotes;
  };

  private editSup = (): void => {
    const supAnchor: HTMLAnchorElement = this.querySelector("a")!;
    supAnchor.innerHTML = this.index.toString();
    supAnchor.href = "#footnote-" + this.index.toString();
    const sup: HTMLElement = this.querySelector("sup")!;
    sup.id = "footnote-base-" + this.index.toString();
  };

  private editSub = (): void => {
    const subAnchor: HTMLAnchorElement = document.createElement("a");
    subAnchor.innerHTML = this.index.toString();
    subAnchor.href = "#footnote-base-" + this.index.toString();
    subAnchor.style.color = "#D9C07B";
    const sub: HTMLElement = document.createElement("sub");
    sub.id = "footnote-" + this.index.toString();
    sub.innerHTML = ": " + this._text;
    sub.prepend(subAnchor);

    const article: HTMLElement = document.querySelector("article")!;
    article.append(sub);
  };

  private hover = (): void => {
    if (!this.doesDivAlreadyExist) {
      const p: HTMLParagraphElement = document.createElement("p");
      p.innerHTML = this._text;
      p.id = "footnote-hover-" + this.index;
      p.className = "footnote-hover";
      p.onmouseleave = () => p.remove();
      this.append(p);
    }
  };

  private get doesDivAlreadyExist(): boolean {
    return this.querySelector(`p#footnote-hover-${this.index}`) != null;
  }
}
