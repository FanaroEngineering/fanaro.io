import Article, { articlesMetadata, Language, Topic } from "../data/articles";
import LocalLink from "./local_link";

export default class ArticlesTable extends HTMLElement {
  static readonly tag: string = "articles-table";

  private static readonly template: string = `
    <table>
      <caption>Articles</caption>
      <thead>
        <th>#</th>
        <th>Date</th>
        <th>Languages</th>
        <th>Title</th>
        <th>Main Topic</th>
        <th>Other Topics</th>
      </thead>
      <tbody></tbody>
    </table>
  `;

  private article: Article = {
    index: 0,
    title: "",
    link: "",
    date: 0,
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.go],
  };
  private tr: HTMLTableRowElement = document.createElement("tr");

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ArticlesTable.template;
    const tbody: HTMLTableSectionElement = this.querySelector("tbody")!;
    articlesMetadata.forEach((article: Article) => {
      this.article = article;
      this.tr = document.createElement("tr");

      this.rowIndex();
      this.rowDate();
      this.rowLanguages();
      this.rowArticle();
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

  private rowLanguages = (): void => {
    const languageCell: HTMLTableDataCellElement = document.createElement("td");
    const languages: string = this.concatenator(this.article.languages);
    languageCell.append(languages);
    this.tr.append(languageCell);
  };

  private rowMainTopic = (): void => {
    const mainTopicCell: HTMLTableDataCellElement = document.createElement(
      "td"
    );
    mainTopicCell.append(this.article.mainTopic.toString());
    this.tr.append(mainTopicCell);
  };

  private concatenator = (array: (Language | Topic)[]): string => {
    return array.length == 0 ? String.fromCharCode(8212) : array.join(", ");
  };

  private rowOtherTopics = (): void => {
    const otherTopicsCell: HTMLTableDataCellElement = document.createElement(
      "td"
    );
    const otherTopics: string = this.concatenator(this.article.otherTopics);
    otherTopicsCell.append(otherTopics);
    this.tr.append(otherTopicsCell);
  };
}
