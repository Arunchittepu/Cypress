import storieslinks from "../../pageobjects/storiesSublinks";
import homepage from "../../pageobjects/homepage";
import PressRoom from "../../pageobjects/PressRoom";

describe("Press Room link page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })

    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check the redirection when clicks on Press Room link", () => {
        PressRoom.assertPressRoomlink();
        PressRoom.clickPressRoomlink();        
      })


      it('Verify News page', () => {  
        PressRoom.clickPressRoomlink();
        storieslinks.assertNewsPageUrl();
        storieslinks.assertNewsTitle();
        storieslinks.assertNewsSlider();
        storieslinks.clickNewsSliderLink();
        storieslinks.assertSpringsintotheseasonwithWatermelonMintbeverageflavoursUrl();
        storieslinks.assertSeasonWithWaterMelonHead();
        storieslinks.assertSeasonWithWaterMelonImg();
      });
  
      it('Verify Million In Scholarships section at News page', () => {  
        PressRoom.clickPressRoomlink(); 
        storieslinks.assertTheLatestNews();
        storieslinks.assertMillionInScholarshipsImg();
        storieslinks.assertMillionInScholarships();
        storieslinks.clickMillionInScholarships();
        storieslinks.assertMillionInScholarshipsUrl();
        storieslinks.assertMilionScholarshipHead();
        storieslinks.assertBenefitsBodyTxt();
       
      });
  
      it('Verify New Toronto Restautant footer stories links at News page', () => {  
        PressRoom.clickPressRoomlink();      
        storieslinks.assertNewTorontoRestautantImg();
        storieslinks.assertNewTorontoRestautant();
        storieslinks.clickNewTorontoRestautant();
        storieslinks.assertNewTorontoRestautantUrl();
        storieslinks.assertNewTorontoRestautantHead();
        storieslinks.assertNewTorontoRestautantHeadImg();
      });
      
      it('Verify Announces Eight Restaurant footer stories links at News page', () => {  
        PressRoom.clickPressRoomlink();         
        storieslinks.assertAnnouncesEightRestaurant();
        storieslinks.clickAnnouncesEightRestaurant();
        storieslinks.assertAnnouncesEightRestaurantUrl();
        storieslinks.assertAnnouncesEightRestaurantPara();
        storieslinks.assertAnnouncesEightRestaurantPgImg();
      });
     
      it('Verify Open New Restaurant footer stories links at News page', () => {  
        PressRoom.clickPressRoomlink(); 
        storieslinks.assertOpenNewRestaurantLinkImg();  
        storieslinks.assertOpenNewRestaurantLink();      
        storieslinks.clickOpenNewRestaurantLink();
        storieslinks.assertOpenNewRestaurantUrl();
        storieslinks.assertOpenNewRestaurantPara();
        storieslinks.assertOpenNewRestaurantPageImg();     
      });  
});