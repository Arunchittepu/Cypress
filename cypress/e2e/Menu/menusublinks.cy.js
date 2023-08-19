/// <reference types="cypress"/>
//import homepage from "../../pageobjects/homepage";
import menusublinks from "../../pageobjects/menusublinks"
describe('Menu sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify sub links under Menu', () => {   
    
    cy.fixture('menusublinks').then((data) =>{
    menusublinks.elements.pageTitle().should('eq', data.homepagetitle1);
    menusublinks.clickLogo();
    menusublinks.hovermenulnk();    
    menusublinks.clickEntréeslnk();
    menusublinks.hovermenulnk(); 
    menusublinks.clickSaladslink();   
    
    })
  })
})