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
       CareersSubTitle: () => cy.xpath("//p[contains(text(),'Learn about job opportunities near you.')]"),
       ReceivesupportwhileyoustudyHereLink: () => cy.xpath("//a[contains(text(),'here')]"),
       ComSignInBtn: () => cy.xpath("//button[contains(text(),'Sign In')]"),
       ComOrderNowBtn: () => cy.xpath("//a[contains(text(),'Order now')]"),
       SharedTableProgramLink: () => cy.xpath("//a[contains(text(),'Chick-fil-A Shared Table™ program')]"),
       DonateToNonProfitUHCLink: () => cy.xpath("//a[contains(text(),'donated US$25,000 to nonprofit UHC – Hub of Opport')]"),
       ContactTheRestaurantLink: () => cy.xpath("//a[contains(text(),'contact the restaurant')]"),
       ViewAvailableOpportunitiesLink: () => cy.xpath("//a[contains(text(),'View available opportunities')]"),
        HigherMeSIgnInBtn: () => cy.xpath("//button[contains(text(), 'Sign In')]"),
        HigherMeSIgnUpBtn: () => cy.xpath("//button[contains(text(), 'Sign Up')]"),
        JobsColumn: () => cy.xpath("//div[contains(text(),'Jobs')]"),
        EmployeementTypeColumn: () => cy.xpath("//div[contains(text(),'EmploymentType')]"),
        FountainHomeLink: () => cy.xpath("//a[contains(text(),'Home')]"),
        FountainHelpLink: () => cy.xpath("//a[contains(text(),'Help')]"),

    }

    clickcareerslnk(){
        this.elements.careerslnk().click();        
    }

    assertCareersUrl(){        
        this.elements.urlAssert().should('include', Cypress.config().baseUrl+ 'stories/inside-chick-fil-a/grow-your-career-at-your-local-chick-fil-a');                
    }

    assertCareersHeadTxt(){        
        this.elements.CareersHeadingText().should("be.visible");                
    }

    assertCareersImg(){        
        this.elements.CareersPageImg().should("be.visible");                
    }

    assertCareersSubTitle(){        
        this.elements.CareersSubTitle().should("be.visible");                
    }

    clickReceivesupportwhileyoustudyHereLink(){
        this.elements.ReceivesupportwhileyoustudyHereLink().click();        
    }

    assertHereComUrl(){        
        this.elements.urlAssert().should('include', Cypress.config().comUrl+ 'remarkable-futures-scholarships/meet-the-scholars');                
    }

    assertComSignInBtn(){        
        this.elements.ComSignInBtn().should("be.visible");                
    }
    
    assertComOrderNowBtn(){        
        this.elements.ComOrderNowBtn().should("be.visible");                
    }

    assertSharedTableProgramLink(){        
        this.elements.SharedTableProgramLink().should("be.visible");                
    }

    clickSharedTableProgramLink(){
        this.elements.SharedTableProgramLink().click();        
    }

    assertDonateToNonProfitUHCLink(){        
        this.elements.DonateToNonProfitUHCLink().should("be.visible");                
    }

    clickDonateToNonProfitUHCLink(){
        this.elements.DonateToNonProfitUHCLink().click();        
    }

    assertDevonshireContactTheRestaurantLink(){        
        this.elements.ContactTheRestaurantLink().should("be.visible");                
    }

    clickDevonshireContactTheRestaurantLink(){
        this.elements.ContactTheRestaurantLink().click();        
    }

    assertViewAvailableOpportunitiesLink(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(0).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink(){
        this.elements.ViewAvailableOpportunitiesLink().eq(0).click();        
    }

    assertHigherMeUrl(){        
        this.elements.urlAssert().should('include', 'https://app.higherme.com/');                
    }

    assertHigherMeSIgnInBtn(){        
        this.elements.HigherMeSIgnInBtn().should("be.visible");                
    }

    assertHigherMeSIgnUpBtn(){        
        this.elements.HigherMeSIgnUpBtn().should("be.visible");                
    }

    assertViewAvailableOpportunitiesLink1(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(1).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink1(){
        this.elements.ViewAvailableOpportunitiesLink().eq(1).click();        
    }

    assertcfaqueenspadinaUrl(){        
        this.elements.urlAssert().should('include', 'https://cfaqueenspadina.corehr.hrcloud.com/cfa#/jobs');                
    }

    assertJobsColumn(){        
        this.elements.JobsColumn().should("be.visible");                
    }

    assertEmployeementTypeColumn(){        
        this.elements.EmployeementTypeColumn().should("be.visible");                
    }

    assertViewAvailableOpportunitiesLink2(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(2).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink2(){
        this.elements.ViewAvailableOpportunitiesLink().eq(2).click();        
    }

    assertViewAvailableOpportunitiesLink3(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(3).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink3(){
        this.elements.ViewAvailableOpportunitiesLink().eq(3).click();        
    }

    assertViewAvailableOpportunitiesLink4(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(4).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink4(){
        this.elements.ViewAvailableOpportunitiesLink().eq(4).click();        
    }

    assertFountainUrl(){
        this.elements.urlAssert().should('include', 'https://web.fountain.com/turas-group/apply/chick-fil-a-yorkdale-mall-team-member?preview=true');  
    }

    assertFountainHomeLink(){
        this.elements.FountainHomeLink().click(); 
    }

    assertFountainHelpLink(){
        this.elements.FountainHelpLink().click(); 
    }

    assertViewAvailableOpportunitiesLink5(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(5).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink5(){
        this.elements.ViewAvailableOpportunitiesLink().eq(5).click();        
    }

    assertViewAvailableOpportunitiesLink6(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(6).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink6(){
        this.elements.ViewAvailableOpportunitiesLink().eq(6).click();        
    }

    assertViewAvailableOpportunitiesLink7(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(7).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink7(){
        this.elements.ViewAvailableOpportunitiesLink().eq(7).click();        
    }

    assertViewAvailableOpportunitiesLink8(){        
        this.elements.ViewAvailableOpportunitiesLink().eq(8).should("be.visible");                
    }

    clickViewAvailableOpportunitiesLink8(){
        this.elements.ViewAvailableOpportunitiesLink().eq(8).click();        
    }


}



module.exports = new careerslink();