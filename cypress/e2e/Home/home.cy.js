/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage"
describe('Home page test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify Home page menus', () => {   

    cy.fixture('home').then((data) =>{
    homepage.elements.pageTitle().should('eq', data.homepagetitle);
    homepage.clickLogo();
    homepage.clickmenulnk();
    homepage.clickstorieslnk();
    homepage.clickaboutlnk();
    homepage.clickcareerslink();  
    //test
    
      })
    })
  })