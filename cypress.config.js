const { defineConfig } = require("cypress");


module.exports = defineConfig({
    "chromeWebSecurity": false,
    "experimentalSessionAndrigin": true,
  e2e: {
    baseUrl: 'https://www.chick-fil-a.ca/',  
    orderPageUrl: 'https://order.chick-fil-a.ca/',
    
    //baseUrl: 'staging'  
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
