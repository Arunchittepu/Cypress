/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import careerslink from "../../pageobjects/careerslink";
import storieslinks from "../../pageobjects/storiesSublinks";
describe("Careers page test", () => {
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
      })

      it("Check Shared Table Program link redirection", () => {
        careerslink.clickcareerslnk();
        careerslink.assertSharedTableProgramLink();
        careerslink.clickSharedTableProgramLink();
        storieslinks.assertTheChickfilASharedTableProgramUrl();
        storieslinks.assertTheChickfilASharedTableProgramTxt();
        storieslinks.assertSharedTableImpactTxt();
        storieslinks.assertTheChickfilASharedTableProgramPageTitle();
        storieslinks.assertTheChickfilASharedTableProgramPageParaHead(); 
        storieslinks.assertSharedTableCapImg();
        storieslinks.assertSharedTableWorkImg();
        storieslinks.assertSecondHarvestLink();
        storieslinks.assertARestaurantsTakePartInSharedTableLink();
        storieslinks.assertPersoncarryingaredtrayofsaladsincontainersImg();
      })

      it("Check Donate to Non profit UHC link redirection", () => {
        careerslink.clickcareerslnk();
        careerslink.assertDonateToNonProfitUHCLink();
        careerslink.clickDonateToNonProfitUHCLink();
        storieslinks.assertHubofOpportunitiesaimPageUrl();
        storieslinks.assertHubofOpportunitiesaimPageSubTitle();
        storieslinks.assertHubofOpportunitiesaimParaLink(); 
        storieslinks.assertHubofOpportunitiesaimCapImg();
        storieslinks.assertUHCHubofOpportunitiesLink();
        storieslinks.assertChickFilACommitmentLink();         
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
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
        
      })

      it("Check the View Available Opportunities links 1 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink1();          
        careerslink.clickViewAvailableOpportunitiesLink1(); 
        careerslink.assertcfaqueenspadinaUrl();
        careerslink.assertJobsColumn();
        careerslink.assertEmployeementTypeColumn();
      })

      it("Check the View Available Opportunities links 2 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink2();          
        careerslink.clickViewAvailableOpportunitiesLink2(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
      })

      it("Check the View Available Opportunities links 3 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink3();          
        careerslink.clickViewAvailableOpportunitiesLink3(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
      })

      it("Check the View Available Opportunities links 4 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink4();          
        careerslink.clickViewAvailableOpportunitiesLink4(); 
        careerslink.assertFountainUrl();
        careerslink.assertFountainHomeLink();
        careerslink.assertFountainHelpLink();
      })

      it("Check the View Available Opportunities links 5 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink5();          
        careerslink.clickViewAvailableOpportunitiesLink5(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
      })

      it("Check the View Available Opportunities links 6 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink6();          
        careerslink.clickViewAvailableOpportunitiesLink6(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
      })

      it("Check the View Available Opportunities links 7 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink7();          
        careerslink.clickViewAvailableOpportunitiesLink7(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();
      })

      it("Check the View Available Opportunities links 8 on Careers page", () => {
        careerslink.clickcareerslnk();
        careerslink.assertViewAvailableOpportunitiesLink8();          
        careerslink.clickViewAvailableOpportunitiesLink8(); 
        careerslink.assertHigherMeUrl();
        careerslink.assertHigherMeSIgnInBtn();
        careerslink.assertHigherMeSIgnInBtn();       
      })



});