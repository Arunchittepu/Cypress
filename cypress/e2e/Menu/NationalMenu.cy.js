/// <reference types="cypress"/>

import NationalMenu from "../../pageobjects/NationalMenu";
import homepage from "../../pageobjects/homepage";

describe('National Menu sub links test', () => {
   
    beforeEach(() => {
      cy.visit('/')
    });

    it("Check the redirection when click on Logo link", () => {
      homepage.clickLogo();
      homepage.verifyLogoRedirect();
    });

    it('Verify Page title of National Menu page', () => {       
      cy.fixture('NationalMenu').then((data) =>{
        NationalMenu.elements.pageTitle().should('eq', data.homepagetitle1);        
      });
    });

      it('Verify sub menus link under National menu', () =>{
        NationalMenu.hoverNationalmenulnk(); 
        NationalMenu.assertEntréeslnk(); 
        NationalMenu.assertSaladslink(); 
        NationalMenu.assertSideslink(); 
        NationalMenu.assertKidsMeallink(); 
        NationalMenu.assertTreatslink(); 
        NationalMenu.assertBeverageslink(); 
        NationalMenu.assertDippingSaucesDressingslink();
        NationalMenu.assertCateringlink();
      })

    it('Verify National Menu page', () => {        
        NationalMenu.testNationalProductsdetails();
    });
    
    it('Verify Entrées Sub Menu page', () => { 
        NationalMenu.testEntréesProductsdetails();
    });
    
    it('Verify Salads Sub Menu page', () => { 
        NationalMenu.testSaladsProductsdetails(); 
    });

    it('Verify Sides Sub Menu page', () => { 
        NationalMenu.testSidesProductsdetails();
    });

    it("Verify Kid's Meal Sub Menu page", () => {         
        NationalMenu.testSidesProductsdetails(); 
    });

    it('Verify Treats Sub Menu page', () => { 
        NationalMenu.testTreatsProductsdetails();
    });

    it('Verify Beverages Sub Menu page', () => { 
        NationalMenu.testBeveragesProductsdetails();
    });

    it('Verify Dipping Sauces Dressings Sub Menu page', () => {       
        NationalMenu.testDippingSaucesandDressingsProductsdetails();
    });

    it('Verify Catering Sub Menu page', () => { 
        NationalMenu.testCateringProductsdetails();
    });
  });