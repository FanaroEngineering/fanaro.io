import LocalLinkElement from "../src/components/local_link";

test("Local Link Initialization", () => {
  customElements.define(LocalLinkElement.tag, LocalLinkElement);

  const localLinkEmpty: LocalLinkElement = new LocalLinkElement();

  expect(localLinkEmpty.link).toBe("");
  expect(localLinkEmpty.text).toBe("");

  const localLink: LocalLinkElement = new LocalLinkElement("/new/path", "title");

  expect(localLink.link).toBe("/new/path");
  expect(localLink.text).toBe("title");
});
