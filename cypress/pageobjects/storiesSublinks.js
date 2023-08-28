class storieslinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       storieslnk: () => cy.contains("Stories"),
       storiesSlider: () => cy.xpath("//a[contains(text(),'Seven fun facts about the Chick-fil-A Chicken Sandwich')]"),
       whichChickFilASauceImg: () => cy.get("img[class='lrg-img']"),      
       SeasonWithWaterMelonHead: () => cy.xpath("//h1[contains(text(),'Chick-fil-A springs into the season with Watermelo')]"), 
       SeasonWithWaterMelonImg: () => cy.get("img[alt='A Watermelon Mint Sunjoy, a Watermelon Mint Lemonade, A Watermelon Mint Iced Tea and a Watermelon Mint Frosted Lemonade are positioned side by side in glasses. ']"),
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
       WhatVisitAllAboutImg: () => cy.get("a[href='/stories/inside-chick-fil-a/allow-us-to-introduce-ourselves']"),
       WhatVisitAllAbout: () => cy.xpath(`//a[contains(text(),"Here's what a visit to a Chick-fil-A restaurant is all about")]`),
       FiveThingsYouNeedtoKnowImg: () => cy.get("a[href='/stories/inside-chick-fil-a/what-to-know-about-our-waffle-potato-fries"),
       FiveThingsYouNeedtoKnow: () => cy.xpath("//a[contains(text(),'Five Things You Need to Know About Chick-fil-A Waffle Potato Fries')]"),
       AnnouncesNewVaughanImg: () => cy.get("a[href='/stories/news/chick-fil-a-announces-new-vaughan-ontario-restaurant']"),
       AnnouncesNewVaughan: () => cy.xpath("//a[contains(text(),'Chick-fil-A Announces New Vaughan, Ontario Restaurant to Open on Thursday, November 17')]"),
       FromBasketCourtImg: () => cy.get("a[href='/stories/inside-chick-fil-a/meet-al-jones-the-newest-chick-fil-a-owner-operator-in-canada']"),
       FromBasketCourt: () => cy.get("a[href='/stories/inside-chick-fil-a/meet-al-jones-the-newest-chick-fil-a-owner-operator-in-canada']"),
       
       IntheCommunity: () => cy.contains("In the Community"),
       InTheCategoryTitle: () => cy.xpath("//h1[contains(text(),'In the Community')]"),
       InTheCatgorySlider: () => cy.xpath("//a[contains(text(),'The 2024 Chick-fil-A True Inspiration Awards™ Applications are open')]"),
       HubOfOpportunityImg: () => cy.get("a[href='/stories/in-the-community/chick-fil-a-and-uhc-hub-of-operations-partnership-in-windsor-essex-community']"),
       
       //cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2021/10/Devonshire%20Canada/UHC_Devonshire.JPG?h=666&w=1000&la=en'"),
       HubOfOpportunity: () => cy.xpath("//a[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to create meaningful partnerships to positively impact the Windsor-Essex Community')]"),
       FightingHungerWithSecondHarvestImg: () => cy.get("a[href='/stories/in-the-community/fighting-hunger-with-second-harvest']"),
       FightingHungerWithSecondHarvest: () => cy.xpath("//a[contains(text(),'Fighting hunger with Second Harvest')]"),
       TrueInspirationAwrdImg: () => cy.get("a[href='/stories/in-the-community/how-a-true-inspiration-awards-grant-is-helping-rebuild-lives-in-toronto'"),
       TrueInspirationAwrd: () => cy.xpath("//a[contains(text(),'How a US$300,000 True Inspiration Awards™ Grant is')]"),
                                   
       SharedTableProgramImg: () => cy.get("a[href='/stories/in-the-community/the-chick-fil-a-shared-table-program']"),
       SharedTableProgram: () => cy.xpath("//a[contains(text(),'The Chick-fil-A Shared Table Program')]"),
       
       News: () => cy.contains("News"),
       NewsTitle: () => cy.xpath("//h1[contains(text(),'News')]"),
       NewsSlider: () => cy.xpath("//a[contains(text(),'Chick-fil-A springs into the season with Watermelo')]"),
       
       TheLatestNews: () => cy.xpath("//h3[contains(text(),'The latest news')]"),
       
       MillionInScholarshipsImg: () => cy.get("a[href='/stories/news/chick-fil-a-awards-us24-million-in-scholarships-to-restaurant-team-members']"),
       MillionInScholarships: () => cy.xpath("//a[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships t')]"),
       NewTorontoRestautantImg: () =>   cy.get("a[href='/stories/news/chick-fil-a-announces-new-toronto-restaurant-to-open-on-thursday-may-25-at-cf-toronto-eaton-centre']"),
       NewTorontoRestautant: () => cy.xpath("//a[contains(text(),'Chick-fil-A announces new Toronto restaurant to op')]"),
       AnnouncesEightRestaurantImg: () =>   cy.get("a[href='/stories/news/eighth-canada-restaurant']"),
       AnnouncesEightRestaurant: () => cy.get("a[href='/stories/news/eighth-canada-restaurant']"),              
       OpenNewRestaurantImg: () => cy.get("a[href='/stories/news/chick-fil-a-to-continue-canadian-expansion']"),
       OpenNewRestaurant: () =>     cy.get("a[href='/stories/news/chick-fil-a-to-continue-canadian-expansion']"),    
       TheChickfilASharedTableProgramTxt: () => cy.xpath("//h1[contains(text(),'The Chick-fil-A Shared Table Program'"),
       SharedTableImpactTxt: () => cy.xpath("//strong[contains(text(),'Shared Table Impact')]"),
       MilionScholarshipHead: () => cy.xpath("//h1[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships t')]"),
       BenefitsBodyTxt: () => cy.xpath("//h1[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships t')]"),
       NewTorontoRestautantHead: () => cy.xpath("//h1[contains(text(),'Chick-fil-A announces new Toronto restaurant to op')]"),
       NewTorontoRestautantHeadImg: () => cy.get("img[alt='Headshot of Talal Chaudhry, the Owner/Operator of Chick-fil-A Toronto Eaton Centre']"),
       AnnouncesEightRestaurantPara: () => cy.xpath("//p[contains(text(),'Restaurant will donate US$25,000 to Hockey Helps t')]"),
       AnnouncesEightRestaurantPgImg: () => cy.get("img[alt='New Owner/Operator of Chick-fil-A North Barrie, Lincoln Nikkel, stands outside the restaurant smiling']"),
       OpenNewRestaurantPara: () => cy.xpath("//strong[contains(text(),'TORONTO (Feb. 22, 2021)')]"),
       OpenNewRestaurantPageImg: () => cy.get("img[alt='Chick-fil-a']"),
       TrueInspirationAwardsApplicationsopenTitle: () => cy.xpath("//h1[contains(text(),'The 2024 Chick-fil-A True Inspiration Awards™ Appl')]"),
       TrueInspirationAwardsApplicationsopenSubTitle: () => cy.xpath("//p[contains(text(),'Applications will be accepted from March 1–June 1,')]"),
       HubofOpportunitiesaimUrlTitle: () => cy.xpath("//h1[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to ')]"),
       HubofOpportunitiesaimUrlSubTitle: () => cy.xpath("//p[contains(text(),'Chick-fil-A Donates US$25,000 to Nonprofit Organiz')]"),
       FightinghungerwithSecondHarvestPageTitle: () => cy.xpath("//h1[contains(text(),'Fighting hunger with Second Harvest')]"),
       FightinghungerwithSecondHarvestPageSubTitle: () => cy.xpath("//p[contains(text(),'How Chick-fil-A’s community partnerships are tackl')]"),
       howatrueinspirationawardsgrantPageTitle: () => cy.xpath("//h1[contains(text(),'How a US$300,000 True Inspiration Awards™ Grant is')]"),
       howatrueinspirationawardsgrantPageParaTitle: () => cy.xpath("//strong[contains(text(),'How Yonge Street Mission changed one life')]"),
       TheChickfilASharedTableProgramPageTitle: () => cy.xpath("//h1[contains(text(),'Where does the “A” in Chick-fil-A come from?')]"),
       TheChickfilASharedTableProgramPageParaHead: () => cy.xpath("//strong[contains(text(),'Shared Table Impact')]"),
       whichchickfilasauceisyourperfectmatchforsurePageTitle: () => cy.xpath("//h1[contains(text(),'Which Chick-fil-A sauce is your perfect match?')]"),
       whichchickfilasauceisyourperfectmatchforsurePageSubTitle: () => cy.xpath("//p[contains(text(),'Learn the story behind our name.')]"),
       allowustointroduceourselvesTitle: () => cy.xpath(`//h1[contains(text(),"Here's what a visit to a Chick-fil-A restaurant is")]`),
       allowustointroduceourselvesSubTitle: () => cy.xpath("//p[contains(text(),'Wondering what to eat when you visit us?')]"),
       whattoknowaboutourwafflepotatofriesTitle: () => cy.xpath("//h1[contains(text(),'Five Things You Need to Know About Chick-fil-A Waf')]"),
       whattoknowaboutourwafflepotatofriesSubTitle: () => cy.xpath("//p[contains(text(),'Dipping into Chick-fil-A’s most popular menu pick ')]"),
       chickfilaannouncesnewvaughanontariorestaurantPara: () => cy.xpath("//strong[contains(text(),'Locally owned and operated')]"),
       chickfilaannouncesnewvaughanontariorestaurantSubTitle: () => cy.xpath("//p[contains(text(),'Restaurant will donate US$25,000 to 360ºkids as pa')]"),
       meetaljonesthenewestchickfilaowneroperatorincanadaPublishDate: () => cy.xpath("//p[contains(text(),'Nov 14, 2022')]"),
       meetaljonesthenewestchickfilaowneroperatorincanadaSubTitle: () => cy.xpath("//p[contains(text(),'Opening the seventh Chick-fil-A restaurant in Cana')]"),
       howahighschooljobbecameamissionLink: () => cy.xpath("//span[contains(text(),'How a high-school job became the mission of a life')]"),
       howahighschooljobbecameamissionLinkTitle: () => cy.xpath("//h1[contains(text(),'How a high-school job became the mission of a life')]"),
       howahighschooljobbecameamissionLinkSubTitle: () => cy.get("img[alt='Operator Jazmine standing with another male Team Member smiling']"),
    }

    clickhowahighschooljobbecameamissionLink(){
        this.elements.howahighschooljobbecameamissionLink().click();   
    }

    asserthowahighschooljobbecameamissionUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/introducing-operator-jazmine-funes');
    }

    asserthowahighschooljobbecameamissionLinkTitle(){
        this.elements.howahighschooljobbecameamissionLinkTitle().should('be.visible');
    }

    asserthowahighschooljobbecameamissionLinkSubTitle(){
        this.elements.howahighschooljobbecameamissionLinkSubTitle().should('be.visible');
    }

    assertmeetaljonesthenewestchickfilaowneroperatorincanadaUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/meet-al-jones-the-newest-chick-fil-a-owner-operator-in-canada');
    }

    assertmeetaljonesthenewestchickfilaowneroperatorincanadaPublishDate(){
        this.elements.meetaljonesthenewestchickfilaowneroperatorincanadaPublishDate().should('be.visible');
    }

    assertmeetaljonesthenewestchickfilaowneroperatorincanadaSubTitle(){
        this.elements.meetaljonesthenewestchickfilaowneroperatorincanadaSubTitle().should('be.visible');
    }

    assertchickfilaannouncesnewvaughanontariorestaurantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-announces-new-vaughan-ontario-restaurant');
    }

    assertchickfilaannouncesnewvaughanontariorestaurantPara(){
        this.elements.chickfilaannouncesnewvaughanontariorestaurantPara().should('be.visible');
    }

    assertchickfilaannouncesnewvaughanontariorestaurantSubTitle(){
        this.elements.chickfilaannouncesnewvaughanontariorestaurantSubTitle().should('be.visible');
    }

    assertwhattoknowaboutourwafflepotatofriesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/what-to-know-about-our-waffle-potato-fries');
    }

    assertwhattoknowaboutourwafflepotatofriesTitle(){
        this.elements.whattoknowaboutourwafflepotatofriesTitle().should('be.visible');
    }

    assertwhattoknowaboutourwafflepotatofriesSubTitle(){
        this.elements.whattoknowaboutourwafflepotatofriesSubTitle().should('be.visible');
    }
    
    assertallowustointroduceourselvesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/allow-us-to-introduce-ourselves');
    }

    assertallowustointroduceourselvesTitle(){
        this.elements.allowustointroduceourselvesTitle().should('be.visible');
    }

    assertallowustointroduceourselvesSubTitle(){
        this.elements.allowustointroduceourselvesSubTitle().should('be.visible');
    }

    assertwhichchickfilasauceisyourperfectmatchforsurePageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/where-does-the-a-in-chick-fil-a-come-from');
    }

    assertwhichchickfilasauceisyourperfectmatchforsurePageTitle(){
        this.elements.TheChickfilASharedTableProgramPageTitle().should('be.visible');
    }

    assertwhichchickfilasauceisyourperfectmatchforsurePageSubTitle(){
        this.elements.whichchickfilasauceisyourperfectmatchforsurePageSubTitle().should('be.visible');
    }

    assertTheChickfilASharedTableProgramPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/the-chick-fil-a-shared-table-program');
    }

    assertTheChickfilASharedTableProgramPageTitle(){
        this.elements.TheChickfilASharedTableProgramPageTitle().should('be.visible');
    }

    assertTheChickfilASharedTableProgramPageParaHead(){
        this.elements.TheChickfilASharedTableProgramPageParaHead().should('be.visible');
    }

      
    asserthowatrueinspirationawardsgrantPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/how-a-true-inspiration-awards-grant-is-helping-rebuild-lives-in-toronto');
    }

    asserthowatrueinspirationawardsgrantPageTitle(){
        this.elements.howatrueinspirationawardsgrantPageTitle().should('be.visible');
    }

    asserthowatrueinspirationawardsgrantPageParaTitle(){
        this.elements.howatrueinspirationawardsgrantPageParaTitle().should('be.visible');
    }

    assertFightinghungerwithSecondHarvestPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/fighting-hunger-with-second-harvest');
    }

    assertFightinghungerwithSecondHarvestPageTitle(){
        this.elements.FightinghungerwithSecondHarvestPageTitle().should('be.visible');
    }

    assertFightinghungerwithSecondHarvestPageSubTitle(){
        this.elements.FightinghungerwithSecondHarvestPageSubTitle().should('be.visible');
    }


    assertHubofOpportunitiesaimUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/chick-fil-a-and-uhc-hub-of-operations-partnership-in-windsor-essex-community');
    }

    assertHubofOpportunitiesaimUrlTitle(){
        this.elements.HubofOpportunitiesaimUrlTitle().should('be.visible');
    }

    assertHubofOpportunitiesaimUrlSubTitle(){
        this.elements.HubofOpportunitiesaimUrlSubTitle().should('be.visible');
    }

    assertTrueInspirationAwardsApplicationsopenUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/the-2023-chick-fil-a-true-inspiration-awards-applications-are-open');
    }

    assertTrueInspirationAwardsApplicationsopenTitle(){
        this.elements.TrueInspirationAwardsApplicationsopenTitle().should('be.visible');
    }

    assertTrueInspirationAwardsApplicationsopenSubTitle(){
        this.elements.TrueInspirationAwardsApplicationsopenSubTitle().should('be.visible');
    }

    callBack(){
        cy.go('back');
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
        this.elements.InsideChickfilAlnk().click({force: true});
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

    clickInsideChickfilSlider(){
        this.elements.InsideChickfilSlider().eq(0).click({force: true});
    }

    assertWhatVisitAllAboutImg(){
        //this.elements.WhatVisitAllAboutImg().should("be.visible");
    }

    assertWhatVisitAllAbout(){
        this.elements.WhatVisitAllAbout().should("be.visible");
    }

    clickWhatVisitAllAbout(){
        this.elements.WhatVisitAllAbout().click({force: true});
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

    clickFiveThingsYouNeedtoKnow(){
        this.elements.FiveThingsYouNeedtoKnow().click();
    }

    assertAnnouncesNewVaughanImg(){
        this.elements.AnnouncesNewVaughanImg().should("be.visible");
    }

    assertAnnouncesNewVaughan(){
        this.elements.AnnouncesNewVaughan().should("be.visible");        
    }

    clickAnnouncesNewVaughan(){
        this.elements.AnnouncesNewVaughan().click({force: true});        
    }

    assertFromBasketCourtImg(){
        this.elements.FromBasketCourtImg().should("be.visible");
    }

    assertFromBasketCourt(){
        this.elements.FromBasketCourt().should("be.visible"); 
    }

    clickFromBasketCourt(){
        this.elements.FromBasketCourt().eq(0).click({force: true}); 
    }

    clickIntheCommunitylink(){
        this.elements.IntheCommunity().click({force: true});         
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

    clickInTheCatgorySlider(){
        this.elements.InTheCatgorySlider().eq(0).click({force: true});       
    }

    assertHubOfOpportunityImg(){
        this.elements.HubOfOpportunityImg().should("be.visible");        
    }

    assertHubOfOpportunity(){
        this.elements.HubOfOpportunity().should("be.visible");         
    }

    clickHubOfOpportunity(){
        this.elements.HubOfOpportunity().click({force: true});         
    }

    assertFightingHungerWithSecondHarvestImg(){
        this.elements.FightingHungerWithSecondHarvestImg().should("be.visible");       
    }

    assertFightingHungerWithSecondHarvest(){
        this.elements.FightingHungerWithSecondHarvest().should("be.visible");        
    }

    clickFightingHungerWithSecondHarvest(){
        this.elements.FightingHungerWithSecondHarvest().click({force: true});   
    }

    assertTrueInspirationAwrdImg(){
        this.elements.TrueInspirationAwrdImg().should("be.visible");        
    }

    assertTrueInspirationAwrd(){
        this.elements.TrueInspirationAwrd().should("be.visible");        
    }

    clickTrueInspirationAwrd(){
        this.elements.TrueInspirationAwrd().click({force: true});
    }

    assertSharedTableProgramImg(){
        this.elements.SharedTableProgramImg().should("be.visible");        
    }

    assertSharedTableProgram(){
        this.elements.SharedTableProgram().should("be.visible");        
    }

    clickSharedTableProgram(){
        this.elements.SharedTableProgram().click({force: true});
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
