/// <reference types="cypress"/>

import LocalMenu from "../../pageobjects/LocalMenu";
import homepage from "../../pageobjects/homepage";

describe('National Menu sub links test', () => {
   
      beforeEach(() => {
        cy.visit('/')
      });

      it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      });

      it("Check Find a Restaurant links", () => {
        homepage.assertFindaRestaurantlink();
        homepage.clickFindaRestaurantlink();
        homepage.assertFindaRestaurantDialog();
        homepage.assertUseMyLocationLink();
        homepage.assertSearchBtn();
        cy.xpath("//input[@name='locationsearch']").eq(0).type('Windsor');
        cy.xpath("//input[@value='Search']").eq(0).click();
        cy.wait(30);
        cy.get('#locatoriframe').then(function($iframe){

          let iframebody = $iframe.contents().find('body')
          cy.wrap(iframebody)
          cy.get("button[class='Teaser-cta js-openModal']").click({force: true});
        } )        
    
        cy.xpath("//a[@id='LocationDetail-Menu']").click();
        cy.xpath("(//a[contains(@href, '#entrees')])[2]").click();

      })
           
    it('Verify Local Entrees Menu products page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");       
        LocalMenu.testLocalEntreesProductsdetails();
    });
    
        
    it('Verify Local Salads Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");  
      LocalMenu.testLocalSaladsProductsdetails(); 
    });

    it('Verify Local Sides Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalSidesProductsdetails();
    });

    it("Verify Local Kid's Meal Sub Menu page", () => {         
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalKidsMealsProductsdetails(); 
    });

    it('Verify Local Treats Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalTreatsProductsdetails();
    });

    it('Verify Local Beverages Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalBeveragesProductsdetails();
    });

    it('Verify Local Dipping Sauces Dressings Sub Menu page', () => {       
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalDippingSaucesandDressingsProductsdetails();
    });

    it('Verify Local Catering Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringProductsdetails();
    });

    it('Verify Local Catering Trays Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringTraysProductsdetails();
    });

    it('Verify Local Catering Entrees Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringEntreesProductsdetails();
    });

    it('Verify Local Catering Salad and wrap Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringSaladwrapProductsdetails();
    });

    it('Verify Local Catering Sides and Treats Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringSidesTreatsProductsdetails();
    });

    it('Verify Local Catering Beverages Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringBeveragesProductsdetails();
    });

    it('Verify Local Catering Packaged Meals Sub Menu page', () => { 
      cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
      LocalMenu.testLocalCateringPackagedMealsProductsdetails();
    });

  });