class NutritionNAllergens{

    elements = {

        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
        NutritionNAllergenslink: () => cy.xpath("//span[contains(text(),'Nutrition & Allergens')]"),

    }

    assertNutritionNAllergenslink(){
        this.elements.NutritionNAllergenslink().should('be.visible');
    }

    clickNutritionNAllergenslink(){
        this.elements.NutritionNAllergenslink().click();
    }


}
module.exports = new NutritionNAllergens();

