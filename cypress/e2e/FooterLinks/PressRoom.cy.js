

describe("Press Room page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })

    it("Check the redirection when click on Logo link", () => {
        homepage.clickLogo();
        homepage.verifyLogoRedirect();
      })


      
    })