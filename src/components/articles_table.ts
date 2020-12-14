export default class ArticlesTable extends HTMLElement {
  static readonly tag: string = "articles-table";

  private static readonly template: string = `
    <style>

    </style>
    <table>
    </table>
  `;

  constructor() {
    super();

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = ArticlesTable.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}
