class careerslink{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       
       careerslnk: () => cy.contains("Careers"),
       whoweare: () => cy.contains("Who We Are"),
       greatFood: () => cy.contains("Great Food"),
       givingBack: () => cy.contains("Giving Back"),
       hoverAbout: () => cy.get("div.subnav a[href='/about/who-we-are-page']"), 
        CareersHeadingText: () => cy.xpath("//h1[contains(text(),'Work that matters, people who care: Grow your care')]"),
        CareersPageImg: () => cy.get("img[alt='Headshot of smiling man in red shirt']"),
    
    
    }

    clickcareerslnk(){
        this.elements.careerslnk().click();        
    }

    assertCareersUrl(){        
        this.elements.urlAssert().should('include', Cypress.config().baseUrl+ 'stories/inside-chick-fil-a/grow-your-career-at-your-local-chick-fil-alocation');                
    }

    assertCareersHeadTxt(){        
        this.elements.CareersHeadingText().should("be.visible");                
    }

    assertCareersImg(){        
        this.elements.CareersPageImg().should("be.visible");                
    }





}



module.exports = new careerslink();