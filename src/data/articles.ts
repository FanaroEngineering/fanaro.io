export enum Language {
  english = "English",
  portuguese = "Português",
  french = "Français",
}

export enum Topic {
  books = "Books",
  browserExtension = "Browser Extension",
  comedy = "Comedy",
  cryptography = "Cryptography",
  culture = "Culture",
  dart = "Dart",
  dataScience = "Data Science",
  design = "Design",
  economy = "Economy",
  engineering = "Engineering",
  flutter = "Flutter",
  fuseki = "Fuseki",
  go = "Go",
  goVariants = "Go Variants",
  health = "Health",
  history = "History",
  infra = "Infrastructure",
  joseki = "Joseki",
  language = "Language",
  law = "Law",
  linux = "Linux",
  literature = "Literature",
  logic = "Logic",
  math = "Math",
  meta = "Meta",
  myYouTubeChannel = "My YouTube Channel",
  philosophy = "Philosophy",
  podcast = "Podcast",
  politics = "Politics",
  productivity = "Productivity",
  programming = "Programming",
  psychology = "Psychology",
  python = "Python",
  quotes = "Quotes",
  review = "Review",
  social = "Social",
  sports = "Sports",
  statistics = "Statistics",
  tech = "Tech",
  trips = "Trips",
  tsumego = "Tsumego",
  uiUx = "UI/UX",
  writing = "Writing",
  yose = "Yose",
}

export default interface Article {
  title: string;
  link: string;
  date: number;
  languages: Language[];
  mainTopic: Topic;
  otherTopics: Topic[];
}

export const pagesMetadata: Article[] = [
  {
    title: "About Me",
    link: "/pages/aboutme.html",
    date: Date.UTC(2018, 4, 2),
    languages: [Language.english],
    mainTopic: Topic.meta,
    otherTopics: [],
  },
  {
    title: "Sobre Mim",
    link: "/pages/sobremim.html",
    date: Date.UTC(2018, 4, 2),
    languages: [Language.portuguese],
    mainTopic: Topic.meta,
    otherTopics: [],
  },
  {
    title: "My Published Software",
    link: "/pages/software.html",
    date: Date.UTC(2018, 4, 2),
    languages: [Language.english],
    mainTopic: Topic.engineering,
    otherTopics: [Topic.programming, Topic.meta],
  },
  {
    title: "Designs",
    link: "/pages/designs.html",
    date: Date.UTC(2018, 4, 2),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.meta],
  },
  {
    title: "My Competences",
    link: "/pages/competences.html",
    date: Date.UTC(2021, 29, 5),
    languages: [Language.english],
    mainTopic: Topic.meta,
    otherTopics: [],
  },
];

