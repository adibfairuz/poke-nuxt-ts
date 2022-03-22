export default {
  head: {
    title: 'Poke Nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    "~/plugins/services",
  ],
  components: [
    '~/components',
    '~/containers'
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
    }]
  ],

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  fontawesome: {
    icons: {
      solid: ['faHeart', 'faArrowLeft', 'faTrash']
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
}
