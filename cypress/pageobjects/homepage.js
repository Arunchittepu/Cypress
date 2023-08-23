class homePage{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       ApplytoworkataChickfilArestaurant: () => cy.xpath("//p[contains(text(),'Apply to work at a Chick-fil-A restaurant')]"),
       findARestaurant: () => cy.xpath("//button[contains(text(), 'Find a restaurant')]"),
       findARestaurantHeading: () => cy.xpath("//h2[contains(text(), 'Find a Restaurant')]"),
       UseMyLocationLink: () => cy.xpath("//a[contains(text(), 'Use my location')]"),
       SearchBtn: () => cy.get("a[class='btn-round']"),
       closeFindaRestaurantDialog: () => cy.get("button[class='mfp-close']"),
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
        this.elements.urlAssert().should('include', Cypress.config().baseUrl);
    }

    assertFindaRestaurantlink(){
        this.elements.findARestaurant().should('be.visible');
    }

    clickFindaRestaurantlink(){
        this.elements.findARestaurant().eq(0).click();        
    }

    assertFindaRestaurantDialog(){
        this.elements.findARestaurantHeading().should('be.visible');
    }

    assertUseMyLocationLink(){
        this.elements.UseMyLocationLink().should('be.visible');
    }

    assertSearchBtn(){
        this.elements.SearchBtn().should('be.not.visible');
    }

    closeFindaRestaurantDialog(){
        this.elements.closeFindaRestaurantDialog().eq(0).click();
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

    clickOrderCarryOutBtn(){
        this.elements.OrderCarryOutBtn().click({force: true});        
    }

    assertOrderUrl(){
        this.elements.urlAssert().should('include', 'https://order.chick-fil-a.ca/location');
        cy.go('back');
    }

    assertGettoknowourmenuTxt(){
        this.elements.GettoknowourmenuTxt().should('be.visible');
    }

    assertExplorethemenuBtn(){
        this.elements.ExplorethemenuBtn().should('be.visible');
    }

    clickExplorethemenuBtn(){
        this.elements.ExplorethemenuBtn().click();
    }

    assertMenuUrl(){
        this.elements.urlAssert().should('include', '/menu');
        cy.go('back');
    }

    assertFightingHungerinOurCommunitiesTxt(){
        this.elements.FightingHungerinOurCommunitiesTxt().should('be.visible');
    }

    assertLearnabouttheprogramBtn(){
        this.elements.LearnabouttheprogramBtn().should('be.visible');
    }

    clickLearnabouttheprogramBtn(){
        this.elements.LearnabouttheprogramBtn().click({force: true});        
    }

    assertLearnAboutProgramUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl +'stories/in-the-community/the-chick-fil-a-shared-table-program');
        cy.go('back');
    }

    assertNutritionandallergensTxt(){
        this.elements.NutritionandallergensTxt().should('be.visible');
    }

    assertSeeTheFactsBtn(){
        this.elements.SeeTheFactsBtn().should('be.visible');
    }

    clickSeeTheFactsBtn(){
        this.elements.SeeTheFactsBtn().click({force: true});        
    }

    assertSeeTheFactsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'nutrition-allergens');
        cy.go('back');
    }

    assertNewRestaurantInmississauga(){
        this.elements.NewRestaurantInmississauga().should('be.visible');
    }

    clickNewRestaurantInmississauga(){
        this.elements.NewRestaurantInmississauga().click({force: true});        
    }

    assertNewRestaurantInmississaugaUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-announces-new-restaurant-in-mississauga-to-open-on-august-10');
        cy.go('back');
    }

    assertAPassonateLeader(){
        this.elements.APassonateLeader().should('be.visible');
    }

    clickAPassonateLeader(){
        this.elements.APassonateLeader().click({force: true});        
    }

    assertAPassonateLeaderUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/introducing-mufuti-sanusi-a-passionate-leader-in-business-and-throughout-the-mississauga-community');
        cy.go('back');
    }

    assertPeachbeveragesthroughouttheyears(){
        this.elements.Peachbeveragesthroughouttheyears().should('be.visible');
    }

    clickPeachbeveragesthroughouttheyears(){
        this.elements.Peachbeveragesthroughouttheyears().click({force: true});        
    }

    assertPeachbeveragesthroughouttheyearsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/summer-peach-beverages');
        cy.go('back');
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
