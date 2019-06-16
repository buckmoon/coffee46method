import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'BREWING COFFEE STYLES',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '様々なコーヒーの抽出方法の注水量・時間を測ることができるタイマーです。バリスタ世界チャンピオン・粕谷哲さんの考案したコーヒーの抽出方法 4:6 method を参考に作成しています。'
      },
      { name: 'apple-mobile-web-app-title', content: '4:6 Calc' },
      { name: 'application-name', content: '4:6 Calc' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://46coffee.buckmoon.io/' },
      { property: 'og:title', content: 'BREWING COFFEE STYLES' },
      {
        property: 'og:description',
        content:
          '様々なコーヒーの抽出方法の注水量・時間を測ることができるタイマーです。バリスタ世界チャンピオン・粕谷哲さんの考案したコーヒーの抽出方法 4:6 method を参考に作成しています。'
      },
      { property: 'og:image', content: 'https://46coffee.buckmoon.io/fb.png' },
      { name: 'msapplication-TileColor', content: '#000000' },
      {
        name: 'msapplication-TileImage',
        content: 'favicon/ms-icon-144x144.png'
      },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'alternate',
        hreflang: 'ja',
        href: 'https://46coffee.buckmoon.io/'
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600&display=swap',
        rel: 'stylesheet'
      },
      {
        href: 'https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css',
        rel: 'stylesheet'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: 'static/favicon/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: 'static/favicon/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: 'static/favicon/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'static/favicon/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'static/favicon/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'static/favicon/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'static/favicon/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'static/favicon/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'static/favicon/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'static/favicon/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'static/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: 'static/favicon/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'static/favicon/favicon-16x16.png'
      },
      { rel: 'manifest', href: 'static/favicon/manifest.json' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/css/main.sass', lang: 'sass' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  // styleResources: {
  //   sass: [
  //     '~/assets/css/main.sass'
  //   ]
  // },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'docs'
  }
}
