class aboutlinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.xpath("//header/div[1]/div[1]/a[1]/span[1]"),
       aboutlnk: () => cy.contains("About"),
       whoweare: () => cy.contains("Who We Are"),
       greatFood: () => cy.contains("Great Food"),
       givingBack: () => cy.contains("Giving Back"),
       hoverAbout: () => cy.get("div.subnav a[href='/about/who-we-are-page']"), 

       whoWeAreImg: () => cy.get('.promo-frame').find('img',{force: true}),
       whoweareheadingtxt: () => cy.xpath("//h1[contains(text(),'Who we are')]"),
       ourHistory: () => cy.xpath("//p[contains(text(),'Our history')]"),
       whyWeareclosedOnSunday: () => cy.xpath(`//h4[contains(text(),"Why we're closed on Sundays")]`),
       whoWeAreImg1: () => cy.xpath("//body/div[1]/div[4]/div[5]/div[1]").find('img',{force: true}),
       readMoreaboutOurCultureNValue: () => cy.xpath("//a[contains(text(),'Read more about our culture and values')]"),
       whoWeAreImg2: () => cy.xpath("//body/div[1]/div[4]/div[5]/div[1]").find('img',{force: true}),
       moreThanChicken: () => cy.xpath("//h4[contains(text(),'More than chicken')]"),
       whoWeAreImg3: () => cy.xpath("//body/div[1]/div[4]/section[2]/div[1]/div[1]").find('img',{force: true}),

       greatFoodImg: () => cy.get('.promo-frame').find('img',{force: true}),
       greatFoodImg1: () => cy.xpath("//body/div[1]/div[4]/section[1]/div[1]/div[1]").find('img',{force: true}),
       greatFoodImg2: () => cy.xpath("//body/div[1]/div[4]/section[2]/div[1]/div[1]").find('img',{force: true}),
       greatFoodImg3: () => cy.xpath("//body/div[1]/div[4]/section[3]/div[1]/div[1]").find('img',{force: true}),
       greatFoodImg4: () => cy.xpath("//body/div[1]/div[4]/div[5]").find('img',{force: true}),
       
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
    }

    clickLogo(){
        this.elements.logolink().click({force: true});
        this.elements.urlAssert().should('include', 'https://www.chick-fil-a.ca/');
    }

    clickaboutlnk(){
        this.elements.aboutlnk().click();
        this.elements.urlAssert().should('include', '/');
        this.elements.whoweare().should('be.visible');
        this.elements.greatFood().should("be.visible");
        this.elements.givingBack().should("be.visible");        
    }

    hoverAboutlink(){
        this.elements.hoverAbout().trigger('mouseover');
        this.elements.urlAssert().should('include', '/');  
        this.elements.whoweare().should('be.visible');
        this.elements.greatFood().should("be.visible");
        this.elements.givingBack().should("be.visible");
    }

    clickWhoWeAre(){
        this.elements.whoweare().click();
        this.elements.urlAssert().should('include', '/about/who-we-are-page');
        this.elements.whoWeAreImg().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/Who%20We%20Are%20CA%20hero%20desktop.jpg');
        this.elements.whoweareheadingtxt().should("be.visible");
        this.elements.ourHistory().should("be.visible");
        this.elements.whyWeareclosedOnSunday().should("be.visible");        
        this.elements.whoWeAreImg1().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Truett-93_History.png?h=448&w=518&la=en');
        this.elements.readMoreaboutOurCultureNValue().should("be.visible");        
        this.elements.whoWeAreImg2().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Truett-93_History.png?h=448&w=518&la=en');
        this.elements.moreThanChicken().should("be.visible"); 
        this.elements.whoWeAreImg3().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Who%20We%20Are%20CA_more%20than%20chicken%20mobile.jpeg?h=261&w=368&la=en');
    }
    clickGreatFoodlink(){        
        this.elements.greatFood().click({force: true});
        this.elements.urlAssert().should('include', '/about/great-food-page'); 
        this.elements.greatFoodImg().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Great%20Food%20header/Great%20Food%20CA_header%20desktop.jpeg');
        this.elements.greatFoodHeading().should("be.visible");
        this.elements.Realchickenrigorousstandards().should("be.visible");
        this.elements.greatFoodImg1().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Homepage%20Images/CFA%20sandwich_mobile.jpg?h=165&w=368&la=en');
        this.elements.Foodyoucansmileabout().should("be.visible");
        this.elements.Carefullycraftedrecipes().should("be.visible");
        this.elements.greatFoodImg2().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Great%20Food%20header/Salad-great-food-mobile.png?h=261&w=368&la=en');
        this.elements.Whatavisitisallabout().should("be.visible"); 
        this.elements.greatFoodImg3().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/Chick-fil-A®-Spicy-Chicken-Sandwich-Meal-Canada-mobile.jpeg?h=261&w=368&la=en');
        this.elements.GettoknowourfoodBtn().should("be.visible"); 
        this.elements.ItsOurPleasureToServeYou().should("be.visible");
        this.elements.OrderCarryOut().should("be.visible"); 
        //this.elements.greatFoodImg4().should('have.attr', 'src', '/-/media/images/cfacom/covid/cvd-sandwich.png?h=576&w=744&la=en&hash=723655E1810D83FDBC21A291378985D7');
    }

    clickGivingBackLink(){
        this.elements.givingBack().click({force: true});
        this.elements.urlAssert().should('include', '/about/giving-back-page'); 
        this.elements.GivingBackImg().should('have.attr', 'src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/About%20Pages%20Images/RGB_%20Win%20the%20Heart_cfa_png.png/CFA2306023_TeamMemberHeartShape_Desktop_1500x370__AQ1.jpg');
        this.elements.givingBackHeading().should("be.visible");
        this.elements.Caringforothersthroughourfood().should("be.visible");
        this.elements.ChickfilASharedTable().should("be.visible");
        this.elements.Caringforourplanet().should("be.visible");
        this.elements.Viewour2022ImpactReport().should("be.visible");
        this.elements.Caringforpeople().should("be.visible");
        this.elements.Caringforourcommunities().should("be.visible");
        this.elements.ReadourGlobalImpactReport().should("be.visible");
        this.elements.ViewreportBtn().should("be.visible");
    }
}

module.exports = new aboutlinks();
