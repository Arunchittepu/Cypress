class storieslinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       storieslnk: () => cy.contains("Stories"),
       storiesSlider: () => cy.xpath("//a[contains(text(),'Seven fun facts about the Chick-fil-A Chicken Sandwich')]"),
       whichChickFilASauceImg: () => cy.get("img[alt='Person holding Chick-fil-A® Chicken Sandwich with Waffle Potato Fries® and Chick-fil-A® Lemonade in the background']"),
       whichChickFilASauceTxtLnk: () => cy.xpath("//a[contains(text(),'Which Chick-fil-A sauce is your perfect match?')]"),
       
       theLittleThingsSection: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/large-Al-Jones-and-Family-on-Red-Couch.jpg?h=854&w=1280&la=en']"),
       theCoopSection: () => cy.xpath("//h3[contains(text(),'The Coop')]"),
       MentorshipSection: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Story%20Images/Mentorship%20care%20and%20paying%20it%20forward/Header%20image.jpg?h=960&w=1440&la=en']"),
       letsBeFriend: () => cy.xpath("//p[contains(text(),'Let’s be friends')]"),
       Story: () => cy.xpath("//span[contains(text(),'Stories')]"),
       hoverStories: () => cy.get("div.subnav a[href='/stories/inside-chick-fil-a']"),      
       InsideChickfilAlnk: () => cy.contains("Inside Chick-fil-A"),
       
       InsideChickfilCategoryTitle: () => cy.xpath("//h1[contains(text(),'Inside Chick-fil-A')]"),
       InsideChickfilSlider: () => cy.xpath("//a[contains(text(),'Where does the “A” in Chick-fil-A come from?')]"),
       WhatVisitAllAboutImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Story%20Images/Header-allow-us-to-introduce-ourselves_compressed.jpg?h=960&w=1440&la=en']"),
       WhatVisitAllAbout: () => cy.xpath(`//a[contains(text(),"Here's what a visit to a Chick-fil-A restaurant is all about")]`),
       FiveThingsYouNeedtoKnowImg: () => cy.get("img[alt='Close up photo of Chick-fil-A Waffle Potato Fries']"),
       FiveThingsYouNeedtoKnow: () => cy.xpath("//a[contains(text(),'Five Things You Need to Know About Chick-fil-A Waffle Potato Fries')]"),
       AnnouncesNewVaughanImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Story%20Images/Vaughan/Chick-fil-A%20Vaughn.JPG?h=666&w=1000&la=en']"),
       AnnouncesNewVaughan: () => cy.xpath("//a[contains(text(),'Chick-fil-A Announces New Vaughan, Ontario Restaurant to Open on Thursday, November 17')]"),
       FromBasketCourtImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/large-Al-Jones-and-Family-on-Red-Couch.jpg?h=854&w=1280&la=en'"),
       FromBasketCourt: () => cy.get('a').should('include.text','From the basketball'),
       
       IntheCommunity: () => cy.contains("In the Community"),
       InTheCategoryTitle: () => cy.xpath("//h1[contains(text(),'In the Community')]"),
       InTheCatgorySlider: () => cy.xpath("//a[contains(text(),'The 2024 Chick-fil-A True Inspiration Awards™ Applications are open')]"),
       HubOfOpportunityImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2021/10/Devonshire%20Canada/UHC_Devonshire.JPG?h=666&w=1000&la=en'"),
       HubOfOpportunity: () => cy.xpath("//a[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to create meaningful partnerships to positively impact the Windsor-Essex Community')]"),
       FightingHungerWithSecondHarvestImg: () => cy.get("img[alt='a box of fresh produce including eggs, carrots, apples and vegetables'"),
       FightingHungerWithSecondHarvest: () => cy.xpath("//a[contains(text(),'Fighting hunger with Second Harvest'"),
       TrueInspirationAwrdImg: () => cy.get("img[alt='a group of people holding a large True Inspiration award check'"),
       TrueInspirationAwrd: () => cy.xpath("//a[contains(text(),'How a US$300,000 True Inspiration Awards™ Grant is helping Toronto’s Yonge Street Mission rebuild lives'"),
       SharedTableProgramImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Headliners/Canada/About%20CFA/Shared%20Table-14.jpg?h=998&w=1440&la=en']"),
       SharedTableProgram: () => cy.xpath("//a[contains(text(),'The Chick-fil-A Shared Table Program'"),
       
       News: () => cy.contains("News"),
       NewsTitle: () => cy.xpath("//h1[contains(text(),'News')]"),
       NewsSlider: () => cy.xpath("//a[contains(text(),'Chick-fil-A springs into the season with Watermelon Mint beverage flavours'"),
       TheLatestNews: () => cy.xpath("//h3[contains(text(),'The latest news')]"),
       MillionInScholarshipsImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2022/04/Canada%20Scholarship%20Announcement/CFA%20Scholars%202022_Winners%206.jpg?h=695&w=1000&la=en']"),
       MillionInScholarships: () => cy.xpath("//a[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships to Restaurant Team Members'"),
       NewTorontoRestautantImg: () =>   cy.get("img[alt='Headshot of Talal Chaudhry, the Owner/Operator of Chick-fil-A Toronto Eaton Centre']"),
       NewTorontoRestautant: () => cy.xpath("//a[contains(text(),'Chick-fil-A announces new Toronto restaurant to open on Thursday, May 25 at CF Toronto Eaton Centre'"),
       AnnouncesEightRestaurantImg: () =>   cy.get("img[alt='New Owner/Operator of Chick-fil-A North Barrie, Lincoln Nikkel, stands outside the restaurant smiling']"),
       AnnouncesEightRestaurant: () => cy.get('a').should('include.text','Announces Eighth Restaurant Location in Canada to Open on Thursday, March 9 in Barrie, Ontario'),              
       OpenNewRestaurantImg: () => cy.get("img[alt='Chick-fil-a']"),
       OpenNewRestaurant: () => cy.get('a').should('include.text','to Open New Restaurants in Kitchener and Toronto, Continuing Canadian Expansion'),       
       TheChickfilASharedTableProgramTxt: () => cy.xpath("//h1[contains(text(),'The Chick-fil-A Shared Table Program')]"),
       SharedTableImpactTxt: () => cy.xpath("//strong[contains(text(),'Shared Table Impact')]"),
       HubofOpportunitiesaimPageUrl: () => cy.xpath("//h1[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to ')]"),
       HubofOpportunitiesaimPageSubTitle: () => cy.xpath("//p[contains(text(),'Chick-fil-A Donates US$25,000 to Nonprofit Organiz')]"),
       HubofOpportunitiesaimParaLink: () => cy.xpath("//a[contains(text(),'UHC – Hub of Opportunities')]"),
    }

    clickstorieslnk(){
        this.elements.storieslnk().click();   
    }

    assertstoriesSlider(){
        this.elements.storiesSlider().should('be.visible');
    }

    assertwhichChickFilASauceImg(){
        this.elements.whichChickFilASauceImg().should('be.visible');
    }

    assertStoriesPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories');
    }

    assertwhichChickFilASauceTxtLnk(){
        this.elements.whichChickFilASauceTxtLnk().should("be.visible");
    }

    asserttheCoopSection(){
        this.elements.theCoopSection().should("be.visible");
    }

    asserttheLittleThingsSection(){
        //this.elements.theLittleThingsSection().should("be.visible");
    }

    assertMentorshipSection(){
        //this.elements.MentorshipSection().should("be.visible");
    }

    assertletsBeFriend(){
        this.elements.letsBeFriend().should("be.visible");
    }

    hoverStorieslnk(){
        this.elements.hoverStories().trigger('mouseover');       
    }

    assertInsideChick_Fil_A_link(){
        this.elements.InsideChickfilAlnk().should("be.visible");
    }

    assertIntheCommunityLink(){
        this.elements.IntheCommunity().should("be.visible");
    }

    assertNewsLink(){
        this.elements.News().should("be.visible");
    }


    clickInsideChick_fil_Alnk(){
        this.elements.InsideChickfilAlnk().click();
    }

    assertChickFilAUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a');
    }

    assertInsideChickfilCategoryTitle(){
        this.elements.InsideChickfilCategoryTitle().should("be.visible");
    }

    assertInsideChickfilSlider(){
        this.elements.InsideChickfilSlider().should("be.visible");
    }

    assertWhatVisitAllAboutImg(){
        //this.elements.WhatVisitAllAboutImg().should("be.visible");
    }

    assertWhatVisitAllAbout(){
        this.elements.WhatVisitAllAbout().should("be.visible");
    }

    asserttheCoopSection(){
        this.elements.theCoopSection().should("be.visible");
    }

    assertFiveThingsYouNeedtoKnowImg(){
        this.elements.FiveThingsYouNeedtoKnowImg().should("be.visible");
    }

    assertFiveThingsYouNeedtoKnow(){
        this.elements.FiveThingsYouNeedtoKnow().should("be.visible");
    }

    assertAnnouncesNewVaughanImg(){
        this.elements.AnnouncesNewVaughanImg().should("be.visible");
    }

    assertAnnouncesNewVaughan(){
        this.elements.AnnouncesNewVaughan().should("be.visible");        
    }

    assertFromBasketCourtImg(){
        this.elements.FromBasketCourtImg().should("be.visible");
    }

    assertFromBasketCourt(){
        this.elements.FromBasketCourt().should("be.visible"); 
    }

    clickIntheCommunitylink(){
        this.elements.IntheCommunity().click();         
    }

    assertCommunityPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community');         
    }

    assertInTheCategoryTitle(){
        this.elements.InTheCategoryTitle().should("be.visible");
    }

    assertInTheCatgorySlider(){
        this.elements.InTheCatgorySlider().should("be.visible");       
    }

    assertHubOfOpportunityImg(){
        this.elements.HubOfOpportunityImg().should("be.visible");        
    }

    assertHubOfOpportunity(){
        this.elements.HubOfOpportunity().should("be.visible");         
    }

    assertFightingHungerWithSecondHarvestImg(){
        this.elements.FightingHungerWithSecondHarvestImg().should("be.visible");       
    }

    assertFightingHungerWithSecondHarvest(){
        this.elements.FightingHungerWithSecondHarvest().should("be.visible");        
    }

    assertTrueInspirationAwrdImg(){
        this.elements.TrueInspirationAwrdImg().should("be.visible");        
    }

    assertTrueInspirationAwrd(){
        this.elements.TrueInspirationAwrd().should("be.visible");        
    }

    assertSharedTableProgramImg(){
        this.elements.SharedTableProgramImg().should("be.visible");        
    }

    assertSharedTableProgram(){
        this.elements.SharedTableProgram().should("be.visible");        
    }



