class storieslinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       storieslnk: () => cy.contains("Stories"),
       storiesSlider: () => cy.xpath("//a[contains(text(),'Seven fun facts about the Chick-fil-A Chicken Sandwich')]"),
       whichChickFilASauceImg: () => cy.get("a[href='/stories/inside-chick-fil-a/which-chick-fil-a-sauce-is-your-perfect-match-for-sure']"),      
       SeasonWithWaterMelonHead: () => cy.xpath("//h1[contains(text(),'Chick-fil-A springs into the season with Watermelo')]"), 
       SeasonWithWaterMelonImg: () => cy.get("img[alt='A Watermelon Mint Sunjoy, a Watermelon Mint Lemonade, A Watermelon Mint Iced Tea and a Watermelon Mint Frosted Lemonade are positioned side by side in glasses. ']"),
       whichChickFilASauceTxtLnk: () => cy.xpath("//a[contains(text(),'Which Chick-fil-A sauce is your perfect match?')]"),
       
       theLittleThingsSection: () => cy.get("a[href='/stories/inside-chick-fil-a/meet-al-jones-the-newest-chick-fil-a-owner-operator-in-canada']"),
       theCoopSection: () => cy.xpath("//h3[contains(text(),'The Coop')]"),
       MentorshipSection: () => cy.get("a[href='/stories/inside-chick-fil-a/mentorship-care-and-paying-it-forward']"),
       letsBeFriend: () => cy.xpath("//p[contains(text(),'Let’s be friends')]"),
       Story: () => cy.xpath("//span[contains(text(),'Stories')]"),
       hoverStories: () => cy.get("div.subnav a[href='/stories/inside-chick-fil-a']"),      
       InsideChickfilAlnk: () => cy.contains("Inside Chick-fil-A"),
       
       InsideChickfilCategoryTitle: () => cy.xpath("//h1[contains(text(),'Inside Chick-fil-A')]"),
       InsideChickfilSlider: () => cy.get('#slick-slide01 > :nth-child(1) > .slide > .lead-story > .slide-content > .wrapper > .title > a'),
       WhatVisitAllAboutImg: () => cy.get("a[href='/stories/inside-chick-fil-a/allow-us-to-introduce-ourselves']"),
       WhatVisitAllAbout: () => cy.xpath(`//a[contains(text(),"Here's what a visit to a Chick-fil-A restaurant is all about")]`),
       FiveThingsYouNeedtoKnowImg: () => cy.get("a[href='/stories/inside-chick-fil-a/what-to-know-about-our-waffle-potato-fries"),
       FiveThingsYouNeedtoKnow: () => cy.xpath("//a[contains(text(),'Five Things You Need to Know About Chick-fil-A Waffle Potato Fries')]"),
       AnnouncesNewVaughanImg: () => cy.get("a[href='/stories/news/chick-fil-a-announces-new-vaughan-ontario-restaurant']"),
       AnnouncesNewVaughan: () => cy.xpath("//a[contains(text(),'Chick-fil-A Announces New Vaughan, Ontario Restaurant to Open on Thursday, November 17')]"),
       FromBasketCourtImg: () => cy.get("assertInsideChickfilCategoryTitle"),
       FromBasketCourt: () => cy.get("a[href='/stories/inside-chick-fil-a/meet-al-jones-the-newest-chick-fil-a-owner-operator-in-canada']"),
       CaptionImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Story%20Images/Header-allow-us-to-introduce-ourselves_compressed.jpg?h=960&w=1440&la=en']"),
       ChickenSandwichImg: () => cy.get("img[src='https://d3oz09jk0dq1kk.cloudfront.net/Headliners/Canada/First%20Visit%20to%20CFA/websandwich.jpg']"),      
       NuggetsImg: () => cy.get("img[src='https://d3oz09jk0dq1kk.cloudfront.net/Headliners/Canada/First%20Visit%20to%20CFA/webnuggets.jpg']"),
  
       IntheCommunity: () => cy.contains("In the Community"),
       InTheCategoryTitle: () => cy.xpath("//h1[contains(text(),'In the Community')]"),
       InTheCatgorySlider: () => cy.xpath("//a[contains(text(),'How Chick-fil-A Canada is giving back to local communities')]"),
       TrueInspirationAwardsApplicationsopenLink: () =>cy.xpath("//a[contains(text(),'The 2024 Chick-fil-A True Inspiration Awards™ Applications are open')]"),
       HubOfOpportunityImg: () => cy.get("a[href='/stories/in-the-community/chick-fil-a-and-uhc-hub-of-operations-partnership-in-windsor-essex-community']"),
       TrueInspirationAwardsApplicationsopenImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2023/TIA%202023%20Press%20Release/2023-TIA-press-release_compressed.jpg?h=960&w=1443&la=en']"),   
       TrueInspirationAwardsWinnersLink: () => cy.xpath("//a[contains(text(),'True Inspiration Award Winners')]"),   
       HubOfOpportunity: () => cy.xpath("//a[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to create meaningful partnerships to positively impact the Windsor-Essex Community')]"),
       FightingHungerWithSecondHarvestImg: () => cy.get("a[href='/stories/in-the-community/fighting-hunger-with-second-harvest']"),
       FightingHungerWithSecondHarvest: () => cy.xpath("//a[contains(text(),'Fighting hunger with Second Harvest')]"),
       TrueInspirationAwrdImg: () => cy.get("a[href='/stories/in-the-community/how-a-true-inspiration-awards-grant-is-helping-rebuild-lives-in-toronto'"),
       TrueInspirationAwrd: () => cy.xpath("//a[contains(text(),'How a US$300,000 True Inspiration Awards™ Grant is')]"),
       HowCanadaisgivingbacktolocalcommunitiesTitle: () => cy.xpath("//h1[contains(text(),'How Chick-fil-A Canada is giving back to local com')]"),
       HowCanadaisgivingbacktolocalcommunitiesImg: () => cy.get("img[href='https://d1fd34dzzl09j.cloudfront.net/2022/03/yonge-street-mission-1.jpg?h=1106&w=1440&la=en']"),
       WePartnerWithSecondHarvestLink: () => cy.xpath("//a[contains(text(),'we partner with Second Harvest')]"),
       LearnAboutFirstCanadianReceipientLink: () => cy.xpath("//a[contains(text(),'Learn about the first Canadian recipient, Yonge St')]"),
       CorporateSocialResponsibilityReportLink: () => cy.xpath("//a[contains(text(),'2020 Corporate Social Responsibility Report')]"),
       howatrueinspirationawardsgrantPageImg: () => cy.get("img[alt='a group of people holding a large True Inspiration award check']"),
       
       ThreePeopleInAFoodKitchenImg: () => cy.get("img[alt='three people in a food kitchen']"),
       GroupOfPeopleHoldingLargeTrueInspirationAwardCheckImg: () => cy.get("img[alt='a group of people holding a large True Inspiration award check']"),              
       BoxOfFreshProduceImg: () => cy.get("img[alt='a box of fresh produce including eggs, carrots, apples and vegetables']"),
       SharedTableProgramImg: () => cy.get("a[href='/stories/in-the-community/the-chick-fil-a-shared-table-program']"),
       SharedTableProgram: () => cy.xpath("//a[contains(text(),'The Chick-fil-A Shared Table Program')]"),
       TrueInspirationAwardsLink: () => cy.xpath("//a[contains(text(),'chick-fil-a.com/true-inspiration-awards')]"),
       SharedTableProgramLink: () => cy.xpath("//a[contains(text(),'Shared Table program')]"),
       HubofOpportunitiesaimCapImg: () => cy.get("img[href='https://d1fd34dzzl09j.cloudfront.net/2021/10/Devonshire%20Canada/UHC_Devonshire.JPG?h=666&w=1000&la=en']"),
        UHCHubofOpportunitiesLink: () => cy.xpath("//a[contains(text(),'UHC – Hub of Opportunities')]"),
        ChickFilACommitmentLink: () => cy.xpath(`//a[contains(text(),"Chick-fil-A, Inc.'s commitment")]`),
        SharedTableCapImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Headliners/Canada/About%20CFA/Shared%20Table-14.jpg?h=998&w=1440&la=en']"),      
        SharedTableWorkImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Headliners/Canada/About%20CFA/Shared%20Table/Shared%20Table%20infographics_how%20it%20works_6.11.20[1][1].png']"),      
        SecondHarvestLink: () => cy.xpath("//a[contains(text(),'Second Harvest')]"),
        ARestaurantsTakePartInSharedTableLink: () => cy.xpath("//a[contains(text(),'more than 1,500 Chick-fil-A restaurants take part ')]"),
        PersoncarryingaredtrayofsaladsincontainersImg: () => cy.get("img[alt='Person carrying a red tray of salads in containers']"),
        
       News: () => cy.contains("News"),
       NewsTitle: () => cy.xpath("//h1[contains(text(),'News')]"),
       NewsSlider: () => cy.xpath("//a[contains(text(),'Chick-fil-A springs into the season with Watermelo')]"),
       ChickFilAStoryLink: () => cy.xpath("//a[contains(text(),'chick-fil-a.ca/stories')]"),
        ChickFilAWebLink: () => cy.xpath("//a[contains(text(),'www.chick-fil-a.ca')]"),
        ChickFilANewsatWaterMelonPageLink: () => cy.get("a[href='https://twitter.com/chickfilanews?lang=en"),
       TheLatestNews: () => cy.xpath("//h3[contains(text(),'The latest news')]"),
       MillioninScholarshipstoRestaurantTeamMembersImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2022/04/Canada%20Scholarship%20Announcement/CFA%20Scholars%202022_Winners%206.jpg?h=695&w=1000&la=en']"),
        MillioninScholarshipsBenefitsLink: () => cy.xpath("//a[contains(text(),'benefits')]"),

       MillionInScholarshipsImg: () => cy.get("a[href='/stories/news/chick-fil-a-awards-us24-million-in-scholarships-to-restaurant-team-members']"),
       MillionInScholarships: () => cy.xpath("//a[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships t')]"),
       NewTorontoRestautantImg: () =>   cy.get("a[href='/stories/news/chick-fil-a-announces-new-toronto-restaurant-to-open-on-thursday-may-25-at-cf-toronto-eaton-centre']"),
       WafflePotatoFriesLink: () =>     cy.get("a[href='https://www.chick-fil-a.ca/menu/chick-fil-a-waffle-potato-fries']"),                                          
       ChickFilANuggetsLink: () =>     cy.get("a[href='https://www.chick-fil-a.ca/menu/chick-fil-a-nuggets']"),                                          
       NewTorontoRestautant: () => cy.xpath("//a[contains(text(),'Chick-fil-A announces new Toronto restaurant to op')]"),
       AnnouncesEightRestaurantImg: () =>   cy.get("a[href='/stories/news/eighth-canada-restaurant']"),
       AnnouncesEightRestaurant: () => cy.xpath("//p[contains(text(),'Chick-fil-A® announces another restaurant opening ')]"),              
       OpenNewRestaurantLinkImg: () => cy.get("a[href='/stories/news/chick-fil-a-to-continue-canadian-expansion']"),
       OpenNewRestaurantLink: () =>     cy.get("a[href='/stories/news/chick-fil-a-to-continue-canadian-expansion']"),    
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
       TheChickfilASharedTableProgramPageTitle: () => cy.xpath("//h1[contains(text(),'The Chick-fil-A Shared Table Program')]"),
       TheChickfilASharedTableProgramPageParaHead: () => cy.xpath("//strong[contains(text(),'Shared Table Impact')]"),
       whichchickfilasauceisyourperfectmatchforsurePageTitle: () => cy.xpath("//h1[contains(text(),'Where does the “A” in Chick-fil-A come from?')]"),
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
       MillionInScholarshipsImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/2022/04/Canada%20Scholarship%20Announcement/CFA%20Scholars%202022_Winners%206.jpg?h=695&w=1000&la=en']"),
       MillionInScholarships: () => cy.xpath("//a[contains(text(),'Chick-fil-A Awards US$24 Million in Scholarships t')]"),
       TalalChaudhryLink: () => cy.xpath("//a[contains(text(),'Talal Chaudhry')]"),
       TwoChickenSandwichmealswithWafflePotatoFriesdrinkImg: () => cy.ge("img[alt='Two Chick-fil-AChicken Sandwich meals with Waffle Potato Fries® and a drink']"),
       ChichFilASharedTableTmLink: () => cy.xpath("//a[contains(text(),'Chick-fil-A Shared Table™')]"),
       ChichFranchisingPageLink: () => cy.xpath("ChichFranchisingPageLink"),       
       
       NewTorontoRestautantpImg: () =>   cy.get("img[alt='Headshot of Talal Chaudhry, the Owner/Operator of Chick-fil-A Toronto Eaton Centre']"),
       NewTorontoRestautant: () => cy.xpath("//a[contains(text(),'Chick-fil-A announces new Toronto restaurant to op')]"),
       //AnnouncesEightRestaurantImg: () =>   cy.get("img[alt='New Owner/Operator of Chick-fil-A North Barrie, Lincoln Nikkel, stands outside the restaurant smiling']"),
       //AnnouncesEightRestaurant: () => cy.get('a').should('include.text','Announces Eighth Restaurant Location in Canada to Open on Thursday, March 9 in Barrie, Ontario'),              
       OpenNewRestaurantImg: () => cy.get("img[alt='Chick-fil-a']"),
       OpenNewRestaurant: () => cy.get('a').should('include.text','to Open New Restaurants in Kitchener and Toronto, Continuing Canadian Expansion'),       
       TheChickfilASharedTableProgramTxt: () => cy.xpath("//h1[contains(text(),'The Chick-fil-A Shared Table Program')]"),
       SharedTableImpactTxt: () => cy.xpath("//strong[contains(text(),'Shared Table Impact')]"),
       HubofOpportunitiesaimPageUrl: () => cy.xpath("//h1[contains(text(),'Chick-fil-A and UHC - Hub of Opportunities aim to ')]"),
       HubofOpportunitiesaimPageSubTitle: () => cy.xpath("//p[contains(text(),'Chick-fil-A Donates US$25,000 to Nonprofit Organiz')]"),
       HubofOpportunitiesaimParaLink: () => cy.xpath("//a[contains(text(),'UHC – Hub of Opportunities')]"),
       WhyChickfilAgrilledchickentastessogoodTitle: () => cy.xpath("//h1[contains(text(),'Why Chick-fil-A grilled chicken tastes so good')]"),
       WhyChickfilAgrilledchickentastessogoodSubTitle: () => cy.xpath("//p[contains(text(),'The science and art behind Chick-fil-A grilled chi')]"),
       WhyChickfilAgrilledchickentastessogoodImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/Why%20Chick%20fil%20A%20Grilled%20Chicken%20tastes%20so%20good/big-Chick-fil-A-Grilled-Chicken-Club-Sandwich.jpg?h=300&w=450&la=en']"),
       WheredidtheChickfilANuggetscomefromLink: () => cy.xpath("//a[contains(text(),'Where did the Chick-fil-A Nuggets come from?')]"),
       WheredidtheChickfilANuggetscomefromImg:() => cy.get("a[href='/stories/inside-chick-fil-a/the-origin-of-the-chick-fil-a-nuggets']"),
        WheredidtheChickfilANuggetscomefromTitle: () => cy.xpath("//h1[contains(text(),'Where did the Chick-fil-A Nuggets come from?')]"),
       WheredidtheChickfilANuggetscomefromSubTitle: () => cy.xpath("//p[contains(text(),'See how the humble nugget became the tiny hero of ')]"),
       whattoknowaboutourwafflepotatofriesCapImg: () => cy.get("img[alt='Close up photo of Chick-fil-A Waffle Potato Fries']"),
       ChickintroducesnewCaramelCrumbleMilkshakeseasonTitle:() => cy.xpath("//h1[contains(text(),'Chick-fil-A introduces new Caramel Crumble Milksha')]"),
       ChickintroducesnewCaramelCrumbleMilkshakeseasonSubTitle:() => cy.xpath("//p[contains(text(),'The limited-time menu item is the brand’s fourth s')]"),
       LincolnNikkelLink: () => cy.xpath("//a[contains(text(),'Lincoln Nikkel')]"),
       LeadershipDevelopmentProgramLink: () => cy.xpath("//a[contains(text(),'Leadership Development Program')]"),
       ChickenSandwichImg: () => cy.get("img[src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACA/Stories/Canada Expansion Press Release/Chick-fil-A Chicken Sandwich .jpg']"),
       DriveThruodelHereLink: () => cy.xpath("//a[contains(text(),'drive-thru model here')]"),
       HockeyHelpstheHomelessLink: () => cy.xpath("//a[contains(text(),'Hockey Helps the Homeless (HHTH)')]"),
       RedwoodParkCommunitiesLink: () => cy.xpath("//a[contains(text(),'Redwood Park Communities')]"),
       BusbyCentreLink: () => cy.xpath("//a[contains(text(),'Busby Centre')]"),
       WhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatTitle: () => cy.xpath("//h1[contains(text(),'What makes the Caramel Crumble Milkshake the perfe')]"),
       WhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatSubTitle: () => cy.xpath("//p[contains(text(),'Rich in flavour and oh so yummy, this new milkshak')]"),
       SharedTableProgramTxtLink: () => cy.xpath("//a[contains(text(),'program')]"),
       GlassdoorTxtLink: () => cy.xpath("//a[contains(text(),'Glassdoor')]"),
       
    }

    clickhowahighschooljobbecameamissionLink(){
        this.elements.howahighschooljobbecameamissionLink().click();   
    }

    assertWhyChickfilAgrilledchickentastessogoodImg(){
        this.elements.WhyChickfilAgrilledchickentastessogoodImg().should('be.visible');
    }

    assertwhattoknowaboutourwafflepotatofriesCapImg(){
        this.elements.whattoknowaboutourwafflepotatofriesCapImg().should('be.visible');
    }

    assertWafflePotatoFriesLink(){
        this.elements.WafflePotatoFriesLink().should('be.visible');
    }

    assertChickFilANuggetsLink(){
        this.elements.ChickFilANuggetsLink().should('be.visible');
    }

    assertHowCanadaisgivingbacktolocalcommunitiesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/how-chick-fil-a-canada-is-giving-back-to-local-communities');
    }

    assertHowCanadaisgivingbacktolocalcommunitiesTitle(){
        this.elements.HowCanadaisgivingbacktolocalcommunitiesTitle().should('be.visible');
    }

    assertHowCanadaisgivingbacktolocalcommunitiesImg(){
        this.elements.HowCanadaisgivingbacktolocalcommunitiesImg().should('be.visible');
    }

    assertLearnAboutFirstCanadianReceipientLink(){
        this.elements.LearnAboutFirstCanadianReceipientLink().should('be.visible');
    }

    assertCorporateSocialResponsibilityReportLink(){
        this.elements.CorporateSocialResponsibilityReportLink().should('be.visible');
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

    assertTrueInspirationAwardsApplicationsopenLink(){
        this.elements.TrueInspirationAwardsApplicationsopenLink().should('be.visible');
    }

    clickTrueInspirationAwardsApplicationsopenLink(){
        this.elements.TrueInspirationAwardsApplicationsopenLink().click();
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

   
    assertCaptionImg(){
        this.elements.CaptionImg().should('be.visible');
    }

    assertChickenSandwichImg(){
        this.elements.ChickenSandwichImg().should('be.visible');
    }

    assertNuggetsImg(){
        this.elements.NuggetsImg().should('be.visible');
    }

    assertwhichchickfilasauceisyourperfectmatchforsurePageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/where-does-the-a-in-chick-fil-a-come-from');
    }

    assertwhichchickfilasauceisyourperfectmatchforsurePageTitle(){
        this.elements.whichchickfilasauceisyourperfectmatchforsurePageTitle().should('be.visible');
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


    assertSharedTableCapImg(){
        this.elements.SharedTableCapImg().should('be.visible');
    }

    assertSharedTableWorkImg(){
        this.elements.SharedTableWorkImg().should('be.visible');
    }

    assertSecondHarvestLink(){
        this.elements.SecondHarvestLink().should('be.visible');
    }

    assertARestaurantsTakePartInSharedTableLink(){
        this.elements.ARestaurantsTakePartInSharedTableLink().should('be.visible');
    }

    assertPersoncarryingaredtrayofsaladsincontainersImg(){
        this.elements.PersoncarryingaredtrayofsaladsincontainersImg().should('be.visible');
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
    
    asserthowatrueinspirationawardsgrantPageImg(){
        this.elements.howatrueinspirationawardsgrantPageImg().should('be.visible');
    }

    assertThreePeopleInAFoodKitchenImg(){
        this.elements.ThreePeopleInAFoodKitchenImg().should('be.visible');
    }
    
    assertGroupOfPeopleHoldingLargeTrueInspirationAwardCheckImg(){
        this.elements.GroupOfPeopleHoldingLargeTrueInspirationAwardCheckImg().should('be.visible');
    }

    assertTrueInspirationAwardsLink(){
        this.elements.TrueInspirationAwardsLink().should('be.visible');
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

    assertBoxOfFreshProduceImg(){
        this.elements.BoxOfFreshProduceImg().should('be.visible');
    }

    assertSharedTableProgramLink(){
        this.elements.SharedTableProgramLink().should('be.visible');
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
    
    assertHubofOpportunitiesaimCapImg(){
        this.elements.HubofOpportunitiesaimCapImg().should('be.visible');
    }

    assertUHCHubofOpportunitiesLink(){
        this.elements.UHCHubofOpportunitiesLink().should('be.visible');
    }

    assertChickFilACommitmentLink(){
        this.elements.ChickFilACommitmentLink().should('be.visible');
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

    assertTrueInspirationAwardsApplicationsopenImg(){
        this.elements.TrueInspirationAwardsApplicationsopenImg().should('be.visible');
    }

    assertTrueInspirationAwardsWinnersLink(){
        this.elements.TrueInspirationAwardsWinnersLink().should('be.visible');
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
        this.elements.SharedTableProgram().eq(0).click({force: true});
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
    
    assertChickFilAStoryLink()
    {        
        this.elements.ChickFilAStoryLink().should("be.visible"); 
    }

    assertChickFilAWebLink()
    {        
        this.elements.ChickFilAWebLink().should("be.visible"); 
    }

    assertTheLatestNews(){
        this.elements.TheLatestNews().should("be.visible");        
    }

    assertChickFilANewsatWaterMelonPageLink(){
        this.elements.ChickFilANewsatWaterMelonPageLink().should("be.visible");        
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
        this.elements.NewTorontoRestautantImg().debug().should("be.visible");      
    }

    assertNewTorontoRestautant(){
        this.elements.NewTorontoRestautant().should("be.visible");        
    }

    clickNewTorontoRestautant(){
        this.elements.NewTorontoRestautant().click({force: true});        
    }

    assertAnnouncesEightRestaurantImg(){
        this.elements.AnnouncesEightRestaurantImg().debug().should("be.visible");
    }

    assertAnnouncesEightRestaurant(){
        this.elements.AnnouncesEightRestaurant().should("be.visible");     
    }

    clickAnnouncesEightRestaurant(){
        this.elements.AnnouncesEightRestaurantImg().eq(0).click({force: true});     
    }

    assertOpenNewRestaurantLinkImg(){
        this.elements.OpenNewRestaurantLinkImg().debug().should("be.visible");       
    }

    assertOpenNewRestaurantLink(){
        this.elements.OpenNewRestaurantLink().should("be.visible");       
    }

    clickOpenNewRestaurantLink(){
        this.elements.OpenNewRestaurantLink().eq(0).click({force: true});       
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
    
    assertMillioninScholarshipstoRestaurantTeamMembersImg(){
        this.elements.MillioninScholarshipstoRestaurantTeamMembersImg().should("be.visible");
    }

    assertMillioninScholarshipsBenefitsLink(){
        this.elements.MillioninScholarshipsBenefitsLink().should("be.visible");
    }

    assertNewTorontoRestautantHead(){
        this.elements.NewTorontoRestautantHead().should("be.visible");
    }

    assertNewTorontoRestautantHeadImg(){
        this.elements.NewTorontoRestautantHeadImg().should("be.visible");
    }  

    assertTalalChaudhryLink(){
        this.elements.TalalChaudhryLink().should("be.visible");
    }

    assertTwoChickenSandwichmealswithWafflePotatoFriesdrinkImg(){
        this.elements.TwoChickenSandwichmealswithWafflePotatoFriesdrinkImg().should("be.visible");
    }

    assertChichFilASharedTableTmLink(){
        this.elements.ChichFilASharedTableTmLink().should("be.visible");
    }

    assertChichFranchisingPageLink(){
        this.elements.ChichFranchisingPageLink().should("be.visible");
    }

    assertAnnouncesEightRestaurantPara(){
        this.elements.AnnouncesEightRestaurantPara().should("be.visible");
    }

    assertAnnouncesEightRestaurantPgImg(){
        this.elements.AnnouncesEightRestaurantPgImg().should("be.visible");
    }
   
    assertLincolnNikkelLink(){
        this.elements.LincolnNikkelLink().should("be.visible");
    }

    assertLeadershipDevelopmentProgramLink(){
        this.elements.LeadershipDevelopmentProgramLink().should("be.visible");
    }

    assertChickenSandwichImg(){
        this.elements.ChickenSandwichImg().should("be.visible");
    }

    assertDriveThruodelHereLink(){
        this.elements.DriveThruodelHereLink().should("be.visible");
    }

    assertHockeyHelpstheHomelessLink(){
        this.elements.HockeyHelpstheHomelessLink().should("be.visible");
    }

    assertRedwoodParkCommunitiesLink(){
        this.elements.RedwoodParkCommunitiesLink().should("be.visible");
    }

    assertBusbyCentreLink(){
        this.elements.BusbyCentreLink().should("be.visible");
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
  

    assertAnnouncesEightRestaurantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/eighth-canada-restaurant');
    }

    assertOpenNewRestaurantUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-to-continue-canadian-expansion');
    }

    assertOpenNewRestaurantPara(){
        this.elements.OpenNewRestaurantPara().should("be.visible");
    }
    assertOpenNewRestaurantPageImg(){
        this.elements.OpenNewRestaurantPageImg().should("be.visible");
    }
    
    assertSharedTableProgramTxtLink(){
        this.elements.OpenNewRestaurantPageImg().should("be.visible");
    }
    
    assertGlassdoorTxtLink(){
        this.elements.GlassdoorTxtLink().should("be.visible");
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

    assertHubofOpportunitiesaimPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/in-the-community/chick-fil-a-and-uhc-hub-of-operations-partnership-in-windsor-essex-community');
    }

    assertHubofOpportunitiesaimPageSubTitle(){
        this.elements.HubofOpportunitiesaimPageSubTitle().should("be.visible");
    }

    assertHubofOpportunitiesaimParaLink(){
        this.elements.HubofOpportunitiesaimParaLink().should("be.visible");
    }

    assertWhyChickfilAgrilledchickentastessogoodPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/why-chick-fil-a-grilled-chicken-tastes-so-good');
    }

    assertWhyChickfilAgrilledchickentastessogoodTitle(){
        this.elements.WhyChickfilAgrilledchickentastessogoodTitle().should("be.visible");
    }

    assertWhyChickfilAgrilledchickentastessogoodSubTitle(){
        this.elements.WhyChickfilAgrilledchickentastessogoodSubTitle().should("be.visible");
    }
    
    assertWheredidtheChickfilANuggetscomefromPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/the-origin-of-the-chick-fil-a-nuggets');
    }

    assertWheredidtheChickfilANuggetscomefromTitle(){
        this.elements.WheredidtheChickfilANuggetscomefromTitle().should("be.visible");
    }

    assertWheredidtheChickfilANuggetscomefromSubTitle(){
        this.elements.WheredidtheChickfilANuggetscomefromSubTitle().should("be.visible");
    }

    assertChickintroducesnewCaramelCrumbleMilkshakeseasonPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/news/chick-fil-a-introduces-new-caramel-crumble-milkshake-in-time-for-the-fall-season');
    }

    assertChickintroducesnewCaramelCrumbleMilkshakeseasonTitle(){
        this.elements.ChickintroducesnewCaramelCrumbleMilkshakeseasonTitle().should("be.visible");
    }

    assertChickintroducesnewCaramelCrumbleMilkshakeseasonSubTitle(){
        this.elements.ChickintroducesnewCaramelCrumbleMilkshakeseasonSubTitle().should("be.visible");
    }

    assertWhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatPageUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'stories/inside-chick-fil-a/what-makes-the-caramel-crumble-milkshake-the-perfect-fall-treat');
    }

    assertWhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatTitle(){
        this.elements.WhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatTitle().should("be.visible");
    }

    assertWhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatSubTitle(){
        this.elements.WhatmakestheCaramelCrumbleMilkshaketheperfectfalltreatSubTitle().should("be.visible");
    }




}

module.exports = new storieslinks();
