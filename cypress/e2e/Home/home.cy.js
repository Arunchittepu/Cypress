/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
describe("Home page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Home page menus", () => {
    cy.fixture("home").then((data) => {
      homepage.elements.pageTitle().should("eq", data.homepagetitle);
      homepage.clickLogo();
      homepage.verifyLogoRedirect();
      homepage.assertApplytoworkataChickfilArestaurant();
      homepage.assertSeasonalImg();
      homepage.assertBagIcon();
      homepage.assertOrderCarryOutBtn();
      homepage.assertGettoknowourmenuTxt();
      homepage.assertExplorethemenuBtn();
      homepage.assertFightingHungerinOurCommunitiesTxt();
      homepage.assertLearnabouttheprogramBtn();
      homepage.assertNutritionandallergensTxt();
      homepage.assertSeeTheFactsBtn();
      homepage.assertNewRestaurantInmississauga();
      homepage.assertAPassonateLeader();     
      homepage.assertPeachbeveragesthroughouttheyears();
      homepage.clickmenulnk();
      homepage.clickstorieslnk();
      homepage.clickaboutlnk();
      homepage.clickcareerslink();
      
    });
  });
});