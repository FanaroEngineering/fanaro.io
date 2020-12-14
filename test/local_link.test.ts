import LocalLink from "../src/components/local_link";

test("Local Link Initialization", () => {
  customElements.define(LocalLink.tag, LocalLink);

  const localLinkEmpty: LocalLink = new LocalLink();

  expect(localLinkEmpty.link).toBe("");
  expect(localLinkEmpty.text).toBe("");

  const localLink: LocalLink = new LocalLink("/new/path", "title");

  expect(localLink.link).toBe("/new/path");
  expect(localLink.text).toBe("title");
});
