export default class Footnote extends HTMLElement {
  static readonly tag: string = "foot-note";

  private static readonly template: string = `   
    <sup><a></a></sup>
  `;

  private _text: string = "";
  private nextIndex: number = 1;

  get text(): string {
    return this._text;
  }

  constructor(text: string = "") {
    super();
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
    this.nextIndex = numberOfFootnotes;
  };

  private editSup = (): void => {
    const supAnchor: HTMLAnchorElement = this.querySelector("a")!;
    supAnchor.innerHTML = this.nextIndex.toString();
    supAnchor.href = "#footnote-" + this.nextIndex.toString();
    const sup: HTMLElement = this.querySelector("sup")!;
    sup.id = "footnote-base-" + this.nextIndex.toString();
  };

  private editSub = (): void => {
    const subAnchor: HTMLAnchorElement = document.createElement("a");
    subAnchor.innerHTML = this.nextIndex.toString();
    subAnchor.href = "#footnote-base-" + this.nextIndex.toString();
    subAnchor.style.color = "#D9C07B";
    const sub: HTMLElement = document.createElement("sub");
    sub.id = "footnote-" + this.nextIndex.toString();
    sub.innerHTML = ": " + this._text;
    sub.prepend(subAnchor);

    const article: HTMLElement = document.querySelector("article")!;
    article.append(sub);
  };
}
