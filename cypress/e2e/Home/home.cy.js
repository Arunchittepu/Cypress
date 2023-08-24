/// <reference types="cypress"/>
import careerslink from "../../pageobjects/careerslink";
import homepage from "../../pageobjects/homepage";
import menusublinks from "../../pageobjects/menusublinks";
import storieslinks from "../../pageobjects/storiesSublinks";
import aboutlinks from "../../pageobjects/aboutsublinks";
describe("Home page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })
      
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
        homepage.clickmenulnk({force: true});
        menusublinks.assertmenuAvailabilityCallout(); 
        menusublinks.assertAvailabilitymaydifferatdifferentlocations();

        homepage.clickstorieslnk();
        storieslinks.assertStoriesPageUrl();
        storieslinks.assertstoriesSlider(); 
        storieslinks.assertstoriesSlider(); 

        homepage.clickaboutlnk();
        aboutlinks.clickWhoWeAre();
        aboutlinks.assertAboutPageUrl();
        aboutlinks.assertwhoWeAreImg();
        aboutlinks.assertwhoweareheadingtxt();

        homepage.clickcareerslink();
        careerslink.assertCareersUrl();
        careerslink.assertCareersHeadTxt();
        careerslink.assertCareersImg();
      })

    it("Verify Header section of Home page", () => {
        homepage.assertApplytoworkataChickfilArestaurant();
        homepage.assertSeasonalImg();
        homepage.assertBagIcon();
        homepage.assertOrderCarryOutBtn();
        homepage.clickOrderCarryOutBtn();
        homepage.assertOrderUrl();
        //This test is failing because of application error and blank page
        homepage.assertYoureNotInRegion();
        homepage.assertGotoChickFilAcomBtn();
        homepage.callBack();     
      })

    it("Verify Get to know our menu section of Home page", () => {
        homepage.assertGettoknowourmenuTxt();
        homepage.assertExplorethemenuBtn();
        homepage.clickExplorethemenuBtn();
        homepage.assertMenuUrl();
        menusublinks.assertmenuAvailabilityCallout(); 
        menusublinks.assertAvailabilitymaydifferatdifferentlocations();
        homepage.callBack();
      })

    it("Verify Fighting Hunger in Our Communities section of Home page", () => {
        homepage.assertFightingHungerinOurCommunitiesTxt();
        homepage.assertLearnabouttheprogramBtn();
        homepage.clickLearnabouttheprogramBtn();
        homepage.assertLearnAboutProgramUrl();
        storieslinks.assertTheChickfilASharedTableProgramUrl();
        storieslinks.assertSharedTableImpactTxt();
        homepage.callBack();
      })

    it("Verify Nutrition and allergens section of Home page", () => {
        homepage.assertNutritionandallergensTxt();
        homepage.assertSeeTheFactsBtn();
        homepage.clickSeeTheFactsBtn();
        homepage.assertNutritionAllergensUrl();
        homepage.assertNutritionAllergensHeadTxt();
        homepage.assertdisclaimernutritionTxt();
        homepage.callBack();
      })

    it("Verify Related Stories section of Home page", () => {
        homepage.assertNewRestaurantInmississauga();
        homepage.clickNewRestaurantInmississauga();
        homepage.NewRestaurantInmississaugaPageUrl();
        homepage.assertNewRestaurantInmississaugaPageTitle();
        homepage.assertNewRestaurantInmississaugaDonate();
        homepage.callBack();
        homepage.assertAPassonateLeader();  
        homepage.clickAPassonateLeader();
        homepage.assertAPassonateLeaderUrl();
        homepage.assertIntroducingMufutiSanusiHeadTxt();
        homepage.assertMufutiSanusiembodiesTxt();
        homepage.callBack();  
        homepage.assertPeachbeveragesthroughouttheyears();
        homepage.clickPeachbeveragesthroughouttheyears();
        homepage.assertPeachbeveragesthroughouttheyearsUrl();
        homepage.assertPeachbeveragesthroughouttheyearsHeadTxt();
        homepage.assertSummerishereandsoarepeachbeveragesTxt();
        homepage.callBack();
      });  

      it("Test Footer links of Home page", () => {
        homepage.assertCustomerserviceLnk();
        homepage.clickCustomerserviceLnk();     
        homepage.assertCustomerserviceLnkUrl();
        homepage.assertCustomerSupportTxt();
        homepage.assertWereheretohelpTxt();
        homepage.callBack();
        homepage.assertNutritionNAllergensLnk();
        homepage.clickNutritionNAllergensLnk();     
        homepage.assertNutritionNAllergensLnkUrl();
        homepage.assertNutritionAllergensHeadTxt();
        homepage.assertdisclaimernutritionTxt();
        homepage.callBack();
        homepage.assertFranchisingLnk();
        homepage.clickFranchisingLnk();     
        homepage.assertFranchisingLnkDialog();
        homepage.assertFranchisingLnkDialog();
        homepage.assertProceedBtn();
        homepage.closeFranchisingDialog();
        homepage.assertCorporateCareersLnk();            
        homepage.clickCorporateCareersLnk();
        homepage.assertCorporateCareersLnkUrl();
        homepage.assertEmploymentopportunitieswithChickfilACanadaHeadTxt();
        homepage.assertViewavailableopportunitiesBtn(); 
        homepage.callBack();
        homepage.assertPressRoomLnk();
        homepage.clickPressRoomLnk();     
        homepage.assertPressRoomLnkUrl();
        storieslinks.assertNewsTitle();
        storieslinks.assertTheLatestNews();
        homepage.callBack();
      }) 

      it("Test right side links at footer section of Home page", () => {
        homepage.assertTermsNConditionsLnk();
        homepage.clickTermsNConditionsLnk();     
        homepage.assertTermsNConditionsUrl();
        homepage.assertLegalTxt();
        homepage.assertGiftCardslLink();
        homepage.callBack();
        homepage.assertPrivacyPolicyLnk();
        homepage.clickPrivacyPolicyLnk();     
        homepage.assertPrivacyPolicyLnkUrl(); 
        homepage.assertChickFillAPrivacyPolicy();
        homepage.assertWeMakeUpdatestoThisPrivacyPolicyTxt();       
        homepage.callBack();
        homepage.assertCookiePreferenceCenterLnk();
        homepage.clickCookiePreferenceCenterLnk();     
        homepage.assertCookiePreferenceCenterLnkUrl();
        homepage.assertSavePreferencesBtn();
        homepage.assertAllowAllBtn();
        homepage.callBack();

      }) 


  });
