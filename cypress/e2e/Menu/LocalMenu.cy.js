/// <reference types="cypress"/>

import LocalMenu from "../../pageobjects/LocalMenu";
import homepage from "../../pageobjects/homepage";

describe('National Menu sub links test', () => {
   
      beforeEach(() => {        
        cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu"); 
      });

      it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      });
      
           
      it('Verify Local Entrees Menu products page', () => {             
          LocalMenu.testLocalEntreesProductsdetails();
      });
      
      it('Verify Local Beverages Sub Menu page', () => {       
        LocalMenu.testLocalBeveragesProductsdetails();
      });
          
      it('Verify Local Salads Sub Menu page', () => {       
        LocalMenu.testLocalSaladsProductsdetails(); 
      });

      it('Verify Local Sides Sub Menu page', () => {       
        LocalMenu.testLocalSidesProductsdetails();
      });

      it("Verify Local Kid's Meal Sub Menu page", () => {               
        LocalMenu.testLocalKidsMealsProductsdetails(); 
      });

      it('Verify Local Treats Sub Menu page', () => { 
        cy.visit(Cypress.config().baseUrl + "locations/on/devonshire/menu");
        LocalMenu.testLocalTreatsProductsdetails();
      });   

      it('Verify Local Dipping Sauces Dressings Sub Menu page', () => { 
        LocalMenu.testLocalDippingSaucesandDressingsProductsdetails();
      });

      it('Verify Local Catering Sub Menu page', () => { 
        LocalMenu.testLocalCateringProductsdetails();
      });

      it('Verify Local Catering Trays Sub Menu page', () => { 
        LocalMenu.testLocalCateringTraysProductsdetails();
      });

      it('Verify Local Catering Entrees Sub Menu page', () => { 
        LocalMenu.testLocalCateringEntreesProductsdetails();
      });

      it('Verify Local Catering Salad and wrap Sub Menu page', () => { 
        LocalMenu.testLocalCateringSaladwrapProductsdetails();
      });

      it('Verify Local Catering Sides and Treats Sub Menu page', () => { 
        LocalMenu.testLocalCateringSidesTreatsProductsdetails();
      });

      it('Verify Local Catering Beverages Sub Menu page', () => { 
        LocalMenu.testLocalCateringBeveragesProductsdetails();
      });

      it('Verify Local Catering Packaged Meals Sub Menu page', () => { 
        LocalMenu.testLocalCateringPackagedMealsProductsdetails();
      });

  });