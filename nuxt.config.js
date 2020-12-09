export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Bright Tomorrows',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bright Tomorrows provides support groups and resources to those struggling with mental illness and equips churches and ministry leaders to successfully address their needs.' }
    ],
    script: [
      { src: 'https://www.cognitoforms.com/s/iGIHIXFoS020hxPBBKSR6w' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;500;600;700&display=swap' }
      ]
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: "swiper/swiper-bundle.css",
      lang: "css"
    }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '@/plugins/swiper',
      mode: 'client'
    },
    {
      src: "~/plugins/v-waypoint.js",
      mode: 'client'
    },
    {
      src: '~/plugins/prismicLinks',
      ssr: false
    },
    {
      src: '~/plugins/fullCalendar',
      ssr: false
    }
  ],

  prismic: {
    endpoint: 'https://brighttomorrows.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/linkResolver',
    htmlSerializer: '@/plugins/htmlSerializer',
  },

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [{path: '~/components/global', prefix: 'v'}],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/prismic',
    'nuxt-fontawesome'
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
   ** You can extend webpack config here
   */
    transpile: ['countup.js', 'vue-countup-v2'],
    extend(_config, _ctx) {}
  },

  /*
  ** Show the progress bar
  */
  loading: {
    color: '#FFF1AD',
    height: '3px',
    throttle: 0
  }
}
