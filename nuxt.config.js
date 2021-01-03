const config = {
  title: 'BREWING COFFEE STYLES',
  short_name: '4:6 Calc',
  description: [
    '様々なコーヒーの抽出方法の注水量・時間を測ることができるタイマーです。',
    'バリスタ世界チャンピオン・粕谷哲さんの考案したコーヒーの抽出方法 4:6 method を参考に作成しています。',
  ].join(''),
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: '0.0.0.0',
  },

  pwa: {
    manifest: {
      name: config.title,
      short_name: config.short_name,
      lang: 'ja',
    },
    meta: {
      appleStatusBarStyle: 'black-translucent',
      name: config.title,
      author: 'Buckmoon, Inc.',
      description: config.description,
      theme_color: '#000000',
      ogType: 'website',
      ogDescription: config.description,
      ogHost: 'https://coffee.buckmoon.io',
      ogImage: '/fb.png',
      nativeUI: true,
    },
  },

  /*
   ** Headers of the page
   */
  head: {
    title: config.title,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Google Analytics (https://google-analytics.nuxtjs.org)
  googleAnalytics: {
    id: 'UA-93506588-6',
  },

  googleFonts: {
    display: 'swap',
    download: true,
    inject: true,
    families: {
      Oswald: [200, 300, 400, 500, 600],
    },
  },

  generate: {
    dir: 'docs',
  },
}
