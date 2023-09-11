
/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage"
import aboutlinks from "../../pageobjects/aboutsublinks"
import storiesSublinks from "../../pageobjects/storiesSublinks";
describe('About sub links test', () => {
   
    beforeEach(() => {
      cy.visit('/')
    });

    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
    })  

    it("Verify click About menu link and check its sub menu links", () => {
        aboutlinks.hoverAboutlink();
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

    it('Check Read More about our culture and Value button', () =>{
      aboutlinks.clickaboutlnk();  
      aboutlinks.clickWhoWeAre(); 
      aboutlinks.clickreadMoreaboutOurCultureNValue();
      aboutlinks.assertAboutChickfilAWhoweareUrl();
      aboutlinks.assertAboutChickfilAWhoweareTitle();
      aboutlinks.assertAboutChickfilAWhoweareSubTitle();
      aboutlinks.assertAboutWhoWeAreCaptionImg();
      aboutlinks.assertRemarkableFutureScholarship();
    })

    it('Check Read More about our culture and Value button', () =>{
      aboutlinks.clickaboutlnk();  
      aboutlinks.clickWhoWeAre(); 
      aboutlinks.assertReadHowCanadaOperatorsareGivinBackBtn();
      aboutlinks.clickReadHowCanadaOperatorsareGivinBackBtn();
      aboutlinks.assertHowChickfilACanadaisgivingbacktolocalcommunitiesUrl();
      aboutlinks.assertHowChickfilACanadaisgivingbacktolocalcommunitiesTitle();
      aboutlinks.assertHowChickfilACanadaisgivingbacktolocalcommunitiesSubTitle();
    })


    it('Check Great Food link page under About menu', () => {              
        aboutlinks.clickGreatFoodlink();   
        aboutlinks.assertgreatFoodHeadingUrl(); 
        aboutlinks.assertgreatFoodImg(); 
        aboutlinks.assertgreatFoodHeading();
      })
       
      
    it('Check Real Chicken Rigorous standards section at Great Food link page', () => {             
        aboutlinks.clickGreatFoodlink();  
        aboutlinks.assertRealchickenrigorousstandards();
        aboutlinks.assertgreatFoodImg1();
      })
      
    it('Check Food you can smile about section at Great Food link page', () => {            
        aboutlinks.clickGreatFoodlink();  
        aboutlinks.assertFoodyoucansmileabout();
        aboutlinks.assertCarefullycraftedrecipes();
        aboutlinks.assertgreatFoodImg2();
      })
      
    it('Check What is visit All About section', () => {              
        aboutlinks.clickGreatFoodlink();
        aboutlinks.assertWhatavisitisallabout();
        aboutlinks.assertgreatFoodImg3();
        aboutlinks.assertGettoknowourfoodBtn();
      })

      it('Check Its Our Pleasure to Serve you section', () => {               
          aboutlinks.clickGreatFoodlink();
          aboutlinks.assertItsOurPleasureToServeYou();
          aboutlinks.assertOrderCarryOut(); 
          aboutlinks.assertgreatFoodImg4(); 
          aboutlinks.assertgreatFoodImg5();      
      })

      it('Check Get to Know our food button', () => {               
        aboutlinks.clickGreatFoodlink();
        aboutlinks.assertGettoknowourfoodBtn();
        aboutlinks.clickGettoknowourfoodBtn(); 
        storiesSublinks.assertallowustointroduceourselvesUrl(); 
        storiesSublinks.assertallowustointroduceourselvesTitle();
        storiesSublinks.assertallowustointroduceourselvesSubTitle(); 
        storieslinks.assertCaptionImg();
        storieslinks.assertChickenSandwichImg();
        storieslinks.assertNuggetsImg();     
      })

      it('Check Order CarryOut button', () => {               
        aboutlinks.clickGreatFoodlink();
        aboutlinks.assertOrderCarryOut();
        aboutlinks.clickOrderCarryOut(); 
        aboutlinks.assertOrderCarryOutUrl();               
      })


    it('Check Giving Back link page under About menu', () => {                 
        aboutlinks.clickGivingBackLink();      
        aboutlinks.assertGivingBackURL();
        aboutlinks.assertGivingBackImg();
        aboutlinks.assertGivingBackHead();
    })

    it('Check Caring for others through our food section at Giving Back page', () => {       
        aboutlinks.clickGivingBackLink();  
        aboutlinks.assertCaringforothersthroughourfood();
        aboutlinks.assertGivingBackImg1();
    })

    it('Check Caring for others through our Planet section at Giving Back page', () => {      
        aboutlinks.clickGivingBackLink();
        aboutlinks.assertChickfilASharedTable();
        aboutlinks.assertCaringforourplanet();
        aboutlinks.assertGivingBackImg2();
        
    })

    it('Check View our 2022 Impact Report page', () => {            
          aboutlinks.clickGivingBackLink();    
          aboutlinks.assertViewour2022ImpactReport();
          aboutlinks.clickViewour2022ImpactReport();
          aboutlinks.assertGlobalImpactReportTitle();
          aboutlinks.assertGlobalImpactReportSubTitle();
    })

    it('Check Caring for people & Caring for our communities at Giving Back page', () => {         
        aboutlinks.clickGivingBackLink();
        aboutlinks.assertCaringforpeople();
        aboutlinks.assertCaringforourcommunities();
        aboutlinks.assertGivingBackImg5();
    })

    it('Check Read our Global Impact Report section at Giving Back page', () => { 
       
        aboutlinks.clickGivingBackLink();  
        aboutlinks.assertReadourGlobalImpactReport();        
        aboutlinks.assertGivingBackImg2();
        aboutlinks.assertGivingBackImg3();
        aboutlinks.assertGivingBackImg4();       

    })

    it('Check View Report button page', () => {
      aboutlinks.hoverAboutlink();   
      aboutlinks.clickGivingBackLink();    
      aboutlinks.assertViewreportBtn();  
      aboutlinks.clickViewreportBtn();  
      aboutlinks.assertGlobalImpactReportURL();
      aboutlinks.assertGlobalImpactReportTitle();
      aboutlinks.assertGlobalImpactReportSubTitle();
})


})