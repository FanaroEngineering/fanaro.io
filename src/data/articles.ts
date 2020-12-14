export enum Language {
  english = "English",
  portuguese = "Portuguese",
  french = "French",
}

export enum Topic {
  go = "Go",
  tsumego = "Tsumego",
  review = "Review",
  productivity = "Productivity",
  psychology = "Psychology",
  math = "Math",
  browserExtension = "Browser Extension",
  programming = "Programming",
}

export default interface Article {
  index: number;
  title: string;
  link: string;
  date: number;
  language: Language;
  mainTopic: Topic;
  otherTopics: Topic[];
}

export const articlesMetadata: Article[] = [
  {
    index: 107,
    title: "Revisão com Amir Fragman",
    link: "/articles/revisao_amir/revisao_amir.html",
    date: Date.UTC(2020, 11, 5),
    language: Language.portuguese,
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    index: 106,
    title: "OGS Kbd Nav",
    link: "/articles/ogs_kbd_nav/ogs_kbd_nav.html",
    date: Date.UTC(2020, 10, 28),
    language: Language.english,
    mainTopic: Topic.productivity,
    otherTopics: [Topic.go, Topic.browserExtension],
  },
  {
    index: 105,
    title: "Tips and Advice on Go Etiquette",
    link: "/articles/go_etiquette/go_etiquette.html",
    date: Date.UTC(2020, 10, 22),
    language: Language.english,
    mainTopic: Topic.go,
    otherTopics: [Topic.psychology],
  },
  {
    index: 104,
    title: "YouTube Kbd Nav",
    link: "/articles/youtube_kbd_nav/youtube_kbd_nav.html",
    date: Date.UTC(2020, 8, 29),
    language: Language.english,
    mainTopic: Topic.productivity,
    otherTopics: [Topic.browserExtension],
  },
  {
    index: 103,
    title: "Recursion: Fibonacci in Go",
    link: "/articles/recursion_fibonacci_in_go/recursion_fibonacci_in_go.html",
    date: Date.UTC(2020, 7, 17),
    language: Language.english,
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego, Topic.math],
  },
];
