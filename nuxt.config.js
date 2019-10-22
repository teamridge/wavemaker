module.exports = {
  head: {
    title: "Wavemaker Labs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "wavemaker labs website"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "favicon.png" }]
  },

  css: ["@/assets/scss/main.scss"],
  loading: false,
  build: {
    extend(config, { isDev, isClient }) {
      config.output.publicPath = "_nuxt/"; //remove the first '/'
      config.module.rules.push({
        test: /\.ttc/,
        loader: "url-loader",
        query: {
          limit: 2000,
          name: "fonts/[name].[hash:7].[ext]",
        },
      });
    }
  },
  plugins: ["~/plugins/vue-scrollto"],
  generate: {
    dir: "dist",
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  },
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  }
};
