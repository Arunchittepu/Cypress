const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'ib9u8h',
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  failOnStatusCode: false,
  e2e: {
    baseUrl: 'https://www.chick-fil-a.ca/',  
    //baseUrl: 'https://www.chick-fil-astage.ca/', 
    comUrl: 'https://www.chick-fil-a.com/',
    orderPageUrl: 'https://order.chick-fil-a.ca/',
    stageUrl: 'https://www.chick-fil-astage.ca/',  
    
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    
    setupNodeEvents(on, config) {      
    },
  },
});
