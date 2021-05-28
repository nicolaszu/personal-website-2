export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  static: {
    prefix: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nicolas Zuluaga',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // tailwindcss
  tailwindcss: {
    cssPath: '~assets/styles/tailwind.scss',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/lottie.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-svg-loader',
  ],
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: true }, // Disables prefixing for SVG IDs
      ],
    },
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  optimizedImages: {
    optimizeImages: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
}
