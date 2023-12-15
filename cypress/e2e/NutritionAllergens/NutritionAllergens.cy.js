/// <reference types="cypress"/>
import nutritionAllergens from "../../pageobjects/nutritionAllergens";

describe('nutritionAllergens sub links test', () => {
   
    beforeEach (() => {
      cy.visit('/')
    });

    it("Check the redirection when click on nutritionAllegen link in home page", () => {
      nutritionAllergens.clicknutritionAllergenslnk();
      nutritionAllergens.verifynutritionAllergensRedirect();  
      nutritionAllergens.checknutritionAllergenstxt();
      nutritionAllergens.clickacceptCookies();
      nutritionAllergens.sidenutritionAllergenslnk();
      nutritionAllergens.scrolldown();
      nutritionAllergens.clickEntrees();
      nutritionAllergens.EntreesList();
      nutritionAllergens.clickSalads();
      nutritionAllergens.scrolldown();
      nutritionAllergens.SaladsList();
      nutritionAllergens.clickSides();
      nutritionAllergens.SidesList();
      nutritionAllergens.clickTreat();
      nutritionAllergens.TreatList();
      nutritionAllergens.clickDrinks();
      nutritionAllergens.DrinksList();
      nutritionAllergens.clickDippingSauce();
      nutritionAllergens.DippingSauceList();
      nutritionAllergens.clickDressing();
      nutritionAllergens.DressingList();
      // nutritionAllergens.clickSandwichToppings();
      // nutritionAllergens.SandwichToppingsList();
      // nutritionAllergens.scrolldown();
      // nutritionAllergens.clickBuns();
      // nutritionAllergens.BunsList();
      // nutritionAllergens.clickSaladToppings();
      // nutritionAllergens.SaladToppingsList();
      // nutritionAllergens.scrolldown();
      // nutritionAllergens.clickSoupToppings();
      // nutritionAllergens.scrolldown();
      // nutritionAllergens.SoupToppingsList();
    });
    

})