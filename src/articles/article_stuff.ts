export enum PageType {
  home,
  article,
}

export default class State {
  constructor(readonly pageType: PageType) {}
}

export class Events {
  constructor() {
    document.onclick = this.onclick;
  }

  private onclick = (ev: MouseEvent) => {
    if (ev.target instanceof HTMLAnchorElement) {
      ev.preventDefault();
      const anchor: HTMLAnchorElement = ev.target;
      if (anchor.getAttribute("localLink")?.length! > 0) {
        const localLink: string = anchor.getAttribute("localLink")!;
        console.log(localLink);
      } else {
        console.log("Not a local link.");
      }
    } else {
      console.log("Not a link");
    }
  };
}