clickNewsLink(){
        this.elements.News().click({force: true});
    }

    assertNewsPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news');        
    }

    assertNewsTitle(){
        this.elements.NewsTitle().should("be.visible");       
    }

    assertNewsSlider(){
        this.elements.NewsSlider().should("be.visible");     
    }

    clickNewsSliderLink(){
        this.elements.NewsSlider().click({force: true});     
    }

    assertSpringsintotheseasonwithWatermelonMintbeverageflavoursUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-springs-into-the-season-with-watermelon-mint-beverage-flavours');
    }

    assertSeasonWithWaterMelonHead()
    {        
        this.elements.SeasonWithWaterMelonHead().should("be.visible"); 
    }

    assertSeasonWithWaterMelonImg()
    {        
        this.elements.SeasonWithWaterMelonImg().should("be.visible"); 
    }

    assertTheLatestNews(){
        this.elements.TheLatestNews().should("be.visible");        
    }

    assertMillionInScholarshipsImg(){
        this.elements.MillionInScholarshipsImg().should("be.visible");        
    }

    assertMillionInScholarships(){
        this.elements.MillionInScholarships().should("be.visible");         
    }

    clickMillionInScholarships(){
        this.elements.MillionInScholarships().click({force: true});         
    }

    assertNewTorontoRestautantImg(){
        this.elements.NewTorontoRestautantImg().should("be.visible");      
    }

    assertNewTorontoRestautant(){
        this.elements.NewTorontoRestautant().should("be.visible");        
    }

    clickNewTorontoRestautant(){
        this.elements.NewTorontoRestautant().click();        
    }

    assertAnnouncesEightRestaurantImg(){
        this.elements.AnnouncesEightRestaurantImg().should("be.visible");
    }

    assertAnnouncesEightRestaurant(){
        this.elements.AnnouncesEightRestaurant().should("be.visible");     
    }

    clickAnnouncesEightRestaurant(){
        this.elements.AnnouncesEightRestaurant().eq(0).click();     
    }

    assertOpenNewRestaurantImg(){
        this.elements.OpenNewRestaurantImg().should("be.visible");       
    }

    assertOpenNewRestaurant(){
        this.elements.OpenNewRestaurant().should("be.visible");       
    }

    clickOpenNewRestaurant(){
        this.elements.OpenNewRestaurant().eq(0).click();       
    }

    assertTheChickfilASharedTableProgramUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/the-chick-fil-a-shared-table-program');
    }

    assertTheChickfilASharedTableProgramTxt(){
        this.elements.TheChickfilASharedTableProgramTxt().should("be.visible");

    }

    assertSharedTableImpactTxt(){
        this.elements.SharedTableImpactTxt().should("be.visible");
    }

    assertMillionInScholarshipsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-awards-us24-million-in-scholarships-to-restaurant-team-members');
    }

    assertMilionScholarshipHead(){
        this.elements.MilionScholarshipHead().should("be.visible");
    }
    assertBenefitsBodyTxt(){
        this.elements.BenefitsBodyTxt().should("be.visible");
    }

    assertNewTorontoRestautantHead(){
        this.elements.NewTorontoRestautantHead().should("be.visible");
    }
    assertNewTorontoRestautantHeadImg(){
        this.elements.NewTorontoRestautantHeadImg().should("be.visible");
    }

    assertAnnouncesEightRestaurantPara(){
        this.elements.AnnouncesEightRestaurantPara().should("be.visible");
    }
    assertAnnouncesEightRestaurantPgImg(){
        this.elements.AnnouncesEightRestaurantPgImg().should("be.visible");
    }

    assertOpenNewRestaurantPara(){
        this.elements.OpenNewRestaurantPara().should("be.visible");
    }
    assertOpenNewRestaurantPageImg(){
        this.elements.OpenNewRestaurantPageImg().should("be.visible");
    }


    assertNewTorontoRestautantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-announces-new-toronto-restaurant-to-open-on-thursday-may-25-at-cf-toronto-eaton-centre');
    }

    assertAnnouncesEightRestaurantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/eighth-canada-restaurant');
    }

    assertOpenNewRestaurantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-to-continue-canadian-expansion');
    }


}

module.exports = new storieslinks();
