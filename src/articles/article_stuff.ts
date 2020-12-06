export enum PageType {
  home,
  article,
}

export default class State {
  constructor(readonly pageType: PageType) {}
}


