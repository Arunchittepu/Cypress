class aboutlinks{

    elements = {
        
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       aboutlnk: () => cy.contains("About"),
       whoweare: () => cy.contains("Who We Are"),
       greatFood: () => cy.contains("Great Food"),
       givingBack: () => cy.contains("Giving Back"),
       hoverAbout: () => cy.xpath("//span[contains(text(),'About')]"), 

       whoWeAreImg: () => cy.get('.promo-frame'),
       whoweareheadingtxt: () => cy.xpath("//h1[contains(text(),'Who we are')]"),
       whoWeAreImg1: () => cy.get(':nth-child(5) > .flex-wrapper > .img-wrapper > .desktop-img'),
       ourHistory: () => cy.xpath("//p[contains(text(),'Our history')]"),
       whyWeareclosedOnSunday: () => cy.xpath(`//h4[contains(text(),"Why we're closed on Sundays")]`),
       whoWeAreImg2: () => cy.get('.img-mobile > img'),
       readMoreaboutOurCultureNValue: () => cy.xpath("//a[contains(text(),'Read more about our culture and values')]"),
       whoWeAreImg3: () => cy.get("img[alt='Picture of Truett Cathy sitting in a chair']"),
       moreThanChicken: () => cy.xpath("//h4[contains(text(),'More than chicken')]"),
       whoWeAreImg4: () => cy.get("img[alt='Who We Are CA more than chicken desktop']"),
       AboutChickfilAWhoweareTitle: () => cy.xpath("//h1[contains(text(),'About Chick-fil-A: Who we are')]"),
       AboutChickfilAWhoweareSubTitle: () => cy.xpath("//strong[contains(text(),'When was Chick-fil-A founded?')]"),
       HowChickfilACanadaisgivingbacktolocalcommunitiesTitle: () => cy.xpath("//h1[contains(text(),'How Chick-fil-A Canada is giving back to local com')]"),
       HowChickfilACanadaisgivingbacktolocalcommunitiesSubTitle: () => cy.xpath("//strong[contains(text(),'Caring for our communities')]"),
       AboutWhoWeAreCaptionImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2021/09/Canada%20Stories/ONE_9754.jpg?h=800&w=1200&la=en']"),
       RemarkableFutureScholarshipLink: () => cy.xpath("//a[contains(text(),'Chick-fil-A Remarkable Futures Scholarship')]"),
       
       greatFoodImg: () => cy.get('.promo-frame'),
       greatFoodImg1: () => cy.get(':nth-child(3) > .flex-wrapper > .img-wrapper > .desktop-img'),
       greatFoodImg2: () => cy.get(':nth-child(6) > .flex-wrapper > .img-wrapper > .desktop-img'),
       greatFoodImg3: () => cy.get(':nth-child(7) > .flex-wrapper > .img-wrapper > .desktop-img'),
       greatFoodImg4: () => cy.get("img[alt='Closeup of Chick-fil-A® Spicy Chicken Sandwich Meal with Waffle Potato Fries™ and an Iced Tea']"),
       greatFoodImg5: () => cy.xpath("//img[@alt='Chicken Sandwich']"),
       greatFoodHeading: () => cy.xpath("//h1[contains(text(),'Great Food')]"),       
       Realchickenrigorousstandards: () => cy.xpath("//h4[contains(text(),'Real chicken, rigorous standards')]"),
       Foodyoucansmileabout: () => cy.xpath("//p[contains(text(),'Food you can smile about')]"),
       Carefullycraftedrecipes: () => cy.xpath("//h4[contains(text(),'Carefully crafted recipes')]"),
       Whatavisitisallabout: () => cy.xpath("//h4[contains(text(),'What a visit is all about')]"),
       GettoknowourfoodBtn: () => cy.xpath("//a[contains(text(),'Get to know our food')]"),
       ItsOurPleasureToServeYou: () => cy.xpath(`//h1[contains(text(),"It's our pleasure to serve you")]`),
       OrderCarryOut: () => cy.xpath("//p[contains(text(),'Order carry-out')]"),
        
       ReadHowCanadaOperatorsareGivinBack: () => cy.xpath("//a[contains(text(),'Read how Canada Operators are giving back')]"),
       givingBackHeading: () => cy.xpath("//h1[contains(text(),'Giving back')]"),
       Caringforothersthroughourfood: () => cy.xpath("//h4[contains(text(),'Caring for others through our food')]"),
       ChickfilASharedTable: () => cy.xpath("//p[contains(text(),'Chick-fil-A Shared Table')]"),
       Caringforourplanet: () => cy.xpath("//h4[contains(text(),'Caring for our planet')]"),
       Viewour2022ImpactReport: () => cy.xpath("//a[contains(text(),'View our 2022 Impact Report')]"),
       Caringforpeople: () => cy.xpath("//h4[contains(text(),'Caring for people')]"),
       Caringforourcommunities: () => cy.xpath("//h4[contains(text(),'Caring for our communities')]"),
       ReadourGlobalImpactReport: () => cy.xpath("//h4[contains(text(),'Read our Global Impact Report')]"),
       ViewreportBtn: () => cy.xpath("//a[contains(text(),'View report')]"),  
       GivingBackImg: () => cy.get('.promo-frame'),
       GivingBackImg1: () =>   cy.get(':nth-child(3) > .flex-wrapper > .img-wrapper > .desktop-img'),      
       GivingBackImg2: () => cy.get("img[alt='Giving back CA caring for planet desktop']"),
       GivingBackImg3: () => cy.get(':nth-child(6) > .flex-wrapper > .img-wrapper > .desktop-img'),
       GivingBackImg4: () => cy.get(':nth-child(6) > .flex-wrapper > .img-wrapper > .desktop-img'),
       GivingBackImg5: () => cy.get(':nth-child(8) > .flex-wrapper > .img-wrapper > .desktop-img'),
       GlobalImpactReportTitle: () => cy.xpath("//span[contains(text(),'2022 Chick-fil-A Global Impact Report')]"),
       GlobalImpactReportSubTitle: () => cy.xpath("//span[contains(text(),'Serving and strengthening communities through corp')]"),

    }

    clickaboutlnk(){
        this.elements.aboutlnk().click();
    }

    hoverAboutlink(){
        this.elements.hoverAbout().trigger('mouseover');       
    }

    assertAboutPageTitle() {
        cy.fixture('aboutsublinks').then((data) =>{
        this.elements.pageTitle().should('eq', data.homepagetitle);
        })
    }

    assertAboutPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl);
    }

    assertWhoweAreLink(){
        this.elements.whoweare().invoke('show');
        this.elements.whoweare().should('be.visible');
    }

    assertGreatFoodLink(){
        this.elements.greatFood().should("be.visible");
    }

    assertGivingBackLink(){
        this.elements.givingBack().should("be.visible");  
    }    

    clickWhoWeAre(){
        this.elements.whoweare().click({force: true});
    }

    assertWhoWeArePageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about/who-we-are-page');
    }

    assertwhoWeAreImg(){
        this.elements.whoWeAreImg().should("be.visible", {force: true});
    }

    assertwhoweareheadingtxt(){
        this.elements.whoweareheadingtxt().should("be.visible");
    }

    assertourHistory(){
        this.elements.ourHistory().should("be.visible");
    }

    assertwhyWeareclosedOnSunday(){
        this.elements.whyWeareclosedOnSunday().should("be.visible"); 
    }

    assertwhoWeAreImg1(){
        this.elements.whoWeAreImg1().should("be.visible");
    }

    assertreadMoreaboutOurCultureNValue(){
        this.elements.readMoreaboutOurCultureNValue().should("be.visible");
    }

    clickreadMoreaboutOurCultureNValue(){
        this.elements.readMoreaboutOurCultureNValue().click();
    }

    assertAboutChickfilAWhoweareUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about-chick-fil-a-who-we-are'); 
    }
    
    assertRemarkableFutureScholarshipLink(){
        this.elements.RemarkableFutureScholarshipLink().should("be.visible");
    }
    
    assertAboutWhoWeAreCaptionImg(){
        this.elements.AboutWhoWeAreCaptionImg().should("be.visible");
    }


    assertAboutChickfilAWhoweareTitle(){
        this.elements.AboutChickfilAWhoweareTitle().should("be.visible");
    }

    assertAboutChickfilAWhoweareSubTitle(){
        this.elements.AboutChickfilAWhoweareSubTitle().should("be.visible");
    }



    assertReadHowCanadaOperatorsareGivinBackBtn(){
        this.elements.ReadHowCanadaOperatorsareGivinBack().should("be.visible");
    }

    clickReadHowCanadaOperatorsareGivinBackBtn(){
        this.elements.ReadHowCanadaOperatorsareGivinBack().click();
    }

    assertHowChickfilACanadaisgivingbacktolocalcommunitiesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/how-chick-fil-a-canada-is-giving-back-to-local-communities'); 
    }

    assertHowChickfilACanadaisgivingbacktolocalcommunitiesTitle(){
        this.elements.HowChickfilACanadaisgivingbacktolocalcommunitiesTitle().should("be.visible");
    }

    assertHowChickfilACanadaisgivingbacktolocalcommunitiesSubTitle(){
        this.elements.HowChickfilACanadaisgivingbacktolocalcommunitiesSubTitle().should("be.visible");
    }


    assertwhoWeAreImg2(){
        this.elements.whoWeAreImg2().should("be.visible");        
    }

    assertmoreThanChicken(){
        this.elements.moreThanChicken().should("be.visible");
    }

    assertwhoWeAreImg3(){
        this.elements.whoWeAreImg3().should("be.visible");       
    }

    assertwhoWeAreImg4(){
        this.elements.whoWeAreImg4().should("be.visible");
    }

    clickGreatFoodlink(){        
        this.elements.greatFood().click({force: true});                             
    }

    assertgreatFoodHeadingUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about/great-food-page'); 
    }

    assertgreatFoodImg(){
        this.elements.greatFoodImg().should("be.visible", {force: true});
    }

    assertgreatFoodHeading(){
        this.elements.greatFoodHeading().should("be.visible"); 
    }

    assertRealchickenrigorousstandards(){
        this.elements.Realchickenrigorousstandards().should("be.visible"); 
    }
    
    assertgreatFoodImg1(){
        this.elements.greatFoodImg1().should("be.visible");
    }

    assertFoodyoucansmileabout(){
        this.elements.Foodyoucansmileabout().should("be.visible"); 
    }

    assertCarefullycraftedrecipes(){
        this.elements.Carefullycraftedrecipes().should("be.visible"); 
    }

    assertgreatFoodImg2(){
        this.elements.greatFoodImg2().should("be.visible"); 
    }
    
    assertWhatavisitisallabout(){
        this.elements.Whatavisitisallabout().should("be.visible");
    }

    assertgreatFoodImg3(){
        this.elements.greatFoodImg3().should("be.visible"); 
    }

    assertGettoknowourfoodBtn(){
        this.elements.GettoknowourfoodBtn().should("be.visible"); 
    }

    clickGettoknowourfoodBtn(){
        this.elements.GettoknowourfoodBtn().click(); 
    }
    
    assertItsOurPleasureToServeYou(){
        this.elements.ItsOurPleasureToServeYou().should("be.visible");
    }

    assertOrderCarryOut(){
        this.elements.OrderCarryOut().should("be.visible"); 
    }

    clickOrderCarryOut(){
        this.elements.OrderCarryOut().click(); 
    }

    assertOrderCarryOutUrl(){
        this.elements.urlAssert().should('include', Cypress.config().orderPageUrl + 'location'); 
    }

    assertgreatFoodImg4(){
        this.elements.greatFoodImg4().should("be.visible");
    }
    
    assertgreatFoodImg5(){
        this.elements.greatFoodImg5().should("be.visible");
    }

    clickGivingBackLink(){
        this.elements.givingBack().click({force: true});
    }

    assertGivingBackURL(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about/giving-back-page'); 
    }

    assertGivingBackImg(){
        this.elements.GivingBackImg().invoke('show');
        this.elements.GivingBackImg().should("be.visible");
    }

    assertGivingBackHead(){
        this.elements.givingBackHeading().should("be.visible");
    }

    assertCaringforothersthroughourfood(){
        this.elements.Caringforothersthroughourfood().should("be.visible");
    }

    assertChickfilASharedTable(){
        this.elements.ChickfilASharedTable().should("be.visible");
    }

    assertCaringforourplanet(){
        this.elements.Caringforourplanet().should("be.visible");
    }

    assertViewour2022ImpactReport(){
        this.elements.Viewour2022ImpactReport().should("be.visible");
    }

    clickViewour2022ImpactReport(){
        this.elements.Viewour2022ImpactReport().click();
    }

    assertCaringforpeople(){
        this.elements.Caringforpeople().should("be.visible");
    }

    assertCaringforourcommunities(){
        this.elements.Caringforourcommunities().should("be.visible");
    }

    assertReadourGlobalImpactReport(){
        this.elements.ReadourGlobalImpactReport().should("be.visible");
    }

    assertViewreportBtn(){
        this.elements.ViewreportBtn().should("be.visible");
    }

    clickViewreportBtn(){  
        cy.get('a').invoke('removeAttr', 'target')  
        this.elements.ViewreportBtn().invoke('removeAttr', 'target').click()
    }

    assertGivingBackImg1(){
        this.elements.GivingBackImg1().should("be.visible");
    }

    assertGivingBackImg2(){
        this.elements.GivingBackImg2().should("be.visible");
    }

    assertGivingBackImg3(){
        this.elements.GivingBackImg3().should("be.visible");
    }

    assertGivingBackImg4(){
        this.elements.GivingBackImg4().should("be.visible");
    }

    assertGivingBackImg5(){
        this.elements.GivingBackImg5().should("be.visible");
    }

    assertGlobalImpactReportURL(){
        this.elements.urlAssert().should('include', 'https://chick-fil-a-2022-global-impact-report.com/'); 
    }

    assertGlobalImpactReportTitle(){
        this.elements.GlobalImpactReportTitle().should("be.visible");
    }

    assertGlobalImpactReportSubTitle(){
        this.elements.GlobalImpactReportSubTitle().should("be.visible");
    }
}

module.exports = new aboutlinks();
