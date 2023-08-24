/// <reference types="cypress"/>
import homepage from "../../pageobjects/homepage";
import careerslink from "../../pageobjects/careerslink";
describe("Home page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })
    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })

      it("Check Careers menu link page", () => {
        careerslink.clickcareerslnk();
      })

});