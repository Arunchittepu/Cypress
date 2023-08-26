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
    });

    it("Verify Stories page Title", () => {
        cy.fixture("storiessublinks").then((data) => {
        storieslinks.elements.pageTitle().should('eq', data.homepagetitle);        
      });
    });


  it('Verify sub menus links under Stories', () => {    
      // storieslinks.hoverStorieslnk(); 
       storieslinks.clickstorieslnk();
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
        storieslinks.assertwhichchickfilasauceisyourperfectmatchforsurePageUrl();
        storieslinks.assertwhichchickfilasauceisyourperfectmatchforsurePageTitle();
        storieslinks.assertwhichchickfilasauceisyourperfectmatchforsurePageSubTitle();
        storieslinks.callBack();

        storieslinks.assertWhatVisitAllAboutImg();
        storieslinks.assertWhatVisitAllAbout();
        storieslinks.clickWhatVisitAllAbout();
        storieslinks.assertallowustointroduceourselvesUrl();
        storieslinks.assertallowustointroduceourselvesTitle();
        storieslinks.assertallowustointroduceourselvesSubTitle();
        storieslinks.callBack();

        storieslinks.asserttheCoopSection();
        storieslinks.clickhowahighschooljobbecameamissionLink();
        storieslinks.asserthowahighschooljobbecameamissionUrl();
        storieslinks.asserthowahighschooljobbecameamissionLinkTitle();
        storieslinks.asserthowahighschooljobbecameamissionLinkSubTitle();
        storieslinks.callBack();

        storieslinks.assertFiveThingsYouNeedtoKnowImg();
        storieslinks.assertFiveThingsYouNeedtoKnow();
        storieslinks.clickFiveThingsYouNeedtoKnow();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesUrl();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesTitle();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesSubTitle();
        storieslinks.callBack();

        storieslinks.assertAnnouncesNewVaughanImg();
        storieslinks.assertAnnouncesNewVaughan();
        storieslinks.clickAnnouncesNewVaughan();
        storieslinks.assertchickfilaannouncesnewvaughanontariorestaurantUrl();
        storieslinks.assertchickfilaannouncesnewvaughanontariorestaurantPara();
        storieslinks.assertchickfilaannouncesnewvaughanontariorestaurantSubTitle();

        storieslinks.callBack();

        storieslinks.assertFromBasketCourtImg();
        storieslinks.assertFromBasketCourt();
        storieslinks.clickFromBasketCourt();
        storieslinks.assertmeetaljonesthenewestchickfilaowneroperatorincanadaUrl();
        storieslinks.assertmeetaljonesthenewestchickfilaowneroperatorincanadaPublishDate();
        storieslinks.assertmeetaljonesthenewestchickfilaowneroperatorincanadaSubTitle();
        
    });

    it('Verify In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertCommunityPageUrl();
      storieslinks.assertInTheCategoryTitle();
      storieslinks.assertInTheCatgorySlider();
      storieslinks.clickInTheCatgorySlider();
      storieslinks.assertTrueInspirationAwardsApplicationsopenUrl();
      storieslinks.assertTrueInspirationAwardsApplicationsopenTitle();
      storieslinks.assertTrueInspirationAwardsApplicationsopenSubTitle();
      storieslinks.callBack();

      storieslinks.assertHubOfOpportunityImg();
      storieslinks.assertHubOfOpportunity();
      storieslinks.clickHubOfOpportunity();
      storieslinks.assertHubofOpportunitiesaimUrl();
      storieslinks.assertHubofOpportunitiesaimUrlTitle();
      storieslinks.assertHubofOpportunitiesaimUrlSubTitle();
      storieslinks.callBack();

      storieslinks.assertFightingHungerWithSecondHarvestImg();
      storieslinks.assertFightingHungerWithSecondHarvest();
      storieslinks.clickFightingHungerWithSecondHarvest();
      storieslinks.assertFightinghungerwithSecondHarvestPageUrl();
      storieslinks.assertFightinghungerwithSecondHarvestPageTitle();
      storieslinks.assertFightinghungerwithSecondHarvestPageSubTitle();
      storieslinks.callBack();

      storieslinks.assertTrueInspirationAwrdImg();
      storieslinks.assertTrueInspirationAwrd();
      storieslinks.clickTrueInspirationAwrd();
      storieslinks.asserthowatrueinspirationawardsgrantPageUrl();
      storieslinks.asserthowatrueinspirationawardsgrantPageTitle();
      storieslinks.asserthowatrueinspirationawardsgrantPageParaTitle();
      storieslinks.callBack();

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
      storieslinks.callBack();

      storieslinks.assertTheLatestNews();
      storieslinks.assertMillionInScholarshipsImg();
      storieslinks.assertMillionInScholarships();
      storieslinks.clickMillionInScholarships();
      storieslinks.assertMillionInScholarshipsUrl();
      storieslinks.assertMilionScholarshipHead();
      storieslinks.assertBenefitsBodyTxt();
      storieslinks.callBack();
    });

    it('Verify Three footer stories links at News page', () => {  
      storieslinks.clickNewsLink();      
      storieslinks.assertNewTorontoRestautantImg();
      storieslinks.assertNewTorontoRestautant();
      storieslinks.clickNewTorontoRestautant();
      storieslinks.assertNewTorontoRestautantUrl();
      storieslinks.assertNewTorontoRestautantHead();
      storieslinks.assertNewTorontoRestautantHeadImg();
      storieslinks.callBack();

      storieslinks.assertAnnouncesEightRestaurantImg();
      storieslinks.assertAnnouncesEightRestaurant();
      storieslinks.clickAnnouncesEightRestaurant();
      storieslinks.assertAnnouncesEightRestaurantUrl();
      storieslinks.assertAnnouncesEightRestaurantPara();
      storieslinks.assertAnnouncesEightRestaurantPgImg();
      storieslinks.callBack();

      storieslinks.assertOpenNewRestaurantImg();  
      storieslinks.assertOpenNewRestaurant();      
      storieslinks.clickOpenNewRestaurant();
      storieslinks.assertOpenNewRestaurantUrl();
      storieslinks.assertOpenNewRestaurantPara();
      storieslinks.assertOpenNewRestaurantPageImg();     

    }); 

    
  });