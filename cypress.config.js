const { defineConfig } = require("cypress");


module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.chick-fil-a.ca/',  
    orderPageUrl: 'https://order.chick-fil-a.ca/',
    //baseUrl: 'staging'  
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
