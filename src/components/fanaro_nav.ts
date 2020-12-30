export default class FanaroNav extends HTMLElement {
  static readonly tag: string = "fanaro-nav";

  private static readonly template: string = `  
    <nav>
      <a href="/">
        <img height="50" src="/assets/logo_400.png" />
        <h1>fanaro.io</h1>
      </a>
    </nav>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = FanaroNav.template;
  }
}
