class homePage{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.xpath("//header/div[1]/div[1]/a[1]/span[1]"),
       menulnk: () => cy.contains("Menu"),
       storieslnk: () => cy.contains("Stories"),
       aboutlnk: () => cy.contains("About"),
       careerslink: () => cy.contains("Careers"),

    }

    clickLogo(){
        this.elements.logolink().click({force: true});
        this.elements.urlAssert().should('include', 'https://www.chick-fil-a.ca/');
    }

    clickmenulnk(){
        this.elements.menulnk().click();
    }

    clickstorieslnk(){
        this.elements.storieslnk().click();
    }

    clickaboutlnk(){
        this.elements.aboutlnk().click();
    }
    clickcareerslink(){
        this.elements.careerslink().click();
    }

}

module.exports = new homePage();
