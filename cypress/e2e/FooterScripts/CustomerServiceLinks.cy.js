/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import CustomerServiceLinks from "../../pageobjects/CustomerServiceLinks";
describe("Customer Service links test", () => {
    beforeEach(() => {
      cy.visit("/");
      })
      it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check Customer Service link at footer left section", () => {
        CustomerServiceLinks.assertCustomerServicelink();
        CustomerServiceLinks.clickCustomerServicelink();
        CustomerServiceLinks.assertCustomerSupportUrl();
        CustomerServiceLinks.assertReadourFAQsHead();
        CustomerServiceLinks.testReadOurFAQsSection();        
      })

});