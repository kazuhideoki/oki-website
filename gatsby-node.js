// require('ts-node').register({
//   compilerOptions: {
//     module: 'commonjs',
//     target: 'esnext',
//   },
// });

// // require('./src/__generated__/gatsby-types');

// exports.createPages = require('./gatsby-node/index')

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: '/',
    // component: require.resolve('./src/pages/index.tsx'),
    component: require.resolve('./src/templates/index.tsx'),
    context: {
      title: 'We Don’t Need No Stinkin’ GraphQL!',
      content: '<p>This is page content.</p><p>No GraphQL required!</p>',
    },
  });
};