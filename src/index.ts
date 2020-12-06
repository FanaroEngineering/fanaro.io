function appendArticle(): void {
  fetch("/articles/test.html")
    .then((response: Response) => response.text())
    .then((htmlAsString: string) => {
      const parser: DOMParser = new DOMParser();

      const articleDocument: Document = parser.parseFromString(htmlAsString, "text/html");

      console.log("inside append");

      const article: HTMLElement = articleDocument.querySelector("article")!;

      document.body.append(article);
    });
}


document.onclick = ((_: MouseEvent) => {
  // const anchor: HTMLAnchorElement = document.querySelector("a")!;
  console.log("before append");
  appendArticle();
  console.log("after append");
});

// appendArticle();