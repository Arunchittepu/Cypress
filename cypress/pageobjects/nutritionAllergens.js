class nutritionAllergens{

    elements = {
        
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
        nutritionAllergenslink: () => cy.xpath("//span[contains(text(),'Nutrition & Allergens')]"),
        nutritionAllergenstext: () => cy.xpath("//h1[contains(text(),'Nutrition & Allergens')]"),
        acceptCookies: () => cy.get('#onetrust-accept-btn-handler'),
        sidenutritionlink: () => cy.xpath("//label[contains(text(),'Nutrition')]"),
        NutritionEntrees: () => cy.xpath("//a[@data-id='MOBILE_ENTREES']"),
        EntreesTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionSalads: () => cy.get('[data-id="MOBILE_SALADS"]'),
        SaladsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionSides: () => cy.get('[data-id="MOBILE_SIDES"]'),
        SidesTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionTreat: () => cy.get('[data-id="MOBILE_TREATS"]'),
        TreatsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionDrinks: () => cy.get('[data-id="MOBILE_BEVERAGES"]'),
        DrinksTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionDippingSauce: () => cy.get('[data-id="SAUCES_SUBMENU"]'),
        DippingSauceTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionDressing: () => cy.get('[data-id="DRESSINGS_SUBMENU"]'),
        DressingTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionSandwichToppings: () => cy.get('[data-id="SANDWICH_TOPPINGS"]'),
        SandwichToppingsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionBuns: () => cy.xpath("//a[@data-component='clickData']"),
        BunsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionSaladToppings: () => cy.get('[data-id="SALAD_TOPPINGS"]'),
        SaladToppingsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table'),
        NutritionSoupToppings: () => cy.get('[data-id="SOUP_TOPPINGS"]'),
        SoupToppingsTotalList: () => cy.get('.menu-list-nutriAllerg.nutrients-table')
    }

        clicknutritionAllergenslnk(){
            this.elements.nutritionAllergenslink().click({force: true});
        }
        verifynutritionAllergensRedirect(){
            this.elements.urlAssert().should('contains','/nutrition-allergens');
        }
        checknutritionAllergenstxt(){
            this.elements.nutritionAllergenstext().should('be.visible');
        }
        scrolldown(){
            cy.scrollTo(0,500);
        }
        clickacceptCookies(){
            this.elements.acceptCookies().click();
        }
        sidenutritionAllergenslnk(){
            this.elements.sidenutritionlink().should('be.visible').click();
        }
        clickEntrees(){
            this.elements.NutritionEntrees().should('be.visible').click({force: true});
        }
        EntreesList(){
            this.elements.EntreesTotalList().eq(0).should('be.visible');
        }
        clickSalads(){
            this.elements.NutritionSalads().should('be.visible').click();
        }
        SaladsList(){
            this.elements.SaladsTotalList().eq(1).should('be.visible');
        }
        clickSides(){
            this.elements.NutritionSides().should('be.visible').click();
        }
        SidesList(){
            this.elements.SidesTotalList().eq(2).should('be.visible');
        }
        clickTreat(){
            this.elements.NutritionTreat().should('be.visible').click();
        }
        TreatList(){
            this.elements.TreatsTotalList().eq(3).should('be.visible');
        }
        clickDrinks(){
            this.elements.NutritionDrinks().should('be.visible').click();
        }
        DrinksList(){
            this.elements.DrinksTotalList().eq(4).should('be.visible');
        }
        clickDippingSauce(){
            this.elements.NutritionDippingSauce().should('be.visible').click();
        }
        DippingSauceList(){
            this.elements.DippingSauceTotalList().eq(5).should('be.visible');
        }
        clickDressing(){
            this.elements.NutritionDressing().should('be.visible').click();
        }
        DressingList(){
            this.elements.DressingTotalList().eq(6).should('be.visible');
        }
        clickSandwichToppings(){
            this.elements.NutritionSandwichToppings().should('be.visible').click();
        }
        SandwichToppingsList(){
            this.elements.SandwichToppingsTotalList().eq(7).should('be.visible');
        }
        clickBuns(){
            this.elements.NutritionBuns().eq(9).should('be.visible').click();
        }
        BunsList(){
            this.elements.BunsTotalList().eq(8).should('be.visible');
        }
        clickSaladToppings(){
            this.elements.NutritionSaladToppings().should('be.visible').click();
        }
        SaladToppingsList(){
            this.elements.SaladToppingsTotalList().eq(9).should('be.visible');
        }
        
        clickSoupToppings(){
            this.elements.NutritionSoupToppings().should('be.visible').click();
        }
        SoupToppingsList(){
            this.elements.SoupToppingsTotalList().eq(10).should('be.visible');
        }    
}
module.exports = new nutritionAllergens();
