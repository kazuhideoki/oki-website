export const a = {
  path: '/',
  location: {
    pathname: '/',
    search: '',
    hash: '',
    href: 'http://localhost:8000/',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    state: null,
    key: 'initial',
  },
  pageResources: {
    json: {
      pageContext: {
        qiitaArticles: [
          {
            title:
              '【Flutter】Firestoreからデータを読み込む。FutureBuilderとStreamBuilder',
            text:
              "Flutter勉強中です。Firestone からデータを取得して表示するときに躓いてしまったので備忘録。\n\n非推奨なメソッドや返り値の扱いに戸惑ってしまった。\nFutureBuilderやStreamBuilderといかに組み合わせて使うかがポイントだった。\n\n※`Firebase.initializeApp()`などの初期化は省略しています。\n\n## FutureBuilder (最初に一度だけ読み込む)\n\n\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  \n  @override\n  Widget build(BuildContext context) {\n    // ★1 FutureBuilderを使う\n    return FutureBuilder<QuerySnapshot>(\n        // ★2 futureに`Future<QuerySnapshot>`を渡す。\n        future: FirebaseFirestore.instance.collection('posts').get(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n1. `FutureBuilder`を使う\n2. futureに`Future<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts').get()`\n古いチュートリアルなどで載っている`getDocuments()`は非推奨。`get()`を使うべし。\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。mapとかで操作するために。ここも`documents`は非推奨。docsを使うべし。\n\n## StreamBuilder （データの更新があるたびに自動で更新）\nチャットアプリなどデータの更新が頻繁なものに有効です。\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // ★1 StreamBuilderを使う\n    return StreamBuilder<QuerySnapshot>(\n        // ★2 streamに`Stream<QuerySnapshot>`を渡す。\n        stream: FirebaseFirestore.instance.collection('posts').snapshots(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n\n1. `StreamBuilder`を使う\n2. streamに`Stream<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts'). snapshot()`\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。ここは同じ。\n\n## まとめ\n\n- FutureやStreamを渡して、builderで返り値のsnapshotを処理する\n- 躓いたら公式ドキュメントやクラスの定義などを調べよう。\n\n間違いがあれば指摘していただけるとありがたいです。\n\n\n## 参考になったサイト\n[Cloud Firestore | FlutterFire](https://firebase.flutter.dev/docs/firestore/usage/)\n\n[Firebaseを使ったアプリ | Flutterで始めるアプリ開発](https://www.flutter-study.dev/firebase-app/firestore)\n",
            cover: 'https://i.imgur.com/oj0468v.png',
            url: 'https://qiita.com/kazuhideoki/items/ffe1b92aa17565ef8e4c',
            date: '2020-11-27T19:22:18+09:00',
          },
          {
            title: 'Reactでcssをオブジェクトとして読み込む',
            text:
              '<h1>cssファイルを読み込んだのに{styles.〇〇}で使えない</h1>\nimport React from "react";\nimport styles from "./styles.css";\nこのように読み込んだ。\n\nclassName={styles.〇〇}で設定してもスタイルが適応されない！！\nconsole.logで確認したらundifined。\n\n\nハマってしまったので備忘録\n\n<a src="https://kapu-kapu.hatenablog.com/entry/2018/11/19/132655">create-react-appで簡単にcss moduleが使えるようになってた。</a>\n\n↑ここが参考になった。\n\n<h2>cssファイルを〇〇.css→〇〇.module.cssにする</h2>\nimport React from "react";\nimport styles from "./styles.<b>module</b>.css";\nそしてこのように読み込んだ。\n\nこれだけで解決。\nちゃんとオブジェクトとして取り出せるようになった。\n',
            cover: 'https://i.imgur.com/oj0468v.png',
            url: 'https://qiita.com/kazuhideoki/items/55957031494fb81ebed9',
            date: '2019-12-29T17:38:47+09:00',
          },
        ],
      },
    },
    page: {
      componentChunkName: 'component---src-templates-index-tsx',
      path: '/',
      webpackCompilationHash: '1564841ce2d4961e0f46',
      staticQueryHashes: [
        '100844047',
        '1175472885',
        '1243577662',
        '4047169305',
        '655261634',
      ],
    },
    staticQueryResults: {
      '100844047': {
        data: {
          allContentfulProject: {
            edges: [
              {
                node: {
                  id: '3125e2f9-de37-5bce-976c-7a5f4a2873ed',
                  name: 'Google',
                  description:
                    'It is the most-used search engine on the World Wide Web, handling more than three billion searches each day.',
                  publishedDate: '1998',
                  logo: {
                    image: {
                      src:
                        '//images.ctfassets.net/r60ogesob7or/3AorRmtWOsGQ4o8gK0YWKG/5126f33084c294b0b2558c96d4459deb/google_PNG19630.png?w=200&fl=progressive&q=100',
                    },
                  },
                  type: 'Web',
                  homepage: 'https://www.google.com/',
                  repository: 'https://github.com/google',
                },
              },
              {
                node: {
                  id: 'd76c47f5-dd81-50c9-a424-9dedb5b134bd',
                  name: 'Gatsby JS',
                  description:
                    ' Gatsby is a React-based, GraphQL powered, static site generator. Overall think, part Jekyll, part create-react-app.',
                  publishedDate: '2016',
                  logo: {
                    image: {
                      src:
                        '//images.ctfassets.net/r60ogesob7or/6rkOXCpyvuekYIgy6U6gGu/26cbddeb4965a95dff17472e61f24bde/1_t5EnAu3eSWJA0rmZ9v3xuw.png?w=200&fl=progressive&q=100',
                    },
                  },
                  type: 'Framework',
                  homepage: 'https://www.gatsbyjs.org/',
                  repository: 'https://github.com/gatsbyjs/gatsby',
                },
              },
              {
                node: {
                  id: '5872f34d-4570-56a6-a24b-bdd4b3bce4c9',
                  name: 'Facebook',
                  description:
                    'Facebook is a popular free social networking website that allows registered users to keep in touch with friends.',
                  publishedDate: '2004',
                  logo: {
                    image: {
                      src:
                        '//images.ctfassets.net/r60ogesob7or/u3Um4zkMrAaQioyq4oSIW/5066c08d3432a67097ae27f77b068daa/600px-Facebook_logo__28square_29.png?w=200&fl=progressive&q=100',
                    },
                  },
                  type: 'Web',
                  homepage: 'http://facebook.com/',
                  repository: 'https://github.com/facebook',
                },
              },
            ],
          },
        },
      },
      '655261634': {
        data: {
          contentfulAbout: {
            aboutMe: {
              childMarkdownRemark: {
                rawMarkdownBody:
                  "Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), [Rebass](https://jxnblk.com/rebass/) (styled-component system) and [Contentful](https://www.contentful.com/).\n\nThe starter will give you 4 sections (it's really easy to add more if you want 😃):\n* [Landing:](#home) Displays a nice greeting with your name, also your roles (what you  are) and all your social links.\n* [About:](#about) Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!\n* [Project:](#projects) Displays a card for all your project that you've made and also the posibility to link with github or and external link.\n* [Writing:](#writing) Take the information about your medium user and show up to 6 stories as cards with the link to Medium.",
              },
            },
            profile: {
              image: {
                src:
                  '//images.ctfassets.net/r60ogesob7or/6nf3rNaaVaUqYcoAcciSeC/c702fc4f24c1c13c4f36c785b89f6688/Mate_Logo.png?w=450&fl=progressive&q=100',
              },
            },
          },
        },
      },
      '1175472885': {
        data: {
          site: { siteMetadata: { isMediumUserDefined: true } },
          mediumUser: {
            id: 'd997b4a5-fff4-5cb9-b2ff-7366964dfa49',
            name: 'Mate Starter',
            username: 'mate.starter',
            posts: [
              {
                id: 'ffd95745-67da-50de-9374-be033c0541ae',
                uniqueSlug: 'post-nº-3-7e237d4acbe0',
                title: 'Post Nº 3 💪',
                createdAt: 'May 2019',
                virtuals: {
                  subtitle:
                    'This is the last post I’m going to do, so if you have been reading this posts I realized how much free time you have. But in case you want…',
                  readingTime: 2.4528301886792456,
                  previewImage: { imageId: '1*dq38Fnh4jWHn5sADd2Q-6w.jpeg' },
                },
              },
              {
                id: 'e340ef2c-e9fa-565a-92bd-e87fd8b26515',
                uniqueSlug: 'post-nº-2-c3225ded1942',
                title: 'Post Nº 2 😍',
                createdAt: 'May 2019',
                virtuals: {
                  subtitle:
                    'Again, another random text. I do NOT recommend anyone read the following paragraphs, but you are free to do whatever you want with your…',
                  readingTime: 2.5622641509433963,
                  previewImage: { imageId: '1*dSz1eA7kGciePhd6tZG9Bg.jpeg' },
                },
              },
              {
                id: '3b5f31d0-b263-54a6-ae6c-10890d35e1c0',
                uniqueSlug: 'post-nº-1-e0c7a72c2763',
                title: 'Post Nº 1 🎉',
                createdAt: 'May 2019',
                virtuals: {
                  subtitle:
                    'The following text is random and doesn’t make sense. Up to you if you want to read it or not 😄',
                  readingTime: 2.539622641509434,
                  previewImage: { imageId: '1*ufP5nfg3eLEkIrqKB2i8mw.jpeg' },
                },
              },
            ],
          },
        },
      },
      '1243577662': {
        data: {
          contentfulAbout: {
            name: 'Kazuhide Oki',
            roles: [
              'Quick setup 🚀',
              'Responsive 📱',
              'PWA ✨',
              'Contentful CMS 🔧',
            ],
            socialLinks: [
              {
                url:
                  'https://github.com/EmaSuriano/gatsby-starter-mate/blob/master/README.md',
                name: 'Github',
                icon: 'github',
              },
              {
                url: 'https://medium.com/@emasuriano',
                name: 'Medium',
                icon: 'medium',
              },
              {
                url: 'https://emanuelsuriano.typeform.com/to/OeETl6',
                name: 'Contact me',
                icon: 'envelope',
              },
              {
                url: 'https://twitter.com/emasuriano',
                name: 'Twitter',
                icon: 'twitter',
              },
            ],
          },
          site: { siteMetadata: { deterministic: false } },
        },
      },
      '4047169305': {
        data: {
          contentfulAbout: {
            name: 'Kazuhide Oki',
            description: 'Kazuhide Okiのポートフォリオ兼ブログサイト',
            profile: {
              favicon16: {
                src:
                  '//images.ctfassets.net/r60ogesob7or/6nf3rNaaVaUqYcoAcciSeC/c702fc4f24c1c13c4f36c785b89f6688/Mate_Logo.png?w=16&fl=progressive&q=50',
              },
              favicon32: {
                src:
                  '//images.ctfassets.net/r60ogesob7or/6nf3rNaaVaUqYcoAcciSeC/c702fc4f24c1c13c4f36c785b89f6688/Mate_Logo.png?w=32&fl=progressive&q=50',
              },
              bigIcon: {
                src:
                  '//images.ctfassets.net/r60ogesob7or/6nf3rNaaVaUqYcoAcciSeC/c702fc4f24c1c13c4f36c785b89f6688/Mate_Logo.png?w=192&fl=progressive&q=50',
              },
              appleIcon: {
                src:
                  '//images.ctfassets.net/r60ogesob7or/6nf3rNaaVaUqYcoAcciSeC/c702fc4f24c1c13c4f36c785b89f6688/Mate_Logo.png?w=180&fl=progressive&q=50',
              },
            },
          },
        },
      },
    },
  },
  uri: '/',
  pageContext: {
    qiitaArticles: [
      {
        title:
          '【Flutter】Firestoreからデータを読み込む。FutureBuilderとStreamBuilder',
        text:
          "Flutter勉強中です。Firestone からデータを取得して表示するときに躓いてしまったので備忘録。\n\n非推奨なメソッドや返り値の扱いに戸惑ってしまった。\nFutureBuilderやStreamBuilderといかに組み合わせて使うかがポイントだった。\n\n※`Firebase.initializeApp()`などの初期化は省略しています。\n\n## FutureBuilder (最初に一度だけ読み込む)\n\n\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  \n  @override\n  Widget build(BuildContext context) {\n    // ★1 FutureBuilderを使う\n    return FutureBuilder<QuerySnapshot>(\n        // ★2 futureに`Future<QuerySnapshot>`を渡す。\n        future: FirebaseFirestore.instance.collection('posts').get(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n1. `FutureBuilder`を使う\n2. futureに`Future<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts').get()`\n古いチュートリアルなどで載っている`getDocuments()`は非推奨。`get()`を使うべし。\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。mapとかで操作するために。ここも`documents`は非推奨。docsを使うべし。\n\n## StreamBuilder （データの更新があるたびに自動で更新）\nチャットアプリなどデータの更新が頻繁なものに有効です。\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // ★1 StreamBuilderを使う\n    return StreamBuilder<QuerySnapshot>(\n        // ★2 streamに`Stream<QuerySnapshot>`を渡す。\n        stream: FirebaseFirestore.instance.collection('posts').snapshots(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n\n1. `StreamBuilder`を使う\n2. streamに`Stream<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts'). snapshot()`\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。ここは同じ。\n\n## まとめ\n\n- FutureやStreamを渡して、builderで返り値のsnapshotを処理する\n- 躓いたら公式ドキュメントやクラスの定義などを調べよう。\n\n間違いがあれば指摘していただけるとありがたいです。\n\n\n## 参考になったサイト\n[Cloud Firestore | FlutterFire](https://firebase.flutter.dev/docs/firestore/usage/)\n\n[Firebaseを使ったアプリ | Flutterで始めるアプリ開発](https://www.flutter-study.dev/firebase-app/firestore)\n",
        cover: 'https://i.imgur.com/oj0468v.png',
        url: 'https://qiita.com/kazuhideoki/items/ffe1b92aa17565ef8e4c',
        date: '2020-11-27T19:22:18+09:00',
      },
      {
        title: 'Reactでcssをオブジェクトとして読み込む',
        text:
          '<h1>cssファイルを読み込んだのに{styles.〇〇}で使えない</h1>\nimport React from "react";\nimport styles from "./styles.css";\nこのように読み込んだ。\n\nclassName={styles.〇〇}で設定してもスタイルが適応されない！！\nconsole.logで確認したらundifined。\n\n\nハマってしまったので備忘録\n\n<a src="https://kapu-kapu.hatenablog.com/entry/2018/11/19/132655">create-react-appで簡単にcss moduleが使えるようになってた。</a>\n\n↑ここが参考になった。\n\n<h2>cssファイルを〇〇.css→〇〇.module.cssにする</h2>\nimport React from "react";\nimport styles from "./styles.<b>module</b>.css";\nそしてこのように読み込んだ。\n\nこれだけで解決。\nちゃんとオブジェクトとして取り出せるようになった。\n',
        cover: 'https://i.imgur.com/oj0468v.png',
        url: 'https://qiita.com/kazuhideoki/items/55957031494fb81ebed9',
        date: '2019-12-29T17:38:47+09:00',
      },
    ],
  },
  params: {},
  pathContext: {
    qiitaArticles: [
      {
        title:
          '【Flutter】Firestoreからデータを読み込む。FutureBuilderとStreamBuilder',
        text:
          "Flutter勉強中です。Firestone からデータを取得して表示するときに躓いてしまったので備忘録。\n\n非推奨なメソッドや返り値の扱いに戸惑ってしまった。\nFutureBuilderやStreamBuilderといかに組み合わせて使うかがポイントだった。\n\n※`Firebase.initializeApp()`などの初期化は省略しています。\n\n## FutureBuilder (最初に一度だけ読み込む)\n\n\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  \n  @override\n  Widget build(BuildContext context) {\n    // ★1 FutureBuilderを使う\n    return FutureBuilder<QuerySnapshot>(\n        // ★2 futureに`Future<QuerySnapshot>`を渡す。\n        future: FirebaseFirestore.instance.collection('posts').get(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n1. `FutureBuilder`を使う\n2. futureに`Future<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts').get()`\n古いチュートリアルなどで載っている`getDocuments()`は非推奨。`get()`を使うべし。\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。mapとかで操作するために。ここも`documents`は非推奨。docsを使うべし。\n\n## StreamBuilder （データの更新があるたびに自動で更新）\nチャットアプリなどデータの更新が頻繁なものに有効です。\n\n```Dart\nimport 'package:flutter/material.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\n\nclass HogeApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // ★1 StreamBuilderを使う\n    return StreamBuilder<QuerySnapshot>(\n        // ★2 streamに`Stream<QuerySnapshot>`を渡す。\n        stream: FirebaseFirestore.instance.collection('posts').snapshots(),\n        builder: (context, snapshot) {\n          if (snapshot.hasData) {\n            // ★3 `List<DocumentSnapshot>`をsnapshotから取り出す。\n            final List<DocumentSnapshot> documents = snapshot.data.docs;\n            return ListView(\n                children: documents\n                    .map((doc) => Card(\n                          child: ListTile(\n                            title: Text(doc['text']),\n                            subtitle: Text(doc['email']),\n                          ),\n                        ))\n                    .toList());\n          } else if (snapshot.hasError) {\n            return Text('エラーだよ');\n          }\n        });\n  }\n}\n\n```\n\n1. `StreamBuilder`を使う\n2. streamに`Stream<QuerySnapshot>`を渡す。\n`FirebaseFirestore.instance.collection('posts'). snapshot()`\n\n3. `List<DocumentSnapshot>`をsnapshotから取り出す。ここは同じ。\n\n## まとめ\n\n- FutureやStreamを渡して、builderで返り値のsnapshotを処理する\n- 躓いたら公式ドキュメントやクラスの定義などを調べよう。\n\n間違いがあれば指摘していただけるとありがたいです。\n\n\n## 参考になったサイト\n[Cloud Firestore | FlutterFire](https://firebase.flutter.dev/docs/firestore/usage/)\n\n[Firebaseを使ったアプリ | Flutterで始めるアプリ開発](https://www.flutter-study.dev/firebase-app/firestore)\n",
        cover: 'https://i.imgur.com/oj0468v.png',
        url: 'https://qiita.com/kazuhideoki/items/ffe1b92aa17565ef8e4c',
        date: '2020-11-27T19:22:18+09:00',
      },
      {
        title: 'Reactでcssをオブジェクトとして読み込む',
        text:
          '<h1>cssファイルを読み込んだのに{styles.〇〇}で使えない</h1>\nimport React from "react";\nimport styles from "./styles.css";\nこのように読み込んだ。\n\nclassName={styles.〇〇}で設定してもスタイルが適応されない！！\nconsole.logで確認したらundifined。\n\n\nハマってしまったので備忘録\n\n<a src="https://kapu-kapu.hatenablog.com/entry/2018/11/19/132655">create-react-appで簡単にcss moduleが使えるようになってた。</a>\n\n↑ここが参考になった。\n\n<h2>cssファイルを〇〇.css→〇〇.module.cssにする</h2>\nimport React from "react";\nimport styles from "./styles.<b>module</b>.css";\nそしてこのように読み込んだ。\n\nこれだけで解決。\nちゃんとオブジェクトとして取り出せるようになった。\n',
        cover: 'https://i.imgur.com/oj0468v.png',
        url: 'https://qiita.com/kazuhideoki/items/55957031494fb81ebed9',
        date: '2019-12-29T17:38:47+09:00',
      },
    ],
  },
};

