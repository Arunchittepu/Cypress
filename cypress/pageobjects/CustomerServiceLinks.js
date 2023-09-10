class CustomerServiceLinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       
        CustomerServicelink: () => cy.xpath("//span[contains(text(),'Customer service')]"),
       whoweare: () => cy.contains("Who We Are"),
       greatFood: () => cy.contains("Great Food"),
       givingBack: () => cy.contains("Giving Back"),
       hoverAbout: () => cy.get("div.subnav a[href='/about/who-we-are-page']"), 
       CustomerSupportHeadText: () => cy.xpath("//h1[contains(text(),'Customer support')]"),
       CustomerSupportHeadImg: () => cy.xpath("//div[@id='top-hero']"),
       ReadourFAQsHead: () => cy.xpath("//h1[contains(text(),'Read our FAQs')]"),
       faq1: () => cy.xpath("//span[contains(text(),'Where is Chick-fil-A® headquarters located?')]"),
       faqAns1: () => cy.xpath("//p[contains(text(),'The Chick-fil-A Support Center is located just sou')]"),
       faq2: () => cy.xpath("//span[contains(text(),'What is Chick-fil-A?')]"),
       faqAns2: () => cy.xpath("//p[contains(text(),'Chick-fil-A® is the #1 chicken restaurant in the U')]"),
       faq3: () => cy.xpath("//span[contains(text(),'Why are Chick-fil-A® restaurants closed on Sundays')]"),
       faqAns3: () => cy.xpath("//p[contains(text(),'All Chick-fil-A restaurants are closed on Sunday t')]"),
       faq4: () => cy.xpath("//span[contains(text(),'What are the hours of Chick-fil-A® restaurants?')]"),
       faqAns4: () => cy.xpath("//p[contains(text(),'The standard operating hours for Chick-fil-A resta')]"),
       faq5: () => cy.xpath("//span[contains(text(),'How do we decide where to build a Chick-fil-A® res')]"),
       faqAns5: () => cy.xpath("//p[contains(text(),'Chick-fil-A opens a limited number of restaurants ')]"),
       faq40: () => cy.xpath("//span[contains(text(),'I was given my gift card as a gift; how do I know ')]"),       
       faqAns40: () => cy.xpath("//p[contains(text(),'Please note that Canada gift cards have “Canada” printed')]"),


    }

    assertCustomerServicelink(){
        this.elements.CustomerServicelink().should("be.visible");        
    }


    clickCustomerServicelink(){
        this.elements.CustomerServicelink().click({force: true});        
    }

    assertCustomerSupportUrl(){        
        this.elements.urlAssert().should('include', Cypress.config().baseUrl+ 'customer-support');                
    }


    assertReadourFAQsHead(){        
        this.elements.ReadourFAQsHead().should("be.visible");                
    }

    

    testReadOurFAQsSection(){                                
        cy.fixture("CustomerServiceLinks").then((data) => {
                data.forEach((userdata) => {
                   
                cy.xpath("//span[contains(text(), '" +userdata.faq + "')]").should("be.visible");  
                cy.xpath("//span[contains(text(), '" + userdata.faq + "')]").eq(0).click();
                
                cy.xpath("//p[contains(text(), '" + userdata.faqans + "')]").should("be.visible");
                cy.xpath("//span[contains(text(), '" + userdata.faq + "')]").eq(0).click();          
                });
            });
        };

}



module.exports = new CustomerServiceLinks();