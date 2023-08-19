class storieslinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.xpath("//header/div[1]/div[1]/a[1]/span[1]"),
       storieslnk: () => cy.contains("Stories"),
       storiesSlider: () => cy.get('#slick-slide01 > :nth-child(1) > .slide > .lead-story > .slide-content'),
       whichChickFilASauceImg: () => cy.get(':nth-child(1) > .off-screen > :nth-child(1)'),
       whichChickFilASauceTxtLnk: () => cy.get(':nth-child(2) > .flex > :nth-child(1) > h3 > a'),
       theLittleThingsSection: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(1)'),
       theCoopSection: () => cy.get('.top-shared-frame > h3'),
       MentorshipSection: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(2)'),
       letsBeFriend: () => cy.get('.co-social > .wrapper > .title'),
       Story: () => cy.xpath("//span[contains(text(),'Stories')]"),
       hoverStories: () => cy.get("div.subnav a[href='/stories/inside-chick-fil-a']"),      
       InsideChick_fil_Alnk: () => cy.contains("Inside Chick-fil-A"),
       
       InsideChickfilCategoryTitle: () => cy.get('.category-title'),
       InsideChickfilSlider: () => cy.get('#slick-slide00 > :nth-child(1) > .slide > .lead-story > .slide-content'),
       WhatVisitAllAbout: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(1)'),
       FiveThingsYouNeedtoKnow: () => cy.get(':nth-child(5) > .flex > :nth-child(1)'),
       AnnouncesNewVaughan: () => cy.get(':nth-child(5) > .flex > :nth-child(2)'),
       FromBasketCourt: () => cy.get(':nth-child(5) > .flex > :nth-child(3)'),
       
       IntheCommunity: () => cy.contains("In the Community"),
       InTheCategoryTitle: () => cy.get('.category-title'),
       InTheCatgorySlider: () => cy.get('#slick-slide00 > :nth-child(1) > .slide > .lead-story > .slide-content'),
       HubOfOpportunity: () => cy.get(':nth-child(3) > .flex > :nth-child(1)') ,
       FightingHungerWithSecondHarvest: () => cy.get(':nth-child(3) > .flex > :nth-child(2)'),
       TrueInspirationAwrd: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(1)'),
       SharedTableProgram: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(2)'),
       
       News: () => cy.contains("News"),
       NewsTitle: () => cy.get('.category-title'),
       NewsSlider: () => cy.get('.slide-content'),
       TheLatestNews: () => cy.get('.top-shared-frame') ,
       MillionInScholarships: () => cy.get(':nth-child(3) > .flex > :nth-child(2)'),
       NewTorontoRestautant: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(1)'),
       AnnouncesEightRestaurant: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(2)'),
       OpenNewRestaurant: () => cy.get('.frame > :nth-child(4) > .flex > :nth-child(3)'),       
    }

    clickLogo(){
        this.elements.logolink().click({force: true});
        this.elements.urlAssert().should('include', 'https://www.chick-fil-a.ca/');
    }

    clickstorieslnk(){
        this.elements.storieslnk().click();
        this.elements.urlAssert().should('include', '/stories');
        this.elements.storiesSlider().should('be.visible');
        this.elements.whichChickFilASauceImg().should("be.visible");
        this.elements.whichChickFilASauceTxtLnk().should("be.visible");
        this.elements.theCoopSection().should("be.visible");
        this.elements.theLittleThingsSection().should("be.visible");
        this.elements.MentorshipSection().should("be.visible");
        this.elements.letsBeFriend().should("be.visible");
    }

    hoverStorieslnk(){
        this.elements.hoverStories().trigger('mouseover');
        this.elements.urlAssert().should('include', '/stories');  
        this.elements.InsideChick_fil_Alnk().should("be.visible");
        this.elements.IntheCommunity().should("be.visible");
        this.elements.News().should("be.visible");
    }

    clickInsideChick_fil_Alnk(){
        this.elements.InsideChick_fil_Alnk().click();
        this.elements.urlAssert().should('include', '/stories/inside-chick-fil-a');
        this.elements.InsideChickfilCategoryTitle().should("be.visible");
        this.elements.InsideChickfilSlider().should("be.visible");
        this.elements.WhatVisitAllAbout().should("be.visible");
        this.elements.theCoopSection().should("be.visible");
        this.elements.FiveThingsYouNeedtoKnow().should("be.visible");
        this.elements.AnnouncesNewVaughan().should("be.visible");
        this.elements.FromBasketCourt().should("be.visible"); 
    }
    clickIntheCommunitylink(){
        this.elements.IntheCommunity().click();
        this.elements.urlAssert().should('include', '/stories/in-the-community'); 
        this.elements.InTheCategoryTitle().should("be.visible");
        this.elements.InTheCatgorySlider().should("be.visible");
        this.elements.HubOfOpportunity().should("be.visible");
        this.elements.FightingHungerWithSecondHarvest().should("be.visible");
        this.elements.TrueInspirationAwrd().should("be.visible");
        this.elements.SharedTableProgram().should("be.visible"); 
    }

    clickNewsLink(){
        this.elements.News().click();
        this.elements.urlAssert().should('include', '/stories/news'); 
        this.elements.NewsTitle().should("be.visible");
        this.elements.NewsSlider().should("be.visible");
        this.elements.TheLatestNews().should("be.visible");
        this.elements.MillionInScholarships().should("be.visible");
        this.elements.NewTorontoRestautant().should("be.visible");
        this.elements.AnnouncesEightRestaurant().should("be.visible");
        this.elements.OpenNewRestaurant().should("be.visible");
    }
}

module.exports = new storieslinks();
