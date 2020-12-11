import GlobalState, { PageType } from "./global_state";
import LocalLinkElement from "./local_link";

export class GlobalEvents {
  private _globalState: GlobalState = new GlobalState();
  // private ev: Event = new Event("none");

  constructor() {
    window.onpopstate = this.onpopstate;
  }

  get globalState(): GlobalState {
    return this._globalState;
  }

  private onpopstate = (ev: PopStateEvent): void => {
    if (ev.target instanceof LocalLinkElement)
      this._globalState = new GlobalState(PageType.article);

    console.log(this._globalState.toString());
  };
}
