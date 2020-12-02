import fetch from 'node-fetch';
import path from 'path';
require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

import { GatsbyNode, Actions } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import { MediumPost } from '../src/types'

export const createPages: GatsbyNode["createPages"] = async ({actions}) => {
// export const createPages:any = async ({actions}) => {
  const { createPage } = actions;
  // console.log('createPageは ' + createPage);
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

  const qiitaArticles: MediumPost[] = json.map((value: any) => ({
    title: value.title,
    text: value.body,
    cover: '',
    url: value.url,
    date: value.created_at,
    time: 0,
  }));
  console.log('gatsby-nodeのqiitaArticlesは ' + qiitaArticles);

  createPage({
    path: `/index`,
    component: path.resolve('./src/sections/Writing'),
    // component: path.resolve('./src/pages/index'),
    context: { qiitaArticles },
  });

  // // Create a page for each Pokémon.
  // allPokemon.forEach((pokemon) => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve('./src/templates/pokemon.js'),
  //     context: { pokemon },
  //   });
  // });
};
