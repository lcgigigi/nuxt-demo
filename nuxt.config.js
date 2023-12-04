// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/main.css"
  ],
  modules: [
    'nuxt-windicss',
  ],

  devtools: { enabled: true }
})
