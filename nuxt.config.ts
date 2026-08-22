import yaml from '@rollup/plugin-yaml'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  vite: {
    plugins: [
      yaml()
    ]
  },

  css: ['~/assets/main.css'],

  colorMode: {
    preference: 'dark'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  icon: {
    clientBundle: {
      scan: true
    },
    serverBundle: {
      collections: ['lucide', 'simple-icons']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
