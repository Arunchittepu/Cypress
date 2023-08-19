class menusublinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.xpath("//header/div[1]/div[1]/a[1]/span[1]"),
       menulnk: () => cy.contains("Menu"),
       Menucl: () => cy.xpath("//span[contains(text(),'Menu')]"),
       hovermenu: () => cy.get("div.subnav a[href='/menu#entrees']"),      
       Entréeslnk: () => cy.contains("Entrées"),
       Saladslink: () => cy.contains("Salads"),
       Sideslink: () => cy.contains("Sides"),
       KidsMealslink: () => cy.contains("Kid's Meals"),
       Treatslink: () => cy.contains("Treats"),
       Beverageslink: () => cy.contains("Beverages"),
       DippingSaucesandDressingslink: () => cy.contains("Dipping Sauces and Dressings"),
       Cateringlink: () => cy.contains("Catering"),
    }

    clickLogo(){
        this.elements.logolink().click({force: true});
        this.elements.urlAssert().should('include', 'https://www.chick-fil-a.ca/');
    }

    clickmenulnk(){
        this.elements.menulnk().click();
    }

    hovermenulnk(){
        this.elements.Menucl().trigger('mouseover')        
    }

    clickEntréeslnk(){
        this.elements.Entréeslnk().click();
    }
    clickSaladslink(){
        this.elements.Saladslink().click();
    }

}

module.exports = new menusublinks();
