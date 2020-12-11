import GlobalState, { PageType } from "../src/components/global_state";

test("Global states", () => {
  // 1) Initial state
  const globalState: GlobalState = new GlobalState();

  expect(globalState.pageType).toBe(PageType.home);
});