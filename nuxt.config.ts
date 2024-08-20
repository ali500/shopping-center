// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr',
      },
      title: 'Shopping Center'
    },
  },
  runtimeConfig: {
    public: {
      baseBackendURL: process.env.BASE_BACKEND_URL || 'https://fakestoreapi.com'
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
