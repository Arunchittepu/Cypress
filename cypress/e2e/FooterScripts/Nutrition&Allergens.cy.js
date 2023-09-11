import NutritionNAllergens from "../../pageobjects/Nutrition&Allergens";

describe("Nutrition & Allergens link page test", () => {
      beforeEach(() => {
      cy.visit("/");
      })

      it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check the redirection when clicks on Nutrition & Allergens link", () => {
        NutritionNAllergens.assertNutritionNAllergenslink();
        NutritionNAllergens.clickNutritionNAllergenslink();
      })

});