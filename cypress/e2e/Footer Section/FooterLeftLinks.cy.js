/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import footerleft from "../../pageobjects/FooterLeft";
describe("Footer Left links test", () => {
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

        /*        footerleft.assertfaq1();
        footerleft.clickfaq1();
        footerleft.assertfaqAns1();
        footerleft.clickfaq1();

        footerleft.clickfaq2();
        footerleft.assertfaqAns2();
        footerleft.clickfaq2();

        footerleft.clickfaq3();
        footerleft.assertfaqAns3();
        footerleft.clickfaq3();

        footerleft.clickfaq4();
        footerleft.assertfaqAns4();
        footerleft.clickfaq4();

        footerleft.clickfaq5();
        footerleft.assertfaqAns5();
        footerleft.clickfaq5();


        footerleft.assertfaq40();
        footerleft.clickfaq40();
        footerleft.assertfaq40();
        footerleft.assertfaqAns40();
        footerleft.clickfaq40();*/
      })

});