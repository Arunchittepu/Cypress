import CorporateCareers from "../../pageobjects/CorporateCareers";
import homepage from "../../pageobjects/homepage";
describe("CorporateCareers link page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })

      it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check the redirection when clicks on Corporate Careers link", () => {
        CorporateCareers.assertCorporateCareerslink();
        CorporateCareers.clickCorporateCareerslink();
        CorporateCareers.assertCorporateCareersUrl();
        CorporateCareers.assertCorporateCareersTitle();
        CorporateCareers.assertViewavailableopportunitiesBtn();
      })


      it("Check the redirection when clicks on View available opportunities Button", () => {        
        CorporateCareers.clickCorporateCareerslink();
        CorporateCareers.clickViewavailableopportunitiesBtn();
        CorporateCareers.assertViewavailableopportunitiesPage();        
      })
});