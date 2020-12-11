export enum PageType {
  home,
  article,
}

/**
 * This is supposed to be a data class, everything should basically be
 * immutable.
 */
export default class GlobalState {
  constructor(readonly pageType: PageType = PageType.home) {}

  toString = (): string => `Global State: {pageType: ${this.pageTypeAsString}}`;

  private get pageTypeAsString(): string {
    return Object.values(PageType)[this.pageType] as string;
  }
}
