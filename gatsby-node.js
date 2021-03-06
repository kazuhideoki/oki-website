const fetch = require('node-fetch');

exports.createPages = async ({ actions: { createPage } }) => {
  const header = {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
    },
  };
  const res = await fetch(
    'https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=3',
    header,
  );

  let json = await res.json();
  json = json.filter((value, index) => {
    return index < 3;
  });

  const qiitaCover =
    'https://cdn.qiita.com/assets/qiita-fb-fe28c64039d925349e620ba55091e078.png'; // 画像の参照先のURL必須 → ないと他のところでエラー
  let qiitaArticles = json.map((value) => {
    const date = new Date(value.created_at);
    const dateJapanese = `${date.getMonth() + 1}月${date.getDate()}日`;

    return {
      title: value.title,
      text: value.rendered_body,
      cover: qiitaCover,
      url: value.url,
      date: dateJapanese,
    };
  });

  const header2 = {
    headers: {
      Authorization: `Bearer ${process.env.DEV_TOKEN}`,
    },
  };
  const res2 = await fetch(
    'https://dev.to/api/articles?username=kazuhideoki&page=1&per_page=20',
    header2,
  );

  let json2 = await res2.json();

  json2 = json2.filter((value, index) => {
    return index < 3;
  });

  const devCover =
    'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png';
  let devArticles = json2.map((value) => {
    return {
      title: value.title,
      text: 'Read other articles',
      // cover: 'https://i.imgur.com/oj0468v.png', // 画像の参照先のURL必須 → ないと他のところでエラー
      cover: devCover,
      url: value.url,
      date: value.readable_publish_date,
      // time: 0,
    };
  });

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    context: { qiitaArticles, devArticles },
  });
};
