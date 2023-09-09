class PressRoom{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
        PressRoomlink: () => cy.xpath("//span[contains(text(),'Press Room')]"),
        NewTitle: () => cy.xpath("//h1[contains(text(),'Employment opportunities with Chick-fil-A Canada, ')]"),
        ViewavailableopportunitiesBtn: () => cy.xpath("//a[contains(text(),'View available opportunities')]"),
        FoodLink: () => cy.xpath("//span[contains(text(),'Food')]"),
        HelloCanadaText: () => cy.xpath("//div[@id='ibrand-id-18472']"),
    }

    assertPressRoomlink(){
        this.elements.PressRoomlink().should('be.visible');
    }

    clickPressRoomlink(){
        this.elements.PressRoomlink().click({force: true});
    }

    assertCorporateCareersUrl(){
        cy.fixture('CorporateCareers').then((data) =>{
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + data.CorporateCareerUrl);
       })
    }

    assertCorporateCareersTitle(){
        this.elements.CorporateCareersTitle().should('be.visible');
    }

    assertViewavailableopportunitiesBtn(){
        this.elements.ViewavailableopportunitiesBtn().should('be.visible');
    }

    clickViewavailableopportunitiesBtn(){
        this.elements.ViewavailableopportunitiesBtn().click();
    }

    assertViewavailableopportunitiesPage(){
        cy.fixture('CorporateCareers').then((data1) =>{
            cy.origin("https://internationalcareers-chickfila.icims.com/", () => {        
            cy.url().should('include', 'jobs/search?hashed=-435775293&mobile=false&width=1388&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240');
            cy.get("a[href='/locations']").should('be.visible'); 
            cy.get("div[id='ibrand-id-18472']").should('be.visible'); 
            })
        })
    }

    assertFoodLink(){
        this.elements.FoodLink().should('be.visible');
    }

    assertHelloCanadaText(){
        this.elements.HelloCanadaText().should('be.visible');
    }

}
module.exports = new PressRoom();