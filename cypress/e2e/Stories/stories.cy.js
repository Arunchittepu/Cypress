/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import storieslinks from "../../pageobjects/storiesSublinks"
describe('Stories sub links test', () => {
   
    beforeEach(() => {
      cy.visit('/')
      storieslinks.clickstorieslnk();
    });

    it("Check the redirection when click on Logo link", () => {
      homepage.clickLogo();
      homepage.verifyLogoRedirect();
    });

    it("Verify Stories page Title", () => {
        cy.fixture("storiessublinks").then((data) => {
        storieslinks.elements.pageTitle().should('eq', data.Storyhomepagetitle);        
      });
    });


    it('Verify sub menus links under Stories', () => {         
        //storieslinks.clickstorieslnk();
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
  

    it('Verify InsideChick-fil-A page', () => {  
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertChickFilAUrl();
        storieslinks.assertInsideChickfilCategoryTitle();
        storieslinks.assertInsideChickfilSlider();
        storieslinks.clickInsideChickfilSlider();
        
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodPageUrl();
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodTitle();
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodSubTitle();
       
    });


    it('Verify What Visit is it all about section on InsideChick-fil-A page', () => { 
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertWhatVisitAllAboutImg();
        storieslinks.assertWhatVisitAllAbout();
        storieslinks.clickWhatVisitAllAbout();
        storieslinks.assertallowustointroduceourselvesUrl();
        storieslinks.assertallowustointroduceourselvesTitle();
        storieslinks.assertallowustointroduceourselvesSubTitle();
    });

    it('Verify Five Things You Need to Know section on InsideChick-fil-A page', () => { 
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertFiveThingsYouNeedtoKnowImg();
        storieslinks.assertFiveThingsYouNeedtoKnow();
        storieslinks.clickFiveThingsYouNeedtoKnow();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesUrl();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesTitle();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesSubTitle();
    });
    

    it('Verify In The Catgory Slider section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertCommunityPageUrl();
      storieslinks.assertInTheCategoryTitle();
      storieslinks.assertInTheCatgorySlider();
      storieslinks.clickInTheCatgorySlider();
      storieslinks.assertTrueInspirationAwardsApplicationsopenUrl();
      storieslinks.assertTrueInspirationAwardsApplicationsopenTitle();
      storieslinks.assertTrueInspirationAwardsApplicationsopenSubTitle();
      
    });
 
    it('Verify Hub Of Opportunity section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertHubOfOpportunityImg();
      storieslinks.assertHubOfOpportunity();
      storieslinks.clickHubOfOpportunity();
      storieslinks.assertHubofOpportunitiesaimUrl();
      storieslinks.assertHubofOpportunitiesaimUrlTitle();
      storieslinks.assertHubofOpportunitiesaimUrlSubTitle();
    });

  it('Verify Fighting Hunger With Second Harvest section In The Community page', () => {  
       storieslinks.clickIntheCommunitylink();
      storieslinks.assertFightingHungerWithSecondHarvestImg();
      storieslinks.assertFightingHungerWithSecondHarvest();
      storieslinks.clickFightingHungerWithSecondHarvest();
      storieslinks.assertFightinghungerwithSecondHarvestPageUrl();
      storieslinks.assertFightinghungerwithSecondHarvestPageTitle();
      storieslinks.assertFightinghungerwithSecondHarvestPageSubTitle();
   });

   it('Verify True Inspiration Award section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertTrueInspirationAwrdImg();
      storieslinks.assertTrueInspirationAwrd();
      storieslinks.clickTrueInspirationAwrd();
      storieslinks.asserthowatrueinspirationawardsgrantPageUrl();
      storieslinks.asserthowatrueinspirationawardsgrantPageTitle();
      storieslinks.asserthowatrueinspirationawardsgrantPageParaTitle();
   });

   it('Verify Shared Table Program section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertSharedTableProgramImg();
      storieslinks.assertSharedTableProgram();  
      storieslinks.clickSharedTableProgram();
      storieslinks.assertTheChickfilASharedTableProgramPageUrl();
      storieslinks.assertTheChickfilASharedTableProgramPageTitle();
      storieslinks.assertTheChickfilASharedTableProgramPageParaHead();      
    }); 

    it('Verify News page', () => {  
      storieslinks.clickNewsLink();
      storieslinks.assertNewsPageUrl();
      storieslinks.assertNewsTitle();
      storieslinks.assertNewsSlider();
      storieslinks.clickNewsSliderLink();
      storieslinks.assertSpringsintotheseasonwithWatermelonMintbeverageflavoursUrl();
      storieslinks.assertSeasonWithWaterMelonHead();
      storieslinks.assertSeasonWithWaterMelonImg();
    });

    it('Verify Million In Scholarships section at News page', () => {  
      storieslinks.clickNewsLink(); 
      storieslinks.assertTheLatestNews();
      storieslinks.assertMillionInScholarshipsImg();
      storieslinks.assertMillionInScholarships();
      storieslinks.clickMillionInScholarships();
      storieslinks.assertMillionInScholarshipsUrl();
      storieslinks.assertMilionScholarshipHead();
      storieslinks.assertBenefitsBodyTxt();
     
    });

    it('Verify New Toronto Restautant footer stories links at News page', () => {  
      storieslinks.clickNewsLink();      
      storieslinks.assertNewTorontoRestautantImg();
      storieslinks.assertNewTorontoRestautant();
      storieslinks.clickNewTorontoRestautant();
      storieslinks.assertNewTorontoRestautantUrl();
      storieslinks.assertNewTorontoRestautantHead();
      storieslinks.assertNewTorontoRestautantHeadImg();
    });
    
    it('Verify Announces Eight Restaurant footer stories links at News page', () => {  
      storieslinks.clickNewsLink(); 
      storieslinks.assertAnnouncesEightRestaurantImg();
      storieslinks.assertAnnouncesEightRestaurant();
      storieslinks.clickAnnouncesEightRestaurant();
      storieslinks.assertAnnouncesEightRestaurantUrl();
      storieslinks.assertAnnouncesEightRestaurantPara();
      storieslinks.assertAnnouncesEightRestaurantPgImg();
    });
   
    it('Verify Open New Restaurant footer stories links at News page', () => {  
      storieslinks.clickNewsLink(); 
      storieslinks.assertOpenNewRestaurantLinkImg();  
      storieslinks.assertOpenNewRestaurantLink();      
      storieslinks.clickOpenNewRestaurantLink();
      storieslinks.assertOpenNewRestaurantUrl();
      storieslinks.assertOpenNewRestaurantPara();
      storieslinks.assertOpenNewRestaurantPageImg();      
    });     
  });