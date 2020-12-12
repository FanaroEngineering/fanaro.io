import GlobalState, { PageType } from "../src/components/global_state";

test("Global states", () => {
  // 1) Initial state
  const globalState1: GlobalState = new GlobalState();

  expect(globalState1.pageType).toBe(PageType.home);

  // 2) Article page
  const globalState2: GlobalState = new GlobalState(PageType.article);

  expect(globalState2.pageType).toBe(PageType.article);
});

test("toString", () => {
  const globalState: GlobalState = new GlobalState();

  expect(globalState.toString()).toBe("Global State: {pageType: home}");
});
