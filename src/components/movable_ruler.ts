export default class MovableRuler extends HTMLElement {
  static readonly tag: string = "movable-ruler";

  private static readonly template: string = `
  
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = MovableRuler.template;
    
  }
}
