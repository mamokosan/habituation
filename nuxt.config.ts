import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  srcDir: 'src',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - habituation',
    title: 'habituation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  manifest: {
    name: '習慣化',      // アプリの名称
    short_name: '習慣化',    // ホーム画面に表示される名称
    display: 'standalone',     // 表示モード  'fullscreen' 'standalone' 'minimal-ui' 'browser'
    theme_color: 'blue',    // アプリケーションの既定のテーマ色を定義
    background_color: 'blue',  // 背景の色
    lang: 'ja',                // 言語
    start_url: '',   // アイコンから起動した時のURL
    icons: [
      {
        src: '/static/dog.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
  },
  workbox: {
    dev: true
  }
}
