/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import careerslink from "../../pageobjects/careerslink";
import storiesSublinks from "../../pageobjects/storiesSublinks";
describe("Home page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })
    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check Careers menu link page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertCareersUrl();
        careerslink.assertCareersHeadTxt();
        careerslink.assertCareersImg();
        careerslink.assertCareersSubTitle();
        careerslink.clickReceivesupportwhileyoustudyHereLink();
        careerslink.assertHereComUrl();
        careerslink.assertComSignInBtn();
        careerslink.assertComOrderNowBtn();
        homepage.callBack();
      })

      it("Check Shared Table Program link redirection", () => {
        careerslink.clickcareerslnk();
        careerslink.assertSharedTableProgramLink();
        careerslink.clickSharedTableProgramLink();
        storiesSublinks.assertTheChickfilASharedTableProgramUrl();
        storiesSublinks.assertTheChickfilASharedTableProgramTxt();
        storiesSublinks.assertSharedTableImpactTxt();
      })

      it("Check Donate to Non profit UHC link redirection", () => {
        careerslink.clickcareerslnk();
        careerslink.assertDonateToNonProfitUHCLink();
        careerslink.clickDonateToNonProfitUHCLink();
        storiesSublinks.assertHubofOpportunitiesaimPageUrl();
        storiesSublinks.assertHubofOpportunitiesaimPageSubTitle();
        storiesSublinks.assertHubofOpportunitiesaimParaLink();          
      })

      it("Check the links under Job opportunities near you section", () => {
        careerslink.clickcareerslnk();
        careerslink.assertDevonshireContactTheRestaurantLink();
        careerslink.clickDevonshireContactTheRestaurantLink();       
      })

      it("Check the View Available Opportunities links on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink();
        careerslink.clickViewAvailableOpportunitiesLink();
      
        careerslink.assertViewAvailableOpportunitiesLink1();          
        careerslink.clickViewAvailableOpportunitiesLink1(); 
        homepage.callBack();         

        careerslink.assertViewAvailableOpportunitiesLink2();          
        careerslink.clickViewAvailableOpportunitiesLink2(); 
        homepage.callBack();         

        careerslink.assertViewAvailableOpportunitiesLink3();          
        careerslink.clickViewAvailableOpportunitiesLink3(); 
        homepage.callBack();         

        careerslink.assertViewAvailableOpportunitiesLink4();          
        careerslink.clickViewAvailableOpportunitiesLink4(); 
        homepage.callBack();         

        careerslink.assertViewAvailableOpportunitiesLink5();          
        careerslink.clickViewAvailableOpportunitiesLink5(); 
        homepage.callBack();         
      })



});