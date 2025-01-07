const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // set default time out for each test 20000ms
    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 10000,
    specPattern: ['cypress/integration/*.js', 'cypress/e2e/*.js']
  },
});
