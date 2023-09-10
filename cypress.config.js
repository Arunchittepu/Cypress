const { defineConfig } = require("cypress");


module.exports = defineConfig({

   "chromeWebSecurity": false,
   "experimentalSessionAndrigin": true,
    projectId: 'ib9u8h',
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    failOnStatusCode: false,
    redirectionLimit: 100,
  e2e: {
    baseUrl: 'https://www.chick-fil-a.ca/',  
    //baseUrl: 'https://www.chick-fil-astage.ca/', 
    comUrl: 'https://www.chick-fil-a.com/',
    orderPageUrl: 'https://order.chick-fil-a.ca/',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,    
    setupNodeEvents(on, config) {      
    },
  },
});
