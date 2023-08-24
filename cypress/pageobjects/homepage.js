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
       YoureNotInRegion: () => cy.xpath("//h1[contains(text(),'You are not in a region that supports online order')]"),
       GotoChickFilAcomBtn: () => cy.contains("Go to Chick-fil-A.com"),
       CustomerserviceLnk: () => cy.contains("Customer service"),
       NutritionNAllergensLnk: () => cy.contains("Nutrition & Allergens"),
       FranchisingLnk: () => cy.xpath("//span[contains(text(),'Franchising')]"),
       CorporateCareersLnk: () => cy.contains("Corporate Careers"),
       PressRoomLnk: () => cy.contains("Press Room"),

       Seeyousoon: () => cy.xpath("//p[contains(text(),'See you soon!')]"),
       ProceedBtn: () => cy.xpath("//a[contains(text(),'Proceed')]"),
       CancelBtn: () => cy.xpath("//a[contains(text(),'Cancel')]"),

       TermsNConditionsLnk: () => cy.xpath("//span[contains(text(),'Terms and Conditions')]"),
       PrivacyPolicyLnk: () => cy.xpath("//span[contains(text(),'Privacy Policy')]"),
       LegalTxt: () => cy.xpath("//h1[contains(text(),'Legal')]"),

       CookiePreferenceCenterLnk: () => cy.xpath("//a[contains(text(),'Cookie Preference Center')]"),
       SavePreferencesBtn: () => cy.xpath("//button[contains(text(),'Save Preferences')]"),
       AllowAllBtn: () => cy.xpath("//button[@id='accept-recommended-btn-handler']"),
       GiftCardslLink: () => cy.xpath("//span[contains(text(),'Gift Cards')]"),
       NutritionAllergensHeadTxt: () => cy.xpath("//h1[contains(text(),'Nutrition & Allergens')]"),
       disclaimernutritionTxt: () => cy.xpath("//div[@id='disclaimer-nutrition']"),
       NewRestaurantInmississaugaPageTitle: () => cy.xpath("//h1[contains(text(),'Chick-fil-A announces new restaurant in Mississaug')]"),
       NewRestaurantInmississaugaDonate: () => cy.xpath("//p[contains(text(),'In celebration of this restaurant, Chick-fil-A wil')]"),
       IntroducingMufutiSanusiHeadTxt: () => cy.xpath("//h1[contains(text(),'Introducing Mufuti Sanusi: A passionate leader in ')]"),
       MufutiSanusiembodiesTxt: () => cy.xpath("//p[contains(text(),'Mufuti Sanusi embodies the Mississauga motto of “p')]"),

       PeachbeveragesthroughouttheyearsHeadTxt: () => cy.xpath("//h1[contains(text(),'Peach beverages throughout the years')]"),
       SummerishereandsoarepeachbeveragesTxt: () => cy.xpath("//p[contains(text(),'Summer is here and so are peach beverages')]"),
       CustomerSupportTxt: () => cy.xpath("//h1[contains(text(),'Customer support')]"),
       WereheretohelpTxt: () => cy.xpath("//h1[contains(text(),'Customer support')]"),

       EmploymentopportunitieswithChickfilACanadaHeadTxt: () => cy.xpath("//h1[contains(text(),'Employment opportunities with Chick-fil-A Canada, ')]"),
       ViewavailableopportunitiesBtn: () => cy.xpath("//a[contains(text(),'View available opportunities')]"),
    
       ChickFillAPrivacyPolicy: () => cy.xpath("//h3[contains(text(),'Chick-fil-A Privacy Policy')]"),
       WeMakeUpdatestoThisPrivacyPolicyTxt: () => cy.xpath("//strong[contains(text(),'We Make Updates to This Privacy Policy')]"),

    }

    callBack(){
        cy.go('back');
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
        this.elements.urlAssert().should('include', Cypress.config().orderPageUrl+ 'location');                
    }

    assertYoureNotInRegion(){
        this.elements.YoureNotInRegion().should('be.visible');
    }
    
    assertGotoChickFilAcomBtn(){
        this.elements.GotoChickFilAcomBtn().should('be.visible');
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

    assertNutritionAllergensUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'nutrition-allergens');        
    }

    assertNewRestaurantInmississauga(){
        this.elements.NewRestaurantInmississauga().should('be.visible');
    }

    clickNewRestaurantInmississauga(){
        this.elements.NewRestaurantInmississauga().click();
    }

    NewRestaurantInmississaugaPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-announces-new-restaurant-in-mississauga-to-open-on-august-10');         
    }

    assertNewRestaurantInmississaugaPageTitle(){
        this.elements.NewRestaurantInmississaugaPageTitle().should('be.visible');
    }

    assertNewRestaurantInmississaugaDonate(){
        this.elements.NewRestaurantInmississaugaDonate().should('be.visible');
    }    

    assertNewRestaurantInmississaugaUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-announces-new-restaurant-in-mississauga-to-open-on-august-10');
    }

    assertAPassonateLeader(){
        this.elements.APassonateLeader().should('be.visible');
    }

    clickAPassonateLeader(){
        this.elements.APassonateLeader().click({force: true});        
    }

    assertAPassonateLeaderUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/introducing-mufuti-sanusi-a-passionate-leader-in-business-and-throughout-the-mississauga-community');
    }

    assertPeachbeveragesthroughouttheyears(){
        this.elements.Peachbeveragesthroughouttheyears().should('be.visible');
    }

    assertIntroducingMufutiSanusiHeadTxt(){
        this.elements.IntroducingMufutiSanusiHeadTxt().should('be.visible');
    }

    assertMufutiSanusiembodiesTxt(){
        this.elements.MufutiSanusiembodiesTxt().should('be.visible');
    }

    clickPeachbeveragesthroughouttheyears(){
        this.elements.Peachbeveragesthroughouttheyears().click({force: true});        
    }

    assertPeachbeveragesthroughouttheyearsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/summer-peach-beverages');        
    }

    assertPeachbeveragesthroughouttheyearsHeadTxt(){
        this.elements.PeachbeveragesthroughouttheyearsHeadTxt().should('be.visible');
    }

    assertSummerishereandsoarepeachbeveragesTxt(){
        this.elements.SummerishereandsoarepeachbeveragesTxt().should('be.visible');
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

    assertCustomerserviceLnk(){
        this.elements.CustomerserviceLnk().should('be.visible');
    }

    clickCustomerserviceLnk(){
        this.elements.CustomerserviceLnk().click({force: true});        
    }

    assertCustomerserviceLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'customer-support');        
    }
    
    assertCustomerSupportTxt(){
        this.elements.CustomerSupportTxt().should('be.visible');
    }

    assertWereheretohelpTxt(){
        this.elements.WereheretohelpTxt().should('be.visible');
    }

    assertNutritionNAllergensLnk(){
        this.elements.CustomerserviceLnk().should('be.visible');
    }

    clickNutritionNAllergensLnk(){
        this.elements.NutritionNAllergensLnk().click({force: true});        
    }

    assertNutritionNAllergensLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'nutrition-allergens');       
    }

    assertFranchisingLnk(){
        this.elements.FranchisingLnk().should('be.visible');
    }

    clickFranchisingLnk(){
        this.elements.FranchisingLnk().click({force: true});        
    }

    assertFranchisingLnkDialog(){
        this.elements.Seeyousoon().should('be.visible');              
    }

    assertProceedBtn(){        
        this.elements.ProceedBtn().should('be.visible');        
    }

    closeFranchisingDialog(){
        this.elements.CancelBtn().should('be.visible');
    }

    assertCorporateCareersLnk(){
        this.elements.CorporateCareersLnk().should('be.visible');
    }

    clickCorporateCareersLnk(){
        this.elements.CorporateCareersLnk().click({force: true});        
    }

    assertCorporateCareersLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'employment-opportunities-with-chick-fil-a-canada-ulc');        
    }

    assertEmploymentopportunitieswithChickfilACanadaHeadTxt(){
        this.elements.EmploymentopportunitieswithChickfilACanadaHeadTxt().should('be.visible');
    }

    assertViewavailableopportunitiesBtn(){
        this.elements.ViewavailableopportunitiesBtn().should('be.visible');
    }

    assertPressRoomLnk(){
        this.elements.PressRoomLnk().should('be.visible');
    }

    clickPressRoomLnk(){
        this.elements.PressRoomLnk().click({force: true});        
    }

    assertPressRoomLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news');       
    }

    assertTermsNConditionsLnk(){
        this.elements.TermsNConditionsLnk().should('be.visible');
    }

    clickTermsNConditionsLnk(){
        this.elements.TermsNConditionsLnk().click({force: true});        
    }

    assertTermsNConditionsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'legal#terms_and_conditions');        
    }

    assertLegalTxt(){
        this.elements.LegalTxt().should('be.visible');
    }

    assertGiftCardslLink(){
        this.elements.GiftCardslLink().should('be.visible');
    }
    assertPrivacyPolicyLnk(){
        this.elements.PrivacyPolicyLnk().should('be.visible');
    }

    clickPrivacyPolicyLnk(){
        this.elements.PrivacyPolicyLnk().click({force: true});        
    }

    assertPrivacyPolicyLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'legal#privacy_policy');        
    }

    assertChickFillAPrivacyPolicy(){
        this.elements.ChickFillAPrivacyPolicy().should('be.visible');
    }

    assertWeMakeUpdatestoThisPrivacyPolicyTxt(){
        this.elements.WeMakeUpdatestoThisPrivacyPolicyTxt().should('be.visible');
    }

    assertCookiePreferenceCenterLnk(){
        this.elements.CookiePreferenceCenterLnk().should('be.visible');
    }

    clickCookiePreferenceCenterLnk(){
        this.elements.CookiePreferenceCenterLnk().click({force: true});        
    }

    assertCookiePreferenceCenterLnkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '#ot-sdk-show-settings');        
    }

    assertSavePreferencesBtn(){
        this.elements.SavePreferencesBtn().should('be.visible');
    }

    assertAllowAllBtn(){
        this.elements.AllowAllBtn().should('be.visible');
    }

    assertNutritionAllergensHeadTxt(){
        this.elements.NutritionAllergensHeadTxt().should('be.visible');
    }

    assertdisclaimernutritionTxt(){
        this.elements.disclaimernutritionTxt().should('be.visible');
    }
    
    
}

module.exports = new homePage();
