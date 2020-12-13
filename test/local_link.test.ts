import LocalLinkElement from "./components/local_link";

test("Local Link Initialization", () => {
  const localLink: LocalLinkElement = new LocalLinkElement();

  expect(localLink.link).toBe("");
  expect(localLink.text).toBe("");
});
