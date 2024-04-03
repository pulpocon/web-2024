import mdPlugin, { Mode } from 'vite-plugin-markdown'

export default defineNuxtConfig({
  mode: 'static',
  modules: [
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  css: ['~/assets/scss/app.scss', '~/node_modules/@fortawesome/fontawesome-free/css/all.css'],
  meta: {
    title: '#pulpoCon24 - 19, 20 y 21 de septiembre en Vigo 🐙',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'PulpoCon 🐙 es el evento #gastrotechh / conferencia que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres.  Técnicas, arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado. Con reconocidos ponentes de gran prestigio nacional e internacional. 19, 20 y 21 de septiembre de 2024 en Vigo'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'pulpoCon 23'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'PulpoCon 🐙 es el evento #gastrotechh / conferencia que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres.  Técnicas, arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado. Con reconocidos ponentes de gran prestigio nacional e internacional. 19, 20 y 21 de septiembre de 2024 en Vigo'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pulpocon.es/og-image-23.jpg'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    script: [
      { src: '/libs/tarteaucitron/tarteaucitron.js' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3DCDF9' },
  plugins: [],
  render: {
    resourceHints: false
  },
  vite: {
    plugins: [mdPlugin({
      mode: [Mode.VUE]
    })]
  },
  cookieControl: {
    optional: [
      {
        name: 'Google Analitycs',
        identifier: 'ga',
        description: 'Google GTM is...',
        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-71877009-2',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          })
        },
        declined: () => {
        }
      }
    ]

  }
})

