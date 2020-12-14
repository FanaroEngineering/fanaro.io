import Article, { articlesMetadata, Language, Topic } from "../data/articles";
import LocalLink from "./local_link";

export default class ArticlesTable extends HTMLElement {
  static readonly tag: string = "articles-table";

  private static readonly template: string = `
    <link rel="stylesheet" href="index.css" />

    <table>
      <thead>
        <th>#</th>
        <th>Article</th>
        <th>Date</th>
        <th>Language</th>
        <th>Main Topic</th>
        <th>Other Topics</th>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  private article: Article = {
    index: 0,
    title: "",
    link: "",
    date: 0,
    language: Language.english,
    mainTopic: Topic.go,
    otherTopics: [Topic.go],
  };
  private tr: HTMLTableRowElement = document.createElement("tr");

  constructor() {
    super();

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = ArticlesTable.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const tbody: HTMLTableSectionElement = this.shadowRoot!.querySelector(
      "tbody"
    )!;
    articlesMetadata.forEach((article: Article) => {
      this.article = article;
      this.tr = document.createElement("tr");

      this.rowIndex();
      this.rowArticle();
      this.rowDate();
      this.rowLanguage();
      this.rowMainTopic();
      this.rowOtherTopics();

      tbody.append(this.tr);
    });
  }

  private rowIndex = (): void => {
    const indexCell: HTMLTableDataCellElement = document.createElement("td");
    indexCell.innerHTML = this.article.index.toString();
    this.tr.append(indexCell);
  };

  private rowArticle = (): void => {
    const localLinkCell: HTMLTableDataCellElement = document.createElement(
      "td"
    );
    localLinkCell.append(new LocalLink(this.article.link, this.article.title));
    this.tr.append(localLinkCell);
  };

  private rowDate = (): void => {
    const dateCell: HTMLTableDataCellElement = document.createElement("td");
    const date: Date = new Date(this.article.date);
    dateCell.append(
      `${date.toLocaleDateString("default", {
        month: "short",
      })} ${date.getDate()}, ${date.getFullYear()}`
    );
    this.tr.append(dateCell);
  };

  private rowLanguage = (): void => {
    const languageCell: HTMLTableDataCellElement = document.createElement("td");
    languageCell.append(this.article.language.toString());
    this.tr.append(languageCell);
  };

  private rowMainTopic = (): void => {
    const mainTopicCell: HTMLTableDataCellElement = document.createElement(
      "td"
    );
    mainTopicCell.append(this.article.mainTopic.toString());
    this.tr.append(mainTopicCell);
  };

  private rowOtherTopics = (): void => {
    const otherTopicsCell: HTMLTableDataCellElement = document.createElement(
      "td"
    );
    const otherTopics: string =
      this.article.otherTopics.length == 0
        ? String.fromCharCode(8212)
        : this.article.otherTopics.join(", ");
    otherTopicsCell.append(otherTopics);
    this.tr.append(otherTopicsCell);
  };
}
