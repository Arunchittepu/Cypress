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
          storieslinks.clickstorieslnk();
        storieslinks.elements.pageTitle().should('eq', data.Storyhomepagetitle);        
      });
    });

    it('Verify sub menus links under Stories', () => {  
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
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodPageUrl();
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodTitle();
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodSubTitle();
        storieslinks.assertWhyChickfilAgrilledchickentastessogoodImg();       
    });

    it('Verify What Visit is it all about section on InsideChick-fil-A page', () => { 
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertWhatVisitAllAboutImg();
        storieslinks.assertWhatVisitAllAbout();
        storieslinks.clickWhatVisitAllAbout();
        storieslinks.assertallowustointroduceourselvesUrl();
        storieslinks.assertallowustointroduceourselvesTitle();
        storieslinks.assertallowustointroduceourselvesSubTitle();
        storieslinks.assertCaptionImg();
        storieslinks.assertChickSandwichImg();
        storieslinks.assertNuggetsImg();
    });

    it('Verify Five Things You Need to Know section on InsideChick-fil-A page', () => { 
        storieslinks.clickInsideChick_fil_Alnk();
        storieslinks.assertFiveThingsYouNeedtoKnowImg();
        storieslinks.assertFiveThingsYouNeedtoKnow();
        storieslinks.clickFiveThingsYouNeedtoKnow();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesUrl();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesTitle();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesSubTitle();
        storieslinks.assertwhattoknowaboutourwafflepotatofriesCapImg();
        storieslinks.assertWafflePotatoFriesLink();
        storieslinks.assertChickFilANuggetsLink();
    });
    

    it('Verify In The Catgory Slider section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertCommunityPageUrl();
      storieslinks.assertInTheCategoryTitle();
      storieslinks.assertInTheCatgorySlider();
      storieslinks.clickInTheCatgorySlider();
      storieslinks.assertHowCanadaisgivingbacktolocalcommunitiesUrl();
      storieslinks.assertHowCanadaisgivingbacktolocalcommunitiesTitle();
      storieslinks.assertHowCanadaisgivingbacktolocalcommunitiesImg();
      storieslinks.assertLearnAboutFirstCanadianReceipientLink();
      storieslinks.assertCorporateSocialResponsibilityReportLink();
    });

    it('Verify True Inspiration Awards Applications open section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertCommunityPageUrl();
      storieslinks.clickTrueInspirationAwardsApplicationsopenLink();
      storieslinks.assertTrueInspirationAwardsApplicationsopenUrl();
      storieslinks.assertTrueInspirationAwardsApplicationsopenTitle();
      storieslinks.assertTrueInspirationAwardsApplicationsopenSubTitle();
      storieslinks.assertTrueInspirationAwardsApplicationsopenImg();
      storieslinks.assertTrueInspirationAwardsWinnersLink();
    });
          
    it('Verify True Inspiration Award section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertTrueInspirationAwrdImg();
      storieslinks.assertTrueInspirationAwrd();
      storieslinks.clickTrueInspirationAwrd();
      storieslinks.asserthowatrueinspirationawardsgrantPageUrl();
      storieslinks.asserthowatrueinspirationawardsgrantPageTitle();
      storieslinks.asserthowatrueinspirationawardsgrantPageParaTitle();
      storieslinks.asserthowatrueinspirationawardsgrantPageImg();
      storieslinks.assertThreePeopleInAFoodKitchenImg();
      storieslinks.assertGroupOfPeopleHoldingLargeTrueInspirationAwardCheckImg();
      storieslinks.assertTrueInspirationAwardsLink();
    });
 
    it('Verify Fighting Hunger With Second Harvest section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertFightingHungerWithSecondHarvestImg();
      storieslinks.assertFightingHungerWithSecondHarvest();
      storieslinks.clickFightingHungerWithSecondHarvest();
      storieslinks.assertFightinghungerwithSecondHarvestPageUrl();
      storieslinks.assertFightinghungerwithSecondHarvestPageTitle();
      storieslinks.assertFightinghungerwithSecondHarvestPageSubTitle();
      storieslinks.assertBoxOfFreshProduceImg();
      storieslinks.assertSharedTableProgramLink();
    });

    it('Verify Hub Of Opportunity section In The Community page', () => {  
      storieslinks.clickIntheCommunitylink();
      storieslinks.assertHubOfOpportunityImg();
      storieslinks.assertHubOfOpportunity();
      storieslinks.clickHubOfOpportunity();
      storieslinks.assertHubofOpportunitiesaimUrl();
      storieslinks.assertHubofOpportunitiesaimUrlTitle();
      storieslinks.assertHubofOpportunitiesaimUrlSubTitle();
      storieslinks.assertHubofOpportunitiesaimCapImg();
      storieslinks.assertUHCHubofOpportunitiesLink();
      storieslinks.assertChickFilACommitmentLink();
    });

    it('Verify Shared Table Program section In The Community page', () => {  
        storieslinks.clickIntheCommunitylink();
        storieslinks.assertSharedTableProgramImg();
        storieslinks.assertSharedTableProgram();  
        storieslinks.clickSharedTableProgram();
        storieslinks.assertTheChickfilASharedTableProgramPageUrl();
        storieslinks.assertTheChickfilASharedTableProgramPageTitle();
        storieslinks.assertTheChickfilASharedTableProgramPageParaHead(); 
        storieslinks.assertSharedTableCapImg();
        storieslinks.assertSharedTableWorkImg();
        storieslinks.assertSecondHarvestLink();
        storieslinks.assertARestaurantsTakePartInSharedTableLink();
        storieslinks.assertPersoncarryingaredtrayofsaladsincontainersImg();
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
        storieslinks.assertChickFilAStoryLink();
        storieslinks.assertChickFilAWebLink();        
        storieslinks.assertChickFilANewsatWaterMelonPageLink();
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
        storieslinks.assertMillioninScholarshipstoRestaurantTeamMembersImg();
        storieslinks.assertMillioninScholarshipsBenefitsLink();
        storieslinks.assertChickFilAWebComLink();
        storieslinks.assertChickFilANewsatWaterMelonPageLink();
      });

      it('Verify New Toronto Restautant footer stories links at News page', () => {  
        storieslinks.clickNewsLink();      
        storieslinks.assertNewTorontoRestautantImg();
        storieslinks.assertNewTorontoRestautant();
        storieslinks.clickNewTorontoRestautant();
        storieslinks.assertNewTorontoRestautantUrl();
        storieslinks.assertNewTorontoRestautantHead();
        storieslinks.assertNewTorontoRestautantHeadImg();
        storieslinks.assertTalalChaudhryLink();
        storieslinks.assertTwoChickenSandwichmealswithWafflePotatoFriesdrinkImg();
        storieslinks.assertChickFilASharedTableTmLink();
        storieslinks.assertChickFranchisingPageLink();
        storieslinks.assertChickFilAWebLink();
        storieslinks.assertChickFilANewsatWaterMelonPageLink();
      });
      
      it('Verify Announces Eight Restaurant footer stories links at News page', () => {  
        storieslinks.clickNewsLink(); 
        storieslinks.assertAnnouncesEightRestaurantImg();
        storieslinks.assertAnnouncesEightRestaurant();
        storieslinks.clickAnnouncesEightRestaurant();
        storieslinks.assertAnnouncesEightRestaurantUrl();
        storieslinks.assertAnnouncesEightRestaurantPara();
        storieslinks.assertAnnouncesEightRestaurantPgImg();
        storieslinks.assertLincolnNikkelLink();
        storieslinks.assertLeadershipDevelopmentProgramLink();
        storieslinks.assertChickenSandwichImg();
        storieslinks.assertDriveThruodelHereLink();
        storieslinks.assertHockeyHelpstheHomelessLink();
        storieslinks.assertRedwoodParkCommunitiesLink();
        storieslinks.assertBusbyCentreLink();
        storieslinks.assertChickFilASharedTableTmLink();
        storieslinks.assertChickFilAWebLink();
        storieslinks.assertChickFilANewsatWaterMelonPageLink();
      });
    
      it('Verify Open New Restaurant footer stories links at News page', () => {  
        storieslinks.clickNewsLink(); 
        storieslinks.assertOpenNewRestaurantLinkImg();  
        storieslinks.assertOpenNewRestaurantLink();      
        storieslinks.clickOpenNewRestaurantLink();
        storieslinks.assertOpenNewRestaurantUrl();
        storieslinks.assertOpenNewRestaurantPara();
        storieslinks.assertOpenNewRestaurantPageImg();    
        storieslinks.assertSharedTableProgramTxtLink();
        storieslinks.assertGlassdoorTxtLink();
      });     
  });