export enum Language {
  english = "English",
  portuguese = "Português",
  french = "Français",
}

export enum Topic {
  go = "Go",
  tsumego = "Tsumego",
  joseki = "Joseki",
  review = "Review",
  productivity = "Productivity",
  psychology = "Psychology",
  math = "Math",
  browserExtension = "Browser Extension",
  programming = "Programming",
  language = "Language",
  books = "Books",
  myYouTubeChannel = "My YouTube Channel"
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
  {
    index: 102,
    title: "Tradução de um Vídeo da BIBA Baduk",
    link: "/articles/traducao_biba/traducao_biba.html",
    date: Date.UTC(2020, 7, 16),
    language: Language.portuguese,
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    index: 101,
    title: "Etimologia da Palavra Carro",
    link: "/articles/etimologia_carro/etimologia_carro.html",
    date: Date.UTC(2020, 7, 11),
    language: Language.portuguese,
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    index: 100,
    title: "Os Grandes Debates de Joseki: Aula com Thiago Sinji Ramos",
    link: "/articles/joseki_debates_sinji/joseki_debates_sinji.html",
    date: Date.UTC(2020, 7, 7),
    language: Language.portuguese,
    mainTopic: Topic.go,
    otherTopics: [Topic.books, Topic.joseki, Topic.myYouTubeChannel],
  },
  {
    index: 99,
    title: "Quote #3 - Martin Fowler on Good Code",
    link: "/articles/quote_3_fowler/quote_3_fowler.html",
    date: Date.UTC(2020, 5, 28),
    language: Language.english,
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity],
  },
];
