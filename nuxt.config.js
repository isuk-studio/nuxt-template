/* eslint-disable */
const StyleLintPlugin = require('stylelint-webpack-plugin');
const pugLinter = require('./.pug-lintrc.json');
/* eslint-enable */

module.exports = {
  /*
  Default Meta Head
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Neurabot is #1 Digital Lab Platform with Artificial Intelligence technology for object identification and data training to help Scientist’s, Pathologist’s and Academic’s research for better future' },
    ],
  },

  css: [
    '~/node_modules/normalize.css/normalize.css',
  ],

  devModules: [
    '@nuxtjs/tailwindcss',
  ],

  /*
  Build configuration
  */
  build: {
    /*
     You can extend webpack config here
    */
    extend(config, context) {
      // Run ESLint on save
      if (context.isDev && context.isClient) {
        config.plugins.push(new StyleLintPlugin());

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          options: {
            failOnWarning: true,
          },
        });

        /* eslint-disable */
        config.module.rules.forEach(rule => {
          // Remove SVG from default rules
          if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i') {
            rule.test = /\.(png|jpe?g|gif|webp)$/i;
          }
        })
        /* eslint-enable */

        config.module.rules.push({
          test: /\.(pug)$/,
          exclude: ['/node_modules/', '/.nuxt/'],
          use: [
            {
              loader: 'pug-lint-loader',
              options: pugLinter,
            },
          ],
          enforce: 'pre',
        });

        // Add svg inline loader configuration
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-inline-loader',
              options: {
                removeSVGTagAttrs: 'false',
              },
            },
          ],
        });
      }

      /* eslint-disable-next-line */
      // console.log(config.module.rules);
    },
  },

  /*
  Routing
  */
  router: {
    extendRoutes(routes) {
      routes.push({
        name: 'home',
        path: '/',
        component: 'pages/Index.vue',
      });
    },
  },
};