const b = {
  rendered_body:
    '<p>Flutter勉強中です。Firestone からデータを取得して表示するときに躓いてしまったので備忘録。</p>\n\n<p>非推奨なメソッドや返り値の扱いに戸惑ってしまった。pener" target="_blank">Cloud Firestore | FlutterFire</a></p>\n\n<p><a href="https://www.flutter-study.dev/firebase-app/firestore" rel="nofollow noopener" target="_blank">Firebaseを使ったアプリ | Flutterで始めるアプリ開発</a></p>\n',
  body:
    "Flutter勉強中です。Firestone からデータを取得して表示するときに躓いてしまったので備忘録。\n\n非推奨なメソッドや返り値の扱いに戸惑ってしまった。\nFutureBuilderやStreamBuilderといかに組み合わせて使うかがポイントだった。\n\n※`Firebase.initializeApp()`などの初期化は省略しています。\n\n## FutureBuilder (最初に一度だけ読みirebase-app/firestore)\n",
  coediting: false,
  comments_count: 0,
  created_at: '2020-11-27T19:22:18+09:00',
  group: null,
  id: 'ffe1b92aa17565ef8e4c',
  likes_count: 0,
  private: false,
  reactions_count: 0,
  tags: [
    { name: 'Dart', versions: [] },
    { name: 'Firebase', versions: [] },
    { name: 'Flutter', versions: [] },
    { name: 'Firestore', versions: [] },
  ],
  title:
    '【Flutter】Firestoreからデータを読み込む。FutureBuilderとStreamBuilder',
  updated_at: '2020-11-27T19:48:28+09:00',
  url: 'https://qiita.com/kazuhideoki/items/ffe1b92aa17565ef8e4c',
  user: {
    description:
      '本職はシンガポールで美容師やっている人。\r\n職場で使っているタブレット用ウェブアプリを自分で開発、運用している。\r\n仕事でもプライベートでもプログラミングしてる。',
    facebook_id: 'kazuhide.oki',
    followees_count: 0,
    followers_count: 0,
    github_login_name: null,
    id: 'kazuhideoki',
    items_count: 2,
    linkedin_id: '',
    location: '',
    name: 'Kazuhide Oki',
    organization: '',
    permanent_id: 558894,
    profile_image_url:
      'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/558894/e016a123ec4acabc460b20705361a04b8a039fac/large.png?1606539037',
    team_only: false,
    twitter_screen_name: null,
    website_url: '',
  },
  page_views_count: null,
};

