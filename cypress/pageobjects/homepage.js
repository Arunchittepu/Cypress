class homePage{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       ApplytoworkataChickfilArestaurant: () => cy.xpath("//p[contains(text(),'Apply to work at a Chick-fil-A restaurant')]"),
       seasonalImg: () => cy.get("img[class='desktop-img']"),       
       BagIcon: () => cy.get("img[alt='Bag Icon']"),
       OrderCarryOutBtn: () => cy.xpath("//p[contains(text(),'Order Carry-out')]"),
       GettoknowourmenuTxt: () => cy.xpath("//h4[contains(text(),'Get to know our menu')]"),
       ExplorethemenuBtn: () => cy.xpath("//a[contains(text(),'Explore the menu')]"),
       FightingHungerinOurCommunitiesTxt: () => cy.xpath("//h4[contains(text(),'Fighting Hunger in Our Communities')]"),
       LearnabouttheprogramBtn: () => cy.xpath("//a[contains(text(),'Learn about the program')]"),
       NutritionandallergensTxt: () => cy.xpath("//h4[contains(text(),'Nutrition and allergens')]"),
       SeeTheFactsBtn: () => cy.xpath("//a[contains(text(),'See the facts')]"),
       NewRestaurantInmississauga: () => cy.xpath("//a[contains(text(),'Chick-fil-A announces new restaurant in Mississaug')]"),
       APassonateLeader: () => cy.xpath("//a[contains(text(),'Introducing Mufuti Sanusi: A passionate leader in ')]"),
       Peachbeveragesthroughouttheyears: () => cy.xpath("//a[contains(text(),'Peach beverages throughout the years')]"),

       menulnk: () => cy.contains("Menu"),
       storieslnk: () => cy.contains("Stories"),
       aboutlnk: () => cy.contains("About"),
       careerslink: () => cy.contains("Careers"),

    }

    clickLogo(){
        this.elements.logolink().click({force: true});        
    }

    verifyLogoRedirect(){
        this.elements.urlAssert().should('include', 'https://www.chick-fil-a.ca/');
    }
    assertApplytoworkataChickfilArestaurant(){
        this.elements.ApplytoworkataChickfilArestaurant().should('be.visible');
    }

    assertSeasonalImg(){
        this.elements.seasonalImg().should('be.visible');
    }

    assertBagIcon(){
        this.elements.BagIcon().should('be.visible');
    }
    assertOrderCarryOutBtn(){
        this.elements.OrderCarryOutBtn().should('be.visible');
    }

    assertGettoknowourmenuTxt(){
        this.elements.GettoknowourmenuTxt().should('be.visible');
    }

    assertExplorethemenuBtn(){
        this.elements.ExplorethemenuBtn().should('be.visible');
    }

    assertFightingHungerinOurCommunitiesTxt(){
        this.elements.FightingHungerinOurCommunitiesTxt().should('be.visible');
    }

    assertLearnabouttheprogramBtn(){
        this.elements.LearnabouttheprogramBtn().should('be.visible');
    }

    assertNutritionandallergensTxt(){
        this.elements.NutritionandallergensTxt().should('be.visible');
    }

    assertSeeTheFactsBtn(){
        this.elements.SeeTheFactsBtn().should('be.visible');
    }

    assertNewRestaurantInmississauga(){
        this.elements.NewRestaurantInmississauga().should('be.visible');
    }

    assertAPassonateLeader(){
        this.elements.APassonateLeader().should('be.visible');
    }
    assertPeachbeveragesthroughouttheyears(){
        this.elements.Peachbeveragesthroughouttheyears().should('be.visible');
    }

    clickmenulnk(){
        this.elements.menulnk().click();
    }

    clickstorieslnk(){
        this.elements.storieslnk().click();
    }

    clickaboutlnk(){
        this.elements.aboutlnk().click();
    }
    clickcareerslink(){
        this.elements.careerslink().click();
    }

}

module.exports = new homePage();
