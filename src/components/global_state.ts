export enum PageType {
  home,
  article,
}

export default class GlobalState {
  constructor(readonly pageType: PageType) {}
}
