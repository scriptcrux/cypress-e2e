const { defineConfig } = require('cypress');

export default defineConfig({
  e2e: {
    // baseUrl: 'https://example.cypress.io',
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
