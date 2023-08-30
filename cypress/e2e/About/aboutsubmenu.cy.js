/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage"
import aboutlinks from "../../pageobjects/aboutsublinks"
describe('About sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
    })  

    it("Verify click About menu link and check its sub menu links", () => {
        aboutlinks.clickaboutlnk();
        aboutlinks.assertAboutPageTitle();
        aboutlinks.assertAboutPageUrl();
        aboutlinks.assertWhoweAreLink();
        aboutlinks.assertGreatFoodLink();
        aboutlinks.assertGivingBackLink();       
    })

    it('Check Who we are page under About menu', () => {   
        aboutlinks.clickaboutlnk();  
        aboutlinks.clickWhoWeAre(); 
        aboutlinks.assertWhoWeArePageUrl();
        aboutlinks.assertwhoWeAreImg();
        aboutlinks.assertwhoweareheadingtxt();
        aboutlinks.assertourHistory();
        aboutlinks.assertwhyWeareclosedOnSunday();
        aboutlinks.assertwhoWeAreImg1();
        aboutlinks.assertreadMoreaboutOurCultureNValue();
        aboutlinks.assertwhoWeAreImg2();
        aboutlinks.assertmoreThanChicken();
        aboutlinks.assertwhoWeAreImg3();
        aboutlinks.assertwhoWeAreImg4();           
    })

    it('Check Great Food link page under About menu', () => {       
        aboutlinks.clickGreatFoodlink();   
        aboutlinks.assertgreatFoodHeadingUrl(); 
        aboutlinks.greatFoodImg(); 
        aboutlinks.assertgreatFoodHeading();
        aboutlinks.assertRealchickenrigorousstandards();
        aboutlinks.assertgreatFoodImg1();
        aboutlinks.assertFoodyoucansmileabout();
        aboutlinks.assertCarefullycraftedrecipes();
        aboutlinks.assertgreatFoodImg2();
        aboutlinks.assertWhatavisitisallabout();
        aboutlinks.assertgreatFoodImg3();
        aboutlinks.assertGettoknowourfoodBtn();
        aboutlinks.assertItsOurPleasureToServeYou();
        aboutlinks.assertOrderCarryOut(); 
        aboutlinks.assertgreatFoodImg4(); 
        aboutlinks.assertgreatFoodImg5();      
    })

    it('Check Giving Back link page under About menu', () => {          
      aboutlinks.clickGivingBackLink();       
    })


})