const fetch = require('node-fetch');
const path = require('path');

exports.createPages = async ({ actions: { createPage } }) => {
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

  // console.log('jsonは ' + JSON.stringify(json[0]));

  const qiitaArticles = json.map((value) => {

    const date = new Date(value.created_at)
    dateJapanese = `${date.getMonth() + 1}月${date.getDate()}日`
    
    return {
      title: value.title,
      text: value.rendered_body,
      // cover: 'https://i.imgur.com/oj0468v.png', // 画像の参照先のURL必須 → ないと他のところでエラー
      cover:
        'https://cdn.qiita.com/assets/qiita-fb-fe28c64039d925349e620ba55091e078.png', // 画像の参照先のURL必須 → ないと他のところでエラー
      url: value.url,
      date: dateJapanese,
      // time: 0,
    };});
  console.log('gatsby-nodeのqiitaArticlesは ' + qiitaArticles);

  // const header = {
  //   headers: {
  //     Authorization: `Bearer ${process.env.DEV_TOKEN}`,
  //   },
  // };
  const res2 = await fetch(
    'https://dev.to/api/articles?username=kazuhideoki',
    // header,
  );
  console.log('resは ' + res);

  const json2 = await res2.json();

  console.log('json2は ' + JSON.stringify(json2[0]));

  const devArticles = json2.map((value) => {
  
    return {
      title: value.title,
      text: value.description,
      // cover: 'https://i.imgur.com/oj0468v.png', // 画像の参照先のURL必須 → ないと他のところでエラー
      cover: value.social_image,
      url: value.url,
      date: value.readable_publish_date,
      // time: 0,
    };
  });
  console.log('gatsby-nodeのqiitaArticlesは ' + qiitaArticles);

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    context: { qiitaArticles, devArticles },
  });
};
