const fetch = require('node-fetch');
const path = require('path');

exports.createPages = async ({ actions: { createPage } }) => {
  // createPage({
  //   path: '/',
  //   component: require.resolve('./src/templates/index.tsx'),
  //   context: {
  //     title: 'We Don’t Need No Stinkin’ GraphQL!',
  //     content: '<p>This is page content.</p><p>No GraphQL required!</p>',
  //   },
  // });
  const header = {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
    },
  };
  const res = await fetch(
    'https://qiita.com/api/v2/authenticated_user/items',
    header,
  );
  console.log('resは ' + res);

  const json = await res.json();

  const qiitaArticles = json.map((value) => ({
    title: value.title,
    text: value.body,
    cover: 'https://i.imgur.com/oj0468v.png', // 画像の参照先のURL必須 → ないと他のところでエラー
    url: value.url,
    date: value.created_at,
    // time: 0,
  }));
  console.log('gatsby-nodeのqiitaArticlesは ' + qiitaArticles);

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    // component: path.resolve('./src/pages/index.tsx'),
    context: { qiitaArticles },
  });
};
