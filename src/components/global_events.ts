import GlobalState, { PageType } from "./global_state";
import LocalLinkElement from "./local_link";

export class GlobalEvents {
  private _globalState: GlobalState = new GlobalState();

  constructor() {
    window.onpopstate = this.onpopstate;
    window.onclick = this.onclick;
  }

  get globalState(): GlobalState {
    return this._globalState;
  }

  private onclick = (ev: MouseEvent): void => {
    if (ev.target instanceof LocalLinkElement)
      this._globalState = new GlobalState(PageType.article);
  };

  private onpopstate = (_: PopStateEvent): void => {
    if (window.location.pathname.endsWith("/")) {
      document.body.removeChild(document.querySelector("article")!);
      this._globalState = new GlobalState(PageType.home);
    }
  };
}
