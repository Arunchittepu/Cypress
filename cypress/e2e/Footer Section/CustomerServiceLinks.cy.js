/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import footerleft from "../../pageobjects/FooterLeft";
describe("Customer Service links test", () => {
    beforeEach(() => {
      cy.visit("/");
      })
    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it.only("Check Customer Service link at footer left section", () => {
        footerleft.assertCustomerServicelink();
        footerleft.clickCustomerServicelink();
        footerleft.assertCustomerSupportUrl();
        footerleft.assertReadourFAQsHead();
        footerleft.testReadOurFAQsSection();        
      })

});