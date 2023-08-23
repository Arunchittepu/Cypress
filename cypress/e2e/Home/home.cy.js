/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
describe("Home page test", () => {
    beforeEach(() => {
      cy.visit("/");
      });

    it("Verify Home page Title", () => {
      cy.fixture("home").then((data) => {
      homepage.elements.pageTitle().should("eq", data.homepagetitle);  } )         
    });

    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

    it("Check Find a Restaurant links", () => {
        homepage.assertFindaRestaurantlink();
        homepage.clickFindaRestaurantlink();
        homepage.assertFindaRestaurantDialog();
        homepage.assertUseMyLocationLink();
        homepage.assertSearchBtn();
        homepage.closeFindaRestaurantDialog();
      })

    it("Verify Main menu links", () => {
        homepage.clickmenulnk();
        homepage.clickstorieslnk();
        homepage.clickaboutlnk();
        homepage.clickcareerslink();
      })

    it("Verify Header section of Home page", () => {
        homepage.assertApplytoworkataChickfilArestaurant();
        homepage.assertSeasonalImg();
        homepage.assertBagIcon();
        homepage.assertOrderCarryOutBtn();
        homepage.clickOrderCarryOutBtn();
        homepage.assertOrderUrl();        
      });

    it("Verify Get to know our menu section of Home page", () => {
        homepage.assertGettoknowourmenuTxt();
        homepage.assertExplorethemenuBtn();
        homepage.clickExplorethemenuBtn();
        homepage.assertMenuUrl();
      });

    it("Verify Fighting Hunger in Our Communities section of Home page", () => {
        homepage.assertFightingHungerinOurCommunitiesTxt();
        homepage.assertLearnabouttheprogramBtn();
        homepage.clickLearnabouttheprogramBtn();
        homepage.assertLearnAboutProgramUrl();
      });

    it("Verify Nutrition and allergens section of Home page", () => {
        homepage.assertNutritionandallergensTxt();
        homepage.assertSeeTheFactsBtn();
        homepage.clickSeeTheFactsBtn();
        homepage.assertSeeTheFactsUrl();
      });

    it("Verify Related Stories section of Home page", () => {
        homepage.assertNewRestaurantInmississauga();
        homepage.assertAPassonateLeader();     
        homepage.assertPeachbeveragesthroughouttheyears();
      });  

      it("Test Footer links of Home page", () => {
        homepage.assertCustomerserviceLnk();
        homepage.clickCustomerserviceLnk();     
        homepage.assertCustomerserviceLnkUrl();
        homepage.assertNutritionNAllergensLnk();
        homepage.clickNutritionNAllergensLnk();     
        homepage.assertNutritionNAllergensLnkUrl();
        homepage.assertFranchisingLnk();
        homepage.clickFranchisingLnk();     
        homepage.assertFranchisingLnkDialog();
        homepage.closeFranchisingDialog();
        homepage.assertCorporateCareersLnk();     
        homepage.clickCorporateCareersLnk();
        homepage.assertCorporateCareersLnkUrl();
        homepage.assertPressRoomLnk();
        homepage.clickPressRoomLnk();     
        homepage.assertPressRoomLnkUrl();
      });  

      it("Test right side links at footer section of Home page", () => {
        homepage.assertTermsNConditionsLnk();
        homepage.clickTermsNConditionsLnk();     
        homepage.assertTermsNConditionsUrl();
        homepage.assertPrivacyPolicyLnk();
        homepage.clickPrivacyPolicyLnk();     
        homepage.assertPrivacyPolicyLnkUrl();
        homepage.assertCookiePreferenceCenterLnk();
        homepage.clickCookiePreferenceCenterLnk();     
        homepage.assertCookiePreferenceCenterLnkUrl();

      }); 


  });
