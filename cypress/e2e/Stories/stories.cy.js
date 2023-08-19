/// <reference types="cypress"/>
//import homepage from "../../pageobjects/homepage";
import storieslinks from "../../pageobjects/storiesSublinks"
describe('Stories sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify sub links under Stories', () => {   
    
    cy.fixture('storiessublinks').then((data) =>{
    storieslinks.elements.pageTitle().should('eq', data.homepagetitle);
    storieslinks.clickLogo();
    storieslinks.clickstorieslnk();
    storieslinks.hoverStorieslnk();    
    storieslinks.clickInsideChick_fil_Alnk();
    storieslinks.clickIntheCommunitylink(); 
    storieslinks.clickNewsLink();   
    
    })
  })
})