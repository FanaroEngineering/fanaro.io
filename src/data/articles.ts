export enum Language {
  english = "English",
  portuguese = "Português",
  french = "Français",
}

export enum Topic {
  go = "Go",
  tsumego = "Tsumego",
  joseki = "Joseki",
  goVariants = "Go Variants",
  review = "Review",
  philosophy = "Philosophy",
  meta = "Meta",
  logic = "Logic",
  social = "Social",
  politics = "Politics",
  history = "History",
  productivity = "Productivity",
  psychology = "Psychology",
  math = "Math",
  browserExtension = "Browser Extension",
  programming = "Programming",
  dart = "Dart",
  flutter = "Flutter",
  design = "Design",
  uiUx = "UI/UX",
  language = "[Language",
  literature = "Literature",
  writing = "Writing",
  quotes = "Quotes",
  books = "Books",
  myYouTubeChannel = "My YouTube Channel",
  sports = "Sports",
  comedy = "Comedy",
  health = "Health",
}

export default interface Article {
  index: number;
  title: string;
  link: string;
  date: number;
  languages: Language[];
  mainTopic: Topic;
  otherTopics: Topic[];
}

export const articlesMetadata: Article[] = [
  {
    index: 108,
    title: "My New Website | Meu Novo Site",
    link: "/articles/new_site/new_site.html",
    date: Date.UTC(2020, 11, 20),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.meta,
    otherTopics: [Topic.design],
  },
  {
    index: 107,
    title: "Revisão com Amir Fragman",
    link: "/articles/revisao_amir/revisao_amir.html",
    date: Date.UTC(2020, 11, 5),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 106,
    title: "OGS Kbd Nav",
    link: "/articles/ogs_kbd_nav/ogs_kbd_nav.html",
    date: Date.UTC(2020, 10, 28),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.go, Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    index: 105,
    title: "Tips and Advice on Go Etiquette",
    link: "/articles/go_etiquette/go_etiquette.html",
    date: Date.UTC(2020, 10, 22),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.psychology, Topic.myYouTubeChannel],
  },
  {
    index: 104,
    title: "YouTube Kbd Nav",
    link: "/articles/youtube_kbd_nav/youtube_kbd_nav.html",
    date: Date.UTC(2020, 8, 29),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    index: 103,
    title: "Recursion: Fibonacci in Go",
    link: "/articles/recursion_fibonacci_in_go/recursion_fibonacci_in_go.html",
    date: Date.UTC(2020, 7, 17),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego, Topic.math, Topic.myYouTubeChannel],
  },
  {
    index: 102,
    title: "Tradução de um Vídeo da BIBA Baduk",
    link: "/articles/traducao_biba/traducao_biba.html",
    date: Date.UTC(2020, 7, 16),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 101,
    title: "Etimologia da Palavra Carro",
    link: "/articles/etimologia_carro/etimologia_carro.html",
    date: Date.UTC(2020, 7, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    index: 100,
    title: "Os Grandes Debates de Joseki: Aula com Thiago Sinji Ramos",
    link: "/articles/joseki_debates_sinji/joseki_debates_sinji.html",
    date: Date.UTC(2020, 7, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.books, Topic.joseki, Topic.myYouTubeChannel],
  },
  {
    index: 99,
    title: "Quote #3 - Martin Fowler on Good Code",
    link: "/articles/quote_3_fowler/quote_3_fowler.html",
    date: Date.UTC(2020, 5, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity, Topic.quotes],
  },
  {
    index: 98,
    title: "DeepL: Traduza Meus Artigos",
    link: "/articles/deepl/deepl.html",
    date: Date.UTC(2020, 4, 20),
    languages: [Language.portuguese],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    index: 97,
    title: '"Less Code" Print Design',
    link: "/articles/less_code/less_code.html",
    date: Date.UTC(2020, 3, 19),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.design],
  },
  {
    index: 96,
    title: "Print Designs for My Aunt",
    link: "/articles/design_aunt/design_aunt.html",
    date: Date.UTC(2020, 3, 18),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    index: 95,
    title: "(My) Dart Katas",
    link: "/articles/dart_katas/dart_katas.html",
    date: Date.UTC(2020, 3, 11),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart, Topic.flutter],
  },
  {
    index: 94,
    title: "Avoid Spaghetti Theming",
    link: "/articles/spaghetti_theming/spaghetti_theming.html",
    date: Date.UTC(2020, 3, 4),
    languages: [Language.english],
    mainTopic: Topic.uiUx,
    otherTopics: [Topic.programming, Topic.design, Topic.dart, Topic.flutter],
  },
  {
    index: 93,
    title: "Musashi, Craftsmanship and The Critical Moment",
    link: "/articles/musashi/musashi.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.philosophy,
    otherTopics: [Topic.programming, Topic.design, Topic.go, Topic.sports],
  },
  {
    index: 92,
    title: "My Dad's Logo",
    link: "/articles/dad_logo/dad_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    index: 91,
    title: "A Weightlifting Logo",
    link: "/articles/weightlifting_logo/weightlifting_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.sports, Topic.myYouTubeChannel],
  },
  {
    index: 90,
    title: "Anti Bullshit Bullshit Club",
    link: "/articles/anti_bullshit_logo/anti_bullshit_logo.html",
    date: Date.UTC(2020, 2, 17),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    index: 89,
    title: "DIY Minimalist Portrait",
    link: "/articles/diy_minimalist_portrait/diy_minimalist_portrait.html",
    date: Date.UTC(2020, 1, 26),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    index: 88,
    title: "Please Stop this Fallacy",
    link: "/articles/fallacy_against_communism/fallacy_against_communism.html",
    date: Date.UTC(2020, 1, 10),
    languages: [Language.english],
    mainTopic: Topic.logic,
    otherTopics: [Topic.politics, Topic.history, Topic.philosophy],
  },
  {
    index: 87,
    title: "My Twitter: @PFanaro",
    link: "/articles/my_twitter/my_twitter.html",
    date: Date.UTC(2020, 0, 20),
    languages: [Language.english],
    mainTopic: Topic.social,
    otherTopics: [Topic.meta],
  },
  {
    index: 86,
    title: "KG-LBS Converter",
    link: "/articles/kg_lbs_converter/kg_lbs_converter.html",
    date: Date.UTC(2019, 11, 30),
    languages: [Language.english],
    mainTopic: Topic.math,
    otherTopics: [Topic.sports, Topic.design],
  },
  {
    index: 85,
    title: "Universal Principles of Design",
    link:
      "/articles/universal_principles_design/universal_principles_design.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.uiUx],
  },
  {
    index: 84,
    title: "Quote #2 - Stalin on Elections",
    link: "/articles/quote_2_stalin/quote_2_stalin.html",
    date: Date.UTC(2019, 10, 18),
    languages: [Language.english],
    mainTopic: Topic.politics,
    otherTopics: [
      Topic.philosophy,
      Topic.logic,
      Topic.psychology,
      Topic.history,
      Topic.meta,
    ],
  },
  {
    index: 83,
    title: "Quote #1 - Dorothy Parker on What Writing Is",
    link: "/articles/quote_1_parker/quote_1_parker.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.writing,
    otherTopics: [Topic.productivity, Topic.language, Topic.meta],
  },
  {
    index: 82,
    title: "Tetris Go",
    link: "/articles/tetris_go/tetris_go.html",
    date: Date.UTC(2019, 8, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants, Topic.myYouTubeChannel],
  },
  {
    index: 81,
    title: "Scrum (Part 2)",
    link: "/articles/scrum_2/scrum_2.html",
    date: Date.UTC(2019, 8, 3),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    index: 80,
    title: "Simão Gonçalves [4-5d EGF] vs Philippe Fanaro [2k-2d KGS]",
    link:
      "/articles/simao_goncalves_vs_philippe_fanaro/simao_goncalves_vs_philippe_fanaro.html",
    date: Date.UTC(2019, 8, 1),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    index: 79,
    title: "Scrum (Part 1)",
    link: "/articles/scrum_1/scrum_1.html",
    date: Date.UTC(2019, 7, 21),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    index: 78,
    title: "Less Pain in the Office",
    link: "/articles/less_pain_office/less_pain_office.html",
    date: Date.UTC(2019, 7, 3),
    languages: [Language.english],
    mainTopic: Topic.health,
    otherTopics: [Topic.productivity, Topic.programming],
  },
  {
    index: 77,
    title: "My VS Code Settings",
    link: "/articles/my_vs_code_settings/my_vs_code_settings.html",
    date: Date.UTC(2019, 6, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity],
  },
  {
    index: 76,
    title: "Fluent Forever",
    link: "/articles/fluent_forever/fluent_forever.html",
    date: Date.UTC(2019, 6, 4),
    languages: [Language.english],
    mainTopic: Topic.language,
    otherTopics: [Topic.productivity, Topic.psychology],
  },
  {
    index: 75,
    title: "Macunaíma",
    link: "/articles/macunaima/macunaima.html",
    date: Date.UTC(2019, 5, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.literature,
    otherTopics: [Topic.language],
  },
];
