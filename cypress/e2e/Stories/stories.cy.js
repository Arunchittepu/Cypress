/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import storieslinks from "../../pageobjects/storiesSublinks"
describe('Stories sub links test', () => {
   
    beforeEach(() => {
      cy.visit('/')
    });

    it("Check the redirection when click on Logo link", () => {
      homepage.clickLogo();
      homepage.verifyLogoRedirect();
    })

    it("Verify Stories page Title", () => {
        cy.fixture("storiessublinks").then((data) => {
        storieslinks.elements.pageTitle().should('eq', data.homepagetitle);        
      });
    });


  it('Verify sub menus links under Stories', () => {    
       storieslinks.hoverStorieslnk(); 
       storieslinks.assertInsideChick_Fil_A_link(); 
       storieslinks.assertIntheCommunityLink(); 
       storieslinks.assertNewsLink();  
  });
  
  it('Verify Stories page', () => {   
        storieslinks.clickstorieslnk();
        storieslinks.assertStoriesPageUrl();
        storieslinks.assertstoriesSlider(); 
        storieslinks.assertwhichChickFilASauceImg();         
        storieslinks.assertwhichChickFilASauceTxtLnk(); 
        storieslinks.asserttheCoopSection(); 
        storieslinks.asserttheLittleThingsSection(); 
        storieslinks.assertMentorshipSection(); 
        storieslinks.assertletsBeFriend();     
  });
  it('Verify Stories page', () => {   
        storieslinks.clickstorieslnk();
        storieslinks.assertStoriesPageUrl();
        storieslinks.assertstoriesSlider(); 
        storieslinks.assertwhichChickFilASauceImg();         
        storieslinks.assertwhichChickFilASauceTxtLnk(); 
        storieslinks.asserttheCoopSection(); 
        storieslinks.asserttheLittleThingsSection(); 
        storieslinks.assertMentorshipSection(); 
        storieslinks.assertletsBeFriend();     
  });

  it('Verify InsideChick-fil-A page', () => {  
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertChickFilAUrl();
        storieslinks.assertInsideChickfilCategoryTitle();
        storieslinks.assertInsideChickfilSlider();
        storieslinks.assertWhatVisitAllAboutImg();
        storieslinks.assertWhatVisitAllAbout();
        storieslinks.asserttheCoopSection();
        storieslinks.assertFiveThingsYouNeedtoKnowImg();
        storieslinks.assertFiveThingsYouNeedtoKnow();
        storieslinks.assertAnnouncesNewVaughanImg();
        storieslinks.assertAnnouncesNewVaughan();
        storieslinks.assertFromBasketCourtImg();
        storieslinks.assertFromBasketCourt();
    });

    it('Verify In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertCommunityPageUrl();
      storieslinks.assertInTheCategoryTitle();
      storieslinks.assertInTheCatgorySlider();
      storieslinks.assertHubOfOpportunityImg();
      storieslinks.assertHubOfOpportunity();
      storieslinks.assertFightingHungerWithSecondHarvestImg();
      storieslinks.assertFightingHungerWithSecondHarvest();
      storieslinks.assertTrueInspirationAwrdImg();
      storieslinks.assertTrueInspirationAwrd();
      storieslinks.assertSharedTableProgramImg();
      storieslinks.assertSharedTableProgram();      
    }); 

    it('Verify News page', () => {  
      storieslinks.clickNewsLink();
      storieslinks.assertNewsPageUrl();
      storieslinks.assertNewsTitle();
      storieslinks.assertNewsSlider();
      storieslinks.assertTheLatestNews();
      storieslinks.assertMillionInScholarshipsImg();
      storieslinks.assertMillionInScholarships();
      storieslinks.assertNewTorontoRestautantImg();
      storieslinks.assertNewTorontoRestautant();
      storieslinks.assertAnnouncesEightRestaurantImg();
      storieslinks.assertAnnouncesEightRestaurant();
      storieslinks.assertOpenNewRestaurantImg();  
      storieslinks.assertOpenNewRestaurant();      
    }); 

    
  });