const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2023-10-12',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/over/',
      lastmod: '2023-10-12',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/projecten/',
      lastmod: '2023-10-12',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/contact/',
      lastmod: '2023-10-12',
      priority: 0.9,
      changefreq: 'yearly'
  }
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://stijlvolinterieur.nl/', paths })
        ]
    },
    // Other exports here
}


// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//  transpileDependencies: true,
//  devServer: {
//    historyApiFallback: true,
//  },
// });