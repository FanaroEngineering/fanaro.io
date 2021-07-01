export default class Bitcoin extends HTMLElement {
  static readonly tag: string = "bit-coin";

  private static readonly template: string = `
    <p></p>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = Bitcoin.template;
  }
}
