import LocalLink from "./local_link";

export default class Toc extends HTMLElement {
  static readonly tag: string = "table-of-contents";

  constructor() {
    super();
  }

  connectedCallback() {
    this.appendH2s();
    this.prependHeading();
    this.hr();
  }

  private hr = (): void => {
    const firstHr: HTMLHRElement = document.createElement("hr");
    firstHr.style.marginTop = "20px";
    this.prepend(firstHr);
    this.append(document.createElement("hr"));
  };

  private appendH2s = (): void => {
    const ol: HTMLOListElement = document.createElement("ol");

    const sections: NodeListOf<HTMLElement> = document.querySelectorAll(
      "section"
    );

    sections.forEach((section: HTMLElement) => {
      const h2: HTMLHeadingElement = section.querySelector("h2")!;

      const li: HTMLLIElement = document.createElement("li");

      const localLink: LocalLink = new LocalLink(
        "#" + h2?.id,
        this.stripNumberedPrefix(h2?.innerHTML)
      );

      li.append(localLink);
      li.append(this.appendH3s(section));
      ol.append(li);
    });

    this.append(ol);
  };

  private stripNumberedPrefix = (text: string = ""): string =>
    text.split(" ").slice(1).join(" ");

  private appendH3s = (section: HTMLElement): HTMLOListElement => {
    const ol: HTMLOListElement = document.createElement("ol");
    const h3s: NodeListOf<HTMLHeadingElement> = section.querySelectorAll("h3");

    h3s.forEach((h3: HTMLHeadingElement) => {
      const li: HTMLLIElement = document.createElement("li");

      const localLink: LocalLink = new LocalLink(
        "#" + h3?.id,
        this.stripNumberedPrefix(h3?.innerHTML)
      );

      li.append(localLink);
      ol.append(li);
    });

    return ol;
  };

  private prependHeading = () => {
    const h2: HTMLHeadingElement = document.createElement("h2");
    h2.innerHTML = "Table of Contents";
    this.prepend(h2);
  };
}

enum Headings {
  h2 = "h2",
  h3 = "h3",
}

export class CustomH2 extends HTMLElement {
  static readonly tag: string = "custom-h2";

  protected static readonly template: string = `
    <h2></h2>
  `;

  constructor(public text: string = "") {
    super();
  }

  static countHeadings = (
    level: Headings = Headings.h2,
    section: HTMLElement | null = null
  ): number => {
    const headings =
      section == null
        ? document.querySelectorAll(level)
        : section.querySelectorAll(level);
    return headings == null ? 0 : headings.length;
  };

  connectedCallback() {
    if (this.text == "") this.text = this.getAttribute("text")!;
    this.innerHTML = CustomH2.template;

    this.order();
  }

  protected order() {
    const h2: HTMLHeadingElement = this.querySelector("h2")!;

    const fullHeading: string =
      CustomH2.countHeadings().toString() + ". " + this.text;
    h2.innerHTML = fullHeading;
    h2.id = fullHeading.toLowerCase().replaceAll(".", "").replaceAll(" ", "-");
  }
}

export class CustomH3 extends CustomH2 {
  static readonly tag: string = "custom-h3";

  protected static readonly template: string = `
    <h3></h3>
  `;

  constructor(text: string = "") {
    super(text);
  }

  static extractUpperHeading = (upperLevel: Headings = Headings.h2): string => {
    const headings = document.querySelectorAll(upperLevel)!;
    return headings[headings.length - 1].innerText.split(" ")[0];
  };

  connectedCallback() {
    if (this.text == "") this.text = this.getAttribute("text")!;
    this.innerHTML = CustomH3.template;

    this.order();
  }

  protected order() {
    const section: HTMLElement = this.parentElement!;
    const h3: HTMLHeadingElement = this.querySelector("h3")!;
    const fullHeading: string =
      CustomH3.extractUpperHeading() +
      CustomH2.countHeadings(Headings.h3, section).toString() +
      ". " +
      this.text;
    h3.innerHTML = fullHeading;
    h3.id = fullHeading.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
  }
}