const dev = [
  {
    type_of: 'article',
    id: 528324,
    title:
      'How to get data from Firestore and show it on `FlutterBuilder` or `StreamBuilder`',
    description:
      "I'm learning Flutter. I was stacked when I got data from Firestore. So this is a solution to that....",
    readable_publish_date: 'Nov 30',
    slug:
      'how-to-get-data-from-firestore-and-show-it-on-flutterbuilder-or-streambuilder-e05',
    path:
      '/kazuhideoki/how-to-get-data-from-firestore-and-show-it-on-flutterbuilder-or-streambuilder-e05',
    url:
      'https://dev.to/kazuhideoki/how-to-get-data-from-firestore-and-show-it-on-flutterbuilder-or-streambuilder-e05',
    comments_count: 0,
    public_reactions_count: 1,
    collection_id: null,
    published_timestamp: '2020-11-30T00:46:13Z',
    positive_reactions_count: 1,
    cover_image: null,
    social_image: 'https://dev.to/social_previews/article/528324.png',
    canonical_url:
      'https://dev.to/kazuhideoki/how-to-get-data-from-firestore-and-show-it-on-flutterbuilder-or-streambuilder-e05',
    created_at: '2020-11-29T23:15:31Z',
    edited_at: '2020-11-30T22:52:50Z',
    crossposted_at: null,
    published_at: '2020-11-30T00:46:13Z',
    last_comment_at: '2020-11-30T00:46:13Z',
    tag_list: ['flutter', 'dart', 'firebase', 'firestore'],
    tags: 'flutter, dart, firebase, firestore',
    user: {
      name: 'Kazuhide Oki',
      username: 'kazuhideoki',
      twitter_username: 'kazuhideoki1',
      github_username: 'kazuhideoki',
      website_url: null,
      profile_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--T_WQDQ_b--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/517236/9cbad723-8b30-4ee2-8f96-29d4eaa1ff26.jpg',
      profile_image_90:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--tViQ-JzU--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/517236/9cbad723-8b30-4ee2-8f96-29d4eaa1ff26.jpg',
    },
  },
];
