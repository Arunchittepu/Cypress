/// <reference types="cypress"/>

import aboutlinks from "../../pageobjects/aboutsublinks"
describe('About sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify sub links under About', () => {   
    
    cy.fixture('storiessublinks').then((data) =>{
    aboutlinks.elements.pageTitle().should('eq', data.homepagetitle);
    aboutlinks.clickLogo();
    aboutlinks.clickaboutlnk();
    aboutlinks.hoverAboutlink();    
    aboutlinks.clickWhoWeAre();
    aboutlinks.clickGreatFoodlink(); 
    aboutlinks.clickGivingBackLink();   
    
    })
  })
})