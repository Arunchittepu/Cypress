class aboutlinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       aboutlnk: () => cy.contains("About"),
       whoweare: () => cy.contains("Who We Are"),
       greatFood: () => cy.contains("Great Food"),
       givingBack: () => cy.contains("Giving Back"),
       hoverAbout: () => cy.get("div.subnav a[href='/about/who-we-are-page']"), 

       whoWeAreImg: () => cy.get("img[srcset='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/Who%20We%20Are%20CA%20hero%20desktop.jpg"),
       whoweareheadingtxt: () => cy.xpath("//h1[contains(text(),'Who we are')]"),
       whoWeAreImg1: () => cy.get("img[srcset='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/Who%20We%20Are%20CA%20hero%20desktop.jpg']"),
       ourHistory: () => cy.xpath("//p[contains(text(),'Our history')]"),
       whyWeareclosedOnSunday: () => cy.xpath(`//h4[contains(text(),"Why we're closed on Sundays")]`),
       whoWeAreImg2: () => cy.get("img[src='https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/Stories%20Images/2019/08/EddieWhite/dwarf-house-web.jpg?h=960&w=1440&la=en']"),
       readMoreaboutOurCultureNValue: () => cy.xpath("//a[contains(text(),'Read more about our culture and values')]"),
       whoWeAreImg3: () => cy.get("img[alt='Picture of Truett Cathy sitting in a chair']"),
       moreThanChicken: () => cy.xpath("//h4[contains(text(),'More than chicken')]"),
       whoWeAreImg4: () => cy.get("img[alt='Who We Are CA more than chicken desktop']"),

       greatFoodImg: () => cy.get("img[srcset='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Great%20Food%20header/Great%20Food%20CA_header%20desktop.jpeg", {force: true}),
       greatFoodImg1: () => cy.get("img[srcset='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Great%20Food%20header/Great%20Food%20CA_header%20desktop.jpeg']"),
       greatFoodImg2: () => cy.get("img[2][src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Homepage%20Images/CFA%20sandwich_desktop.jpg?h=270&w=600&la=en']"),
       greatFoodImg3: () => cy.get("img[2][src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Great%20Food%20header/Salad%20Great%20Food%20Page%20image%20compressed.png?h=300&w=600&la=en']"),
       greatFoodImg4: () => cy.get("img[alt='Closeup of Chick-fil-A® Spicy Chicken Sandwich Meal with Waffle Potato Fries™ and an Iced Tea']"),
       greatFoodImg5: () => cy.get("img[alt='Chicken Sandwich']"),
       greatFoodHeading: () => cy.xpath("//h1[contains(text(),'Great Food')]"),       
       Realchickenrigorousstandards: () => cy.xpath("//h4[contains(text(),'Real chicken, rigorous standards')]"),
       Foodyoucansmileabout: () => cy.xpath("//p[contains(text(),'Food you can smile about')]"),
       Carefullycraftedrecipes: () => cy.xpath("//h4[contains(text(),'Carefully crafted recipes')]"),
       Whatavisitisallabout: () => cy.xpath("//h4[contains(text(),'What a visit is all about')]"),
       GettoknowourfoodBtn: () => cy.xpath("//a[contains(text(),'Get to know our food')]"),
       ItsOurPleasureToServeYou: () => cy.xpath(`//h1[contains(text(),"It's our pleasure to serve you")]`),
       OrderCarryOut: () => cy.xpath("//p[contains(text(),'Order carry-out')]"),
       
       GivingBackImg: () => cy.get('.promo-frame').find('img',{force: true}),
       givingBackHeading: () => cy.xpath("//h1[contains(text(),'Giving back')]"),
       Caringforothersthroughourfood: () => cy.xpath("//h4[contains(text(),'Caring for others through our food')]"),
       ChickfilASharedTable: () => cy.xpath("//p[contains(text(),'Chick-fil-A Shared Table')]"),
       Caringforourplanet: () => cy.xpath("//h4[contains(text(),'Caring for our planet')]"),
       Viewour2022ImpactReport: () => cy.xpath("//a[contains(text(),'View our 2022 Impact Report')]"),
       Caringforpeople: () => cy.xpath("//h4[contains(text(),'Caring for people')]"),
       Caringforourcommunities: () => cy.xpath("//h4[contains(text(),'Caring for our communities')]"),
       ReadourGlobalImpactReport: () => cy.xpath("//h4[contains(text(),'Read our Global Impact Report')]"),
       ViewreportBtn: () => cy.xpath("//a[contains(text(),'View report')]"),  
       GivingBackImg1: () =>   cy.get("img[srcset='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/RGB_%20Win%20the%20Heart_cfa_png.png/CFA2306023_TeamMemberHeartShape_Desktop_1500x370__AQ1.jpg']"),      
       GivingBackImg2: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Fresh%20food%20donation%20box%20with%20eggs_compressed.jpg?h=301&w=600&la=en']"),
       GivingBackImg3: () => cy.get("img[alt='Giving back CA caring for planet desktop']"),
       GivingBackImg4: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/2022%20Scholarships/Other%20Images/Module-Image-(600x300)-4.png?h=300&w=600&la=en']"),
       GivingBackImg5: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/yonge-street-mission-2.jpg?h=300&w=600&la=en']"),
    
    }

    clickaboutlnk(){
        this.elements.aboutlnk().click();
    }

    hoverAboutlink(){
        this.elements.hoverAbout().trigger('mouseover');       
    }

    assertAboutPageTitle() {
        cy.fixture('storiessublinks').then((data) =>{
        aboutlinks.elements.pageTitle().should('eq', data.homepagetitle);
        })
    }

    assertAboutPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl);
    }

    assertWhoweAreLink(){
        this.elements.whoweare().should('be.visible');
    }

    assertGreatFoodLink(){
        this.elements.greatFood().should("be.visible");
    }

    assertGivingBackLink(){
        this.elements.givingBack().should("be.visible");  
    }    

    clickWhoWeAre(){
        this.elements.whoweare().click();
    }

    assertWhoWeArePageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about/who-we-are-page');
    }

    assertwhoWeAreImg(){
        //this.elements.whoWeAreImg().should("be.visible", {force: true});
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
        //this.elements.whoWeAreImg1().should("be.visible");
    }

    assertreadMoreaboutOurCultureNValue(){
        this.elements.readMoreaboutOurCultureNValue().should("be.visible");
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
        //this.elements.greatFoodImg().should("be.visible", {force: true});
    }

    assertgreatFoodHeading(){
        this.elements.greatFoodHeading().should("be.visible"); 
    }

    assertRealchickenrigorousstandards(){
        this.elements.Realchickenrigorousstandards().should("be.visible"); 
    }
    
    assertgreatFoodImg1(){
        //this.elements.greatFoodImg1().should("be.visible");
    }

    assertFoodyoucansmileabout(){
        this.elements.Foodyoucansmileabout().should("be.visible"); 
    }

    assertCarefullycraftedrecipes(){
        this.elements.Carefullycraftedrecipes().should("be.visible"); 
    }

    assertgreatFoodImg2(){
        //this.elements.greatFoodImg2().should("be.visible"); 
    }
    
    assertWhatavisitisallabout(){
        this.elements.Whatavisitisallabout().should("be.visible");
    }

    assertgreatFoodImg3(){
        //this.elements.greatFoodImg3().should("be.visible"); 
    }

    assertGettoknowourfoodBtn(){
        this.elements.GettoknowourfoodBtn().should("be.visible"); 
    }
    
    assertItsOurPleasureToServeYou(){
        this.elements.ItsOurPleasureToServeYou().should("be.visible");
    }

    assertOrderCarryOut(){
        this.elements.OrderCarryOut().should("be.visible"); 
    }

    assertgreatFoodImg4(){
        this.elements.greatFoodImg4().should("be.visible");
    }
    
    assertgreatFoodImg5(){
        this.elements.greatFoodImg5().should("be.visible");
    }

    clickGivingBackLink(){
        this.elements.givingBack().click({force: true});
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'about/giving-back-page'); 
        this.elements.GivingBackImg().should("be.visible");
        this.elements.givingBackHeading().should("be.visible");
        this.elements.Caringforothersthroughourfood().should("be.visible");
        this.elements.ChickfilASharedTable().should("be.visible");
        this.elements.Caringforourplanet().should("be.visible");
        this.elements.Viewour2022ImpactReport().should("be.visible");
        this.elements.Caringforpeople().should("be.visible");
        this.elements.Caringforourcommunities().should("be.visible");
        this.elements.ReadourGlobalImpactReport().should("be.visible");
        this.elements.ViewreportBtn().should("be.visible");
        this.elements.GivingBackImg1().should("be.visible");
        this.elements.GivingBackImg2().should("be.visible");
        this.elements.GivingBackImg3().should("be.visible");
        this.elements.GivingBackImg4().should("be.visible");
        this.elements.GivingBackImg5().should("be.visible");
    }
}

module.exports = new aboutlinks();
