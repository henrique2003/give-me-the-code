import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1500,
    viewportHeight: 900
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    },
    viewportWidth: 1500,
    viewportHeight: 900
  }
})