export const articlesMetadata: Article[] = [
  {
    title: "My Dotfiles (Draft)",
    link: "/articles/my_dotfiles/my_dotfiles.html",
    date: Date.UTC(2021, 5, 29),
    languages: [Language.english],
    mainTopic: Topic.linux,
    otherTopics: [Topic.programming, Topic.meta],
  },
  {
    title: "A Jogadora de Go, por Shan Sa | Leitura de Livro",
    link: "/articles/shan_sa/shan_sa.html",
    date: Date.UTC(2021, 5, 25),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel, Topic.books],
  },
  {
    title: "Aula de Go com Ariel Oliveira",
    link: "/articles/aula_ariel/aula_ariel.html",
    date: Date.UTC(2021, 5, 22),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel, Topic.books],
  },
  {
    title: "ApocalipseCast #1 &mdash; Browsers",
    link: "/articles/apocalipse_cast_1/apocalipse_cast_1.html",
    date: Date.UTC(2021, 3, 4),
    languages: [Language.portuguese],
    mainTopic: Topic.myYouTubeChannel,
    otherTopics: [Topic.tech, Topic.infra, Topic.browserExtension],
  },
  {
    title: "Um Novo Site para a Brasil Nihon Kiin",
    link: "/articles/novo_site_brnhk/novo_site_brnhk.html",
    date: Date.UTC(2021, 2, 23),
    languages: [Language.portuguese],
    mainTopic: Topic.myYouTubeChannel,
    otherTopics: [Topic.go, Topic.programming],
  },
  {
    title: "(Rascunho) Introdução ao Meu Canal de YouTube",
    link: "/articles/introducao_ao_meu_canal/introducao_ao_meu_canal.html",
    date: Date.UTC(2021, 2, 22),
    languages: [Language.portuguese],
    mainTopic: Topic.myYouTubeChannel,
    otherTopics: [Topic.go, Topic.productivity],
  },
  {
    title: "Laziness vs Eagerness in Dart",
    link: "/articles/laziness_vs_eagerness_dart/laziness_vs_eagerness_dart.html",
    date: Date.UTC(2021, 2, 11),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart, Topic.engineering],
  },
  {
    title: "DIY Scan Station",
    link: "/articles/diy_scan_station/diy_scan_station.html",
    date: Date.UTC(2021, 1, 14),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.books],
  },
  {
    title: "FIC: Fast Immutable Collections, for Dart",
    link: "/articles/fic/fic.html",
    date: Date.UTC(2021, 1, 6),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart],
  },
  {
    title: "Guia Completo de Contagem de Pontos",
    link: "/articles/contagem_guia_completo/contagem_guia_completo.html",
    date: Date.UTC(2021, 0, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    title: "A Github Table of Contents Hack",
    link: "/articles/github_toc_hack/github_toc_hack.html",
    date: Date.UTC(2021, 0, 5),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.design],
  },
  {
    title: "Murugandi's Fighting Spirit Design",
    link: "/articles/murugandi/murugandi.html",
    date: Date.UTC(2020, 11, 21),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.design, Topic.design],
  },
  {
    title: "My New Website | Meu Novo Site",
    link: "/articles/new_site/new_site.html",
    date: Date.UTC(2020, 11, 20),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.meta,
    otherTopics: [Topic.design],
  },
  {
    title: "Revisão com Amir Fragman",
    link: "/articles/revisao_amir/revisao_amir.html",
    date: Date.UTC(2020, 11, 5),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    title: "OGS Kbd Nav",
    link: "/articles/ogs_kbd_nav/ogs_kbd_nav.html",
    date: Date.UTC(2020, 10, 28),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.go, Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    title: "Tips and Advice on Go Etiquette",
    link: "/articles/go_etiquette/go_etiquette.html",
    date: Date.UTC(2020, 10, 22),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.psychology, Topic.myYouTubeChannel],
  },
  {
    title: "YouTube Kbd Nav",
    link: "/articles/youtube_kbd_nav/youtube_kbd_nav.html",
    date: Date.UTC(2020, 8, 29),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.browserExtension, Topic.myYouTubeChannel],
  },
  {
    title: "Recursion: Fibonacci in Go",
    link: "/articles/recursion_fibonacci_in_go/recursion_fibonacci_in_go.html",
    date: Date.UTC(2020, 7, 17),
    languages: [Language.english, Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego, Topic.math, Topic.myYouTubeChannel],
  },
  {
    title: "Tradução de um Vídeo da BIBA Baduk",
    link: "/articles/traducao_biba/traducao_biba.html",
    date: Date.UTC(2020, 7, 16),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    title: "Etimologia da Palavra Carro",
    link: "/articles/etimologia_carro/etimologia_carro.html",
    date: Date.UTC(2020, 7, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    title: "Os Grandes Debates de Joseki: Aula com Thiago Sinji Ramos",
    link: "/articles/joseki_debates_sinji/joseki_debates_sinji.html",
    date: Date.UTC(2020, 7, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.books, Topic.joseki, Topic.myYouTubeChannel],
  },
  {
    title: "Quote #3 - Martin Fowler on Good Code",
    link: "/articles/quote_3_fowler/quote_3_fowler.html",
    date: Date.UTC(2020, 5, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity, Topic.quotes],
  },
  {
    title: "DeepL: Traduza Meus Artigos",
    link: "/articles/deepl/deepl.html",
    date: Date.UTC(2020, 4, 20),
    languages: [Language.portuguese, Language.english, Language.french],
    mainTopic: Topic.language,
    otherTopics: [],
  },
  {
    title: '"Less Code" Print Design',
    link: "/articles/less_code/less_code.html",
    date: Date.UTC(2020, 3, 19),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.design],
  },
  {
    title: "Print Designs for My Aunt",
    link: "/articles/design_aunt/design_aunt.html",
    date: Date.UTC(2020, 3, 18),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    title: "(My) Dart Katas",
    link: "/articles/dart_katas/dart_katas.html",
    date: Date.UTC(2020, 3, 11),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.dart, Topic.flutter],
  },
  {
    title: "Avoid Spaghetti Theming",
    link: "/articles/spaghetti_theming/spaghetti_theming.html",
    date: Date.UTC(2020, 3, 4),
    languages: [Language.english],
    mainTopic: Topic.uiUx,
    otherTopics: [Topic.programming, Topic.design, Topic.dart, Topic.flutter],
  },
  {
    title: "Musashi, Craftsmanship and The Critical Moment",
    link: "/articles/musashi/musashi.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.philosophy,
    otherTopics: [Topic.programming, Topic.design, Topic.go, Topic.sports],
  },
  {
    title: "My Dad's Logo",
    link: "/articles/dad_logo/dad_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [],
  },
  {
    title: "A Weightlifting Logo",
    link: "/articles/weightlifting_logo/weightlifting_logo.html",
    date: Date.UTC(2020, 3, 1),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.sports, Topic.myYouTubeChannel],
  },
  {
    title: "Anti Bullshit Bullshit Club",
    link: "/articles/anti_bullshit_logo/anti_bullshit_logo.html",
    date: Date.UTC(2020, 2, 17),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    title: "DIY Minimalist Portrait",
    link: "/articles/diy_minimalist_portrait/diy_minimalist_portrait.html",
    date: Date.UTC(2020, 1, 26),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.comedy],
  },
  {
    title: "Please Stop this Fallacy",
    link: "/articles/fallacy_against_communism/fallacy_against_communism.html",
    date: Date.UTC(2020, 1, 10),
    languages: [Language.english],
    mainTopic: Topic.logic,
    otherTopics: [Topic.politics, Topic.history, Topic.philosophy],
  },
  {
    title: "My Twitter: @PFanaro",
    link: "/articles/my_twitter/my_twitter.html",
    date: Date.UTC(2020, 0, 20),
    languages: [Language.english],
    mainTopic: Topic.social,
    otherTopics: [Topic.meta],
  },
  {
    title: "KG-LBS Converter",
    link: "/articles/kg_lbs_converter/kg_lbs_converter.html",
    date: Date.UTC(2019, 11, 30),
    languages: [Language.english],
    mainTopic: Topic.math,
    otherTopics: [Topic.sports, Topic.design],
  },
  {
    title: "Universal Principles of Design",
    link:
      "/articles/universal_principles_design/universal_principles_design.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.design,
    otherTopics: [Topic.uiUx],
  },
  {
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
    title: "Quote #1 - Dorothy Parker on What Writing Is",
    link: "/articles/quote_1_parker/quote_1_parker.html",
    date: Date.UTC(2019, 11, 2),
    languages: [Language.english],
    mainTopic: Topic.writing,
    otherTopics: [Topic.productivity, Topic.language, Topic.meta],
  },
  {
    title: "Tetris Go",
    link: "/articles/tetris_go/tetris_go.html",
    date: Date.UTC(2019, 8, 7),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants, Topic.myYouTubeChannel],
  },
  {
    title: "Scrum (Part 2)",
    link: "/articles/scrum_2/scrum_2.html",
    date: Date.UTC(2019, 8, 3),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    title: "Simão Gonçalves [4-5d EGF] vs Philippe Fanaro [2k-2d KGS]",
    link:
      "/articles/simao_goncalves_vs_philippe_fanaro/simao_goncalves_vs_philippe_fanaro.html",
    date: Date.UTC(2019, 8, 1),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review, Topic.myYouTubeChannel],
  },
  {
    title: "Scrum (Part 1)",
    link: "/articles/scrum_1/scrum_1.html",
    date: Date.UTC(2019, 7, 21),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.psychology, Topic.programming],
  },
  {
    title: "Less Pain in the Office",
    link: "/articles/less_pain_office/less_pain_office.html",
    date: Date.UTC(2019, 7, 3),
    languages: [Language.english],
    mainTopic: Topic.health,
    otherTopics: [Topic.productivity, Topic.programming],
  },
  {
    title: "My VS Code Settings",
    link: "/articles/my_vs_code_settings/my_vs_code_settings.html",
    date: Date.UTC(2019, 6, 28),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.productivity],
  },
  {
    title: "Fluent Forever",
    link: "/articles/fluent_forever/fluent_forever.html",
    date: Date.UTC(2019, 6, 4),
    languages: [Language.english],
    mainTopic: Topic.language,
    otherTopics: [Topic.productivity, Topic.psychology],
  },
  {
    title: "Macunaíma",
    link: "/articles/macunaima/macunaima.html",
    date: Date.UTC(2019, 5, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.literature,
    otherTopics: [Topic.language],
  },
  {
    title: "Negative Language: WHY you should avoid it",
    link: "/articles/negative_language/negative_language.html",
    date: Date.UTC(2019, 6, 11),
    languages: [Language.english],
    mainTopic: Topic.psychology,
    otherTopics: [Topic.philosophy, Topic.meta, Topic.social],
  },
  {
    title: "Say Hello to My AI Friend",
    link: "/articles/say_hello_to_my_ai_friend/say_hello_to_my_ai_friend.html",
    date: Date.UTC(2019, 4, 11),
    languages: [Language.portuguese, Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.comedy, Topic.meta],
  },
  {
    title: "Quase Morrendo | Tygem 3",
    link: "/articles/tygem_3/tygem_3.html",
    date: Date.UTC(2019, 4, 2),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    title: "Quadra Molhada? Sem problemas.",
    link: "/articles/quadra_molhada/quadra_molhada.html",
    date: Date.UTC(2019, 3, 30),
    languages: [Language.portuguese],
    mainTopic: Topic.comedy,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    title: "Cabeçada | Tygem 2",
    link: "/articles/tygem_2/tygem_2.html",
    date: Date.UTC(2019, 3, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    title: "Grupos Fracos Para Todo Lado | Tygem 1",
    link: "/articles/tygem_1/tygem_1.html",
    date: Date.UTC(2019, 3, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.myYouTubeChannel],
  },
  {
    title: "Formulário e Estatísticas sobre o Go Brasileiro",
    link: "/articles/estatisticas_go_br/estatisticas_go_br.html",
    date: Date.UTC(2019, 2, 26),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.statistics],
  },
  {
    title: "The Essential Guide to Keyboards",
    link: "/articles/kbd_guide/kbd_guide.html",
    date: Date.UTC(2019, 2, 20),
    languages: [Language.english],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.programming, Topic.writing],
  },
  {
    title: "Fundamentos de Go &mdash; Tsumegos Parte II",
    link: "/articles/tsumegos_2/tsumegos_2.html",
    date: Date.UTC(2019, 2, 19),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    title: "Fundamentos de Go &mdash; Tsumegos Parte I",
    link: "/articles/tsumegos_1/tsumegos_1.html",
    date: Date.UTC(2019, 2, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    title: "The KDD 2009 Data Science Challenge",
    link: "/articles/kdd_2009/kdd_2009.html",
    date: Date.UTC(2019, 1, 27),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [Topic.statistics, Topic.math],
  },
  {
    title: "Mini-Jogos de Go",
    link: "/articles/mini_jogos_go/mini_jogos_go.html",
    date: Date.UTC(2019, 1, 12),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants],
  },
  {
    title: "Some Interesting Go Statistics",
    link: "/articles/go_statistics/go_statistics.html",
    date: Date.UTC(2018, 11, 26),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.statistics],
  },
  {
    title: "The Pocket Fuseki Encyclopedia",
    link: "/articles/fuseki_encyclopedia/fuseki_encyclopedia.html",
    date: Date.UTC(2018, 11, 24),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title: "The Left Hand of Darkness, and SciFi",
    link: "/articles/left_hand_of_darkness/left_hand_of_darkness.html",
    date: Date.UTC(2018, 11, 20),
    languages: [Language.english],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    title: "Fundamentos de Go: Outros Fusekis",
    link: "/articles/outros_fusekis/outros_fusekis.html",
    date: Date.UTC(2018, 11, 10),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title: "Critique de Livre: Le Potentiel Érotique de Ma Femme",
    link: "/articles/potentiel_erotique/potentiel_erotique.html",
    date: Date.UTC(2018, 11, 4),
    languages: [Language.french, Language.english, Language.portuguese],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    title: "Fundamentos de Go: Fusekis com 3-4 Parte II",
    link: "/articles/fuseki_34_2/fuseki_34_2.html",
    date: Date.UTC(2018, 11, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title:
      "Statistics: Paid Apps vs Free Apps? Expensive Wines vs Cheap Wines?",
    link: "/articles/statistics_apps_wines/statistics_apps_wines.html",
    date: Date.UTC(2018, 10, 27),
    languages: [Language.english],
    mainTopic: Topic.statistics,
    otherTopics: [Topic.dataScience],
  },
  {
    title: "Fundamentos de Go: Fusekis com 3-4 Parte I",
    link: "/articles/fuseki_34_1/fuseki_34_1.html",
    date: Date.UTC(2018, 10, 26),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title: "Fundamentos de Go: Fusekis com 4-4",
    link: "/articles/fuseki_44/fuseki_44.html",
    date: Date.UTC(2018, 10, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title: "On Korea: A Brief Summary of My Experience",
    link: "/articles/on_korea/on_korea.html",
    date: Date.UTC(2018, 10, 10),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [
      Topic.meta,
      Topic.psychology,
      Topic.philosophy,
      Topic.politics,
      Topic.history,
      Topic.social,
    ],
  },
  {
    title: "Revisão: Philippe Fanaro [1d] vs Carlos Dutra [?k]",
    link: "/articles/revisao_carlos/revisao_carlos.html",
    date: Date.UTC(2018, 10, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Ali Trump and the 40 Ghost Supporters",
    link: "/articles/trump_40_supporters/trump_40_supporters.html",
    date: Date.UTC(2018, 9, 30),
    languages: [Language.english],
    mainTopic: Topic.statistics,
    otherTopics: [Topic.dataScience, Topic.politics],
  },
  {
    title: "Copa do Brasil 2018: Uyama Hissao [Kiin 7d]",
    link: "/articles/revisao_uyama/revisao_uyama.html",
    date: Date.UTC(2018, 9, 30),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "My deeplearning.ai Experience",
    link: "/articles/deeplearning.ai/deeplearning.ai.html",
    date: Date.UTC(2018, 9, 20),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [],
  },
  {
    title: "Fundamentos de Go: Abertura ou Fuseki (Nível Básico)",
    link: "/articles/fuseki_basico/fuseki_basico.html",
    date: Date.UTC(2018, 9, 16),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.fuseki],
  },
  {
    title: "Eleições 2018: Por Mais Sanidade",
    link: "/articles/eleicoes_2018/eleicoes_2018.html",
    date: Date.UTC(2018, 9, 14),
    languages: [Language.portuguese],
    mainTopic: Topic.politics,
    otherTopics: [Topic.logic],
  },
  {
    title: "Copa do Brasil 2018: Ronaldo Matayoshi",
    link: "/articles/revisao_matayoshi/revisao_matayoshi.html",
    date: Date.UTC(2018, 8, 29),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "The Power of Neural Networks: Simple Wage Predictions with Keras",
    link: "/articles/wage_pred/wage_pred.html",
    date: Date.UTC(2018, 8, 27),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [Topic.statistics],
  },
  {
    title: "Copa do Brasil 2018: Murao Yoshihisa",
    link: "/articles/revisao_murao/revisao_murao.html",
    date: Date.UTC(2018, 8, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Revisão No Seongho [Tygem 8d]",
    link: "/articles/revisao_no_seongho/revisao_no_seongho.html",
    date: Date.UTC(2018, 8, 11),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "The ATP Dataset and The Filthy Rich Tennis Players",
    link: "/articles/atp/atp.html",
    date: Date.UTC(2018, 8, 7),
    languages: [Language.english],
    mainTopic: Topic.dataScience,
    otherTopics: [Topic.statistics, Topic.python],
  },
  {
    title: "Python Basics, Eratosthenes and Problem 51",
    link: "/articles/eratos/eratos.html",
    date: Date.UTC(2018, 7, 30),
    languages: [Language.english],
    mainTopic: Topic.programming,
    otherTopics: [Topic.python, Topic.math],
  },
  {
    title: "Meu Artigo para a Revista Myosu",
    link: "/articles/myosu_1/myosu_1.html",
    date: Date.UTC(2018, 7, 28),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Telecom Nostalgia and Python Basics",
    link: "/articles/telecom_nostalgia/telecom_nostalgia.html",
    date: Date.UTC(2018, 7, 28),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Reenter the Dragon: Engineering",
    link: "/articles/reenter_engineering/reenter_engineering.html",
    date: Date.UTC(2018, 7, 15),
    languages: [Language.english],
    mainTopic: Topic.engineering,
    otherTopics: [Topic.meta, Topic.philosophy],
  },
  {
    title: "O Tesuji-Mor",
    link: "/articles/tesuji_mor/tesuji_mor.html",
    date: Date.UTC(2018, 7, 20),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    title: "Problema Profissional Nível 20k",
    link: "/articles/tsumego_pro_20k/tsumego_pro_20k.html",
    date: Date.UTC(2018, 7, 10),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    title: "Casey at the Bat",
    link: "/articles/casey_at_the_bat/casey_at_the_bat.html",
    date: Date.UTC(2018, 7, 7),
    languages: [Language.english],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    title: "A Guide to Go AI Programs",
    link: "/articles/guide_ai/guide_ai.html",
    date: Date.UTC(2018, 6, 30),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    title: "Sunjang Baduk",
    link: "/articles/sunjang/sunjang.html",
    date: Date.UTC(2018, 7, 2),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants],
  },
  {
    title:
      "CLL&M &mdash; Jean Jaurès, a Esquerda Francesa do Final do Século XIX",
    link: "/articles/esquerda_francesa_xix/esquerda_francesa_xix.html",
    date: Date.UTC(2018, 6, 27),
    languages: [Language.portuguese, Language.french],
    mainTopic: Topic.history,
    otherTopics: [Topic.politics],
  },
  {
    title: "Quebra-Cabeça de Go",
    link: "/articles/quebra_cabeca_go/quebra_cabeca_go.html",
    date: Date.UTC(2018, 6, 23),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego],
  },
  {
    title: "A Origem dos Cartões",
    link: "/articles/origem_cartoes/origem_cartoes.html",
    date: Date.UTC(2018, 6, 15),
    languages: [Language.portuguese],
    mainTopic: Topic.sports,
    otherTopics: [Topic.history],
  },
  {
    title: "Como Digitar Sem Olhar e Mais Rápido em 5 Minutos!",
    link: "/articles/como_digitar/como_digitar.html",
    date: Date.UTC(2018, 6, 19),
    languages: [Language.portuguese],
    mainTopic: Topic.productivity,
    otherTopics: [Topic.meta],
  },
  {
    title: "Guia de Inteligências Artificiais de Go",
    link: "/articles/guia_ia/guia_ia.html",
    date: Date.UTC(2018, 6, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.productivity],
  },
  {
    title:
      "Collection Littéraire L&M Parte II &mdash; Como entrar para a Academia Francesa",
    link: "/articles/tristan_bernard/tristan_bernard.html",
    date: Date.UTC(2018, 6, 7),
    languages: [Language.portuguese, Language.french],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    title:
      "Revisão pelo Patreon: Efraim Queiroz, Comandante das Estrelas da Morte",
    link: "/articles/revisao_efraim/revisao_efraim.html",
    date: Date.UTC(2018, 6, 3),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Collection Littéraire Lagarde & Michard Parte I: Poesia",
    link: "/articles/cllm_poesia/cllm_poesia.html",
    date: Date.UTC(2018, 5, 31),
    languages: [Language.portuguese, Language.french],
    mainTopic: Topic.literature,
    otherTopics: [Topic.writing],
  },
  {
    title: "A Lenda de Nestor de la Palissade",
    link: "/articles/nestor_de_la_palissade/nestor_de_la_palissade.html",
    date: Date.UTC(2018, 5, 28),
    languages: [Language.portuguese, Language.french],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    title: "A Polêmica do VAR",
    link: "/articles/var_polemica/var_polemica.html",
    date: Date.UTC(2018, 5, 24),
    languages: [Language.portuguese],
    mainTopic: Topic.sports,
    otherTopics: [Topic.politics, Topic.logic, Topic.law],
  },
  {
    title: "Tradução de um Livro Clássico do Go",
    link: "/articles/toshiro/toshiro.html",
    date: Date.UTC(2018, 5, 21),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.books],
  },
  {
    title: "Aula pelo Patreon: Philippe Fanaro [1d] vs Augusto Cezar [14k]",
    link: "/articles/revisao_augusto/revisao_augusto.html",
    date: Date.UTC(2018, 5, 17),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "26 Ovelhas e 10 Bodes: Qual a Idade do Capitão?",
    link: "/articles/qual_idade_capitao/qual_idade_capitao.html",
    date: Date.UTC(2018, 5, 15),
    languages: [Language.portuguese],
    mainTopic: Topic.logic,
    otherTopics: [],
  },
  {
    title: "Revisão Diogo Barbosa [Melhor 4k do Mundo]",
    link: "/articles/revisao_diogo/revisao_diogo.html",
    date: Date.UTC(2018, 5, 10),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "O Problema de Monty Hall",
    link: "/articles/monty_hall/monty_hall.html",
    date: Date.UTC(2018, 5, 9),
    languages: [Language.portuguese],
    mainTopic: Topic.statistics,
    otherTopics: [Topic.math],
  },
  {
    title: "The Insufficiency of the Right (and, therefore, of the Left?)",
    link: "/articles/inequality/inequality.html",
    date: Date.UTC(2018, 5, 8),
    languages: [Language.english],
    mainTopic: Topic.economy,
    otherTopics: [Topic.politics],
  },
  {
    title: "4-Color Go",
    link: "/articles/4_color_go/4_color_go.html",
    date: Date.UTC(2018, 5, 6),
    languages: [Language.english],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants],
  },
  {
    title: "Go de 4 Cores",
    link: "/articles/4_cores_go/4_cores_go.html",
    date: Date.UTC(2018, 5, 4),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.goVariants],
  },
  {
    title: "Voto Branco, Voto Nulo e a Crise da Democracia",
    link: "/articles/votos/votos.html",
    date: Date.UTC(2018, 5, 2),
    languages: [Language.portuguese],
    mainTopic: Topic.politics,
    otherTopics: [],
  },
  {
    title: "Pocket Guide to Yose",
    link: "/articles/pocket_yose/pocket_yose.html",
    date: Date.UTC(2018, 4, 31),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.yose],
  },
  {
    title: "A Solution to Frauds in Digital (Electoral) Voting: Beyond Safety",
    link: "/articles/electoral_fraud_solution/electoral_fraud_solution.html",
    date: Date.UTC(2018, 4, 30),
    languages: [Language.portuguese],
    mainTopic: Topic.cryptography,
    otherTopics: [Topic.math],
  },
  {
    title: "Guia de Bolso do Yose",
    link: "/articles/guia_yose/guia_yose.html",
    date: Date.UTC(2018, 4, 29),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.yose],
  },
  {
    title: "Regras Chinesas",
    link: "/articles/regras_chinesas/regras_chinesas.html",
    date: Date.UTC(2018, 4, 26),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    title: "My Brief Trip to Amsterdam: Red Lights, Go and Biblical Flirting",
    link: "/articles/amsterdam/amsterdam.html",
    date: Date.UTC(2018, 4, 25),
    languages: [Language.portuguese],
    mainTopic: Topic.writing,
    otherTopics: [Topic.trips, Topic.culture],
  },
  {
    title: "Revisão de Mais Alto Nível (2d vs 2k com 3 pedras de compensação)",
    link: "/articles/revisao_laercio/revisao_laercio.html",
    date: Date.UTC(2018, 4, 24),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "A Insuficiência da Direita (e, por consequência, da Esquerda?)",
    link: "/articles/insuficiencia_direita/insuficiencia_direita.html",
    date: Date.UTC(2018, 4, 20),
    languages: [Language.portuguese],
    mainTopic: Topic.politics,
    otherTopics: [Topic.economy],
  },
  {
    title: "Um vídeo antigo sobre o livro Os Grandes Debates de Josekis",
    link:
      "/articles/sinji_great_joseki_debates/sinji_great_joseki_debates.html",
    date: Date.UTC(2018, 4, 19),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.tsumego, Topic.books],
  },
  {
    title: "Duas Partidas 7k Revisadas",
    link: "/articles/revisao_7k/revisao_7k.html",
    date: Date.UTC(2018, 4, 17),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Uma Solução para Fraudes e Manipulações em Votos Digitais",
    link: "/articles/solucao_fraude_votos/solucao_fraude_votos.html",
    date: Date.UTC(2018, 4, 15),
    languages: [Language.portuguese],
    mainTopic: Topic.cryptography,
    otherTopics: [Topic.politics],
  },
  {
    title: "Copa Samsung 2017",
    link: "/articles/copa_samsung_2017/copa_samsung_2017.html",
    date: Date.UTC(2018, 4, 14),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [Topic.review],
  },
  {
    title: "Uma Breve Introdução ao Go",
    link: "/articles/introducao_ao_go/introducao_ao_go.html",
    date: Date.UTC(2018, 4, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [],
  },
  {
    title: "Fundamentos de Tewari",
    link: "/articles/tewari/tewari.html",
    date: Date.UTC(2018, 4, 12),
    languages: [Language.portuguese],
    mainTopic: Topic.go,
    otherTopics: [],
  },
];
