// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'peterwilmshurst',
      repo: 'nuxt-studio',
      branch: 'main'
    }
  },
  ssr: true,
})