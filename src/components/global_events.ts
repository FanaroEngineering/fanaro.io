import GlobalState, { PageType } from "./global_state";

export class GlobalEvents {
  private globalState: GlobalState = new GlobalState();

  constructor() {
    document.onclick = this.onclick;
  }

  private onclick = (ev: MouseEvent): void => {
    if (ev.target instanceof HTMLAnchorElement) {
      const anchor: HTMLAnchorElement = ev.target;
      const localLink: string = anchor.getAttribute("localLink")!;
      console.log(localLink);
      if (this.anchorIsLocalLink(anchor)) {
        ev.preventDefault();
        const localLink: string = anchor.getAttribute("localLink")!;
        this.globalState = new GlobalState(PageType.article);
        console.log(localLink);
        console.log(this.globalState);
      }
    }
  };

  private anchorIsLocalLink = (anchor: HTMLAnchorElement): boolean => anchor.getAttribute("localLink")?.length! > 0;
}
