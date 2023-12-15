class Location
{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
        findARestaurant: () => cy.get('[data-element="findRestaurant"]'),
        checkFindARestauranttxt: () => cy.xpath("//h2[contains(text(),'Find a Restaurant')]"),
        enterAdress: () => cy.get('.user-input'),
        searchLocation: () => cy.get('[name="locationsearch"]'),
        checkMapImg: () => cy.iframe('#locatoriframe').find('[role="region"]'),
        filters: () => cy.iframe('#locatoriframe').find('.Locator-row.Locator-row--filters'),
        filterSelect: () => cy.iframe('#locatoriframe').find('[name="r"]'),
        listOfnearbyLocations: () => cy.iframe('#locatoriframe').find('.Locator-resultsContainer.js-locator-resultsContainer'),
        clickonShowmoreDetails : () => cy.iframe('#locatoriframe').find('#js-moreButton'),
        firstItemResult: () => cy.iframe('#locatoriframe').find('#js-yl-12104270'),
        clickOnDetails: () => cy.iframe('#locatoriframe').xpath("//button[contains(text(),'View details')]"),
        seeYousoontxt: () => cy.xpath("//p[contains(text(),'See you soon!')]"),
        clickOnProceed: () => cy.get('[href="https://www.chick-fil-a.com/locations/ny/fulton-street-in-line"]'),
        FultonStreettxt: () => cy.xpath("//h1[contains(text(),'Fulton Street In-Line')]"),
        clickUsemyLocation: () => cy.xpath("//a[contains(text(),'Use my location')]"),
        Search: () => cy.get("[type='submit']"),
        closeRestaurantPopup: () => cy.get('.mfp-close'),
        firstWindsorLocationResult: () => cy.iframe('#locatoriframe').find('.Teaser-titleLink.js-openModal'),
        clickOnProceed: () => cy.get('[href="https://www.chick-fil-a.com/locations/ny/fulton-street-in-line"]'),
        checkDevonshiretxt: () => cy.xpath("//h1[contains(text(),'Devonshire')]"),
        exactAddress: () => cy.get('.flex.icon.address'),
        detailsofRestaurant: () => cy.get('.flex.hours-wrapper'),
        deskopImg: () => cy.get('.desktop-img'),
        Mapanddirection: () => cy.get('.lb-modal.map-directions-container'),
        OrderFood: () => cy.get('#LocationDetail-OrderPickup'),
        clickrestaurant: () => cy.get('[data-cy="Close"]'),
        checkOrderimg: () => cy.get('#LocationDetail-OrderPickup'),
        OrderDevilery: () => cy.get('#LocationDetail-OrderDelivery'),
        OrderCatering: () => cy.get('#LocationDetail-OrderCatering'),
        RestaurantDetails: () => cy.xpath("//button[contains(text(),'Restaurant Details')]"),
        TimingofRestaurant: () => cy.get('.restaurant-details-hours'),
        Serviceoptionandhours: () => cy.get('.flex-wrapper'),
        Dinein: () => cy.get('#dine-in'),
        insidetxtDinin: () => cy.get('.active'),
        Curbsidepickup: () => cy.get('#curbside-pickup'),
        insidetxtCurbsidepickup: () => cy.get('.active'),
        CarryOut: () => cy.get('#carry-out'),
        insidetxtCarryout: () => cy.get('.active'),
        Drivethru: () => cy.get('#drive-thru'),
        insidetxtDrivethru: () => cy.get('.active'),
        AmentiesatRestaurant: () => cy.xpath("//h3[contains(text(),'Amenities at this restaurant')]"),
        MobileOrderingImg: () => cy.get('[alt="Mobile Ordering"]'),
        DrivethruImg: () => cy.get('[alt="Drive-thru"]'),
        CateringPickupImg: () => cy.get('[alt="Catering Pickup"]'),
        WiFiImg: () => cy.get('[alt="WiFi"]'),
        ourMenu: () => cy.get("//h4[contains(text(),'Our Menu')]"),
        ourMenuParagraph: () => cy.xpath("//p[contains(text(),'We love serving you delicious food made with quality ingredients every day of the week (except Sunday).')]"),
        ourMenuImg: () => cy.get('[alt="CFA Spicy Chicken Sandwich"]'),
        viewRestaurantMenu: () => cy.get('.btn-round.btn-round--white'),
        locationDetails: () => cy.get('.location-details'),
        orderStartedforYou: () => cy.xpath("//h2[contains(text(),'What kind of order can we get started for you?')]"),
        OrderFoods: () => cy.get('[href="https://order.chick-fil-a.ca/load-dot-com?locationNumber=30005"]'),
        OrderCaterings: () => cy.get('[href="https://order.chick-fil-a.ca/load-catering?locationNumber=30005"]'),
        MinimumOrderamount: () => cy.xpath("//p[contains(text(),'Catering deliveries at this restaurant require a $10.00 subtotal minimum order size.')]"),
        MenuNav: () => cy.get('.home-menu'),
        menuAvailability: () => cy.get('.menu-availability-callout'),
        menuGroup: () => cy.get('.menu-group'),
        HolidayFilmImg: () => cy.get('.header-img-callout'),
        aboutUs: () => cy.xpath("//h4[contains(text(),'About us')]"),
        aboutUsParagraph: () => cy.xpath("//p[contains(text(),'Friendly faces, clean spaces and flowers on the tables are just a few ways we try to make your visit pleasant.')]"),
        aboutUsImg: () => cy.get('.img-container'),
        learnmoreaboutUs: () => cy.get('[aria-label="Learn more about About us"]'),
        aboutustxt: () => cy.xpath("//h3[contains(text(),'We’re proud to be your nearest ')]"),
        chickfileAabutusParahgraph: () => cy.get('.content'),
        chickensandwichImg: () => cy.get('[alt="Grilled Chicken Sandwich"]'),
        chickensandwitchtxt: () => cy.get('.food-tile-callout > .bg-wrapper > .content > .title > h3'),
        ordernow: () => cy.get('.bg-wrapper > .content > .btn-container > .btn-round'),
        CoverImg: () => cy.get('[alt="cover image"]'),
        receiveOrder: () => cy.xpath("//h1[contains(text(),'How would you like to receive your order?')]"),
        DrivethruTimingstxt: () => cy.get('[data-testid="Drive-thru - undefined"]'),
        carryOutOrderInsideRestaurant: () => cy.get('[data-testid="Carry-out - undefined"]'),
        curbSidetxt: () => cy.get('[data-testid="Curbside - undefined"]'),
        contentInformation: () => cy.get('[role="contentinfo"]'),
        RestaurantOperatorImg: () => cy.get('[alt="Jordan Schmidt"]'),
        Operatortext: () => cy.get('.subtext'),
        FollowonSocialmedia: () => cy.get('.content-wrapper'),
        
        communityclick: () => cy.get('[data-type="Community"]'),
        communitytxt: () => cy.xpath("//h2[contains(text(),'Our Community')]"),
        communityparagraphtxt: () => cy.get('.community > .gridView > .about-us-header > .header-wrapper > .content'),
        FollowonSocialmedias: () => cy.get('.content-wrapper'),
        RestaurantCommunity: () => cy.xpath("//h4[contains(text(),'Community')]"),
        CommunityParagraph: () => cy.xpath("//p[contains(text(),'More than just chicken, we strive to support local causes and look for ways to give back to the community.')]"),
        CommunityImg: () => cy.get('[alt="Community"]'),
        learnmoreaboutCommunity: () => cy.get('[aria-label="Learn more about Community"]'),

        careers: () => cy.xpath("//h4[contains(text(),'Careers')]"),
        paragraph:() => cy.get('.paragraph'),
        LearnmoreaboutCareers: () => cy.get('[aria-label="Learn more about Careers"]'),
        GrowCarrertxt: () => cy.xpath("//h1[contains(text(),'Grow your career with us')]"),
        InvestingYoutxt: () => cy.xpath("//h2[contains(text(),'Investing in you')]"),
        WholeHeartSupporttxt: () => cy.xpath("//dt[contains(text(),'Whole-hearted support')]"),
        pathwaystoPotentialtxt: () => cy.xpath("//dt[contains(text(),'Pathways to potential')]"),
        ClosedonSundays: () => cy.xpath("//dt[contains(text(),'Closed on Sundays')]"),
        FlexibilitytoThrive: () => cy.xpath("//dt[contains(text(),'Flexibility to thrive')]"),
        checkLocalPerkstxt: () => cy.xpath("//p[contains(text(),'Local perks')]")

    }
    
    clickfindARestaurant(){
        this.elements.findARestaurant().eq(0).click();
    }
    checkfindRestauranttxt(){
        this.elements.checkFindARestauranttxt().eq(0).should('be.visible');
    }
    checkUseMyLocation(){
        this.elements.clickUsemyLocation().eq(0).click();
    }
    EnterAdressLocation(){
        this.elements.enterAdress().eq(0).click();
    }
    checkAfterUseMyLocationUrl(){
        this.elements.urlAssert().should('contains','locations?latitude=17.4452877&longitude=78.3597687&menuItem=');
    }
    searchLocation(){
        this.elements.Search().eq(0).click();
    }
    closeFindARestaurantPopUp(){
        this.elements.closeRestaurantPopup().eq(0).click();
    }
    enterLocationname(){
        this.elements.searchLocation().eq(0).click().type('newyork');
    }
    IncludeLocationUrl(){
        cy.visit('https://www.chick-fil-a.ca/locations?locationsearch=newyork&menuItem=')
    }
    checkLocationUrl(){
        this.elements.urlAssert().should('eq','https://www.chick-fil-a.ca/locations?locationsearch=newyork&menuItem=')
    }
    frameload(){
        this.elements.entireIframe().should('be.visible')
    }
    checkRegionMap(){
        this.elements.checkMapImg().should('be.visible');
    }
    checkAllfiltersinPage(){  
        this.elements.filters().should('exist').should('be.visible')
    }

    checkdropdownfilter(){
        this.elements.filterSelect().eq(0).should('be.visible')
    }
    checkListofnearByLocations(){
        this.elements.listOfnearbyLocations().scrollIntoView().should('be.visible')
    }
    seeMorelocationsnearby(){
        this.elements.clickonShowmoreDetails().scrollIntoView().click()
    }
    checkfirstLocationVisible(){
        this.elements.firstItemResult().should('be.visible')
    }
    clickonViewDetails(){
        this.elements.clickOnDetails().first().should('be.visible').click()
    }
    PopupSeeYouSoon(){
        this.elements.seeYousoontxt().scrollIntoView().should('be.visible')
    }
    PressProceed(){
        this.elements.clickOnProceed().click()
    }
   checkdotcomUrl(){
    this.elements.urlAssert().should('eq','https://www.chick-fil-a.com/locations/ny/fulton-street-in-line')
    }
    checkFultomStreettxt(){
        this.elements.FultonStreettxt().should('be.visible')
    }
    enterwindsorLocationname(){
        this.elements.searchLocation().eq(0).click().type('windsor');
    }
    IncludewindsorLocationUrl(){
        cy.visit('https://www.chick-fil-a.ca/locations?locationsearch=windsor&menuItem=')
    }
    checkWindsorLocationUrl(){
        this.elements.urlAssert().should('eq', 'https://www.chick-fil-a.ca/locations?locationsearch=windsor&menuItem=')
    }
    firstWindsorLocation(){
        this.elements.firstWindsorLocationResult().should('be.visible')
    }
    checkwindsorLocationVisible(){
        this.elements.firstItemResult().should('be.visible')
    }
    Devonshirelink(){
        cy.visit('https://www.chick-fil-a.ca/locations/on/devonshire')
    }
    checkDevoshireurllink(){
        this.elements.urlAssert().should('eq','https://www.chick-fil-a.ca/locations/on/devonshire')
    }

    checkDevonshiretxtLocation(){
        this.elements.checkDevonshiretxt().should('be.visible')
    }
    checkExactAddress(){
        this.elements.exactAddress().should('be.visible')
    }
    checkdetailsofRestaurant(){
        this.elements.detailsofRestaurant().should('be.visible')
    }
    checkImageofRestaurant(){
        this.elements.deskopImg().should('be.visible')
    }
    checkMapDirectionofRestaurant(){
        this.elements.Mapanddirection().should('be.visible')
    }
    orderFoodinRestaurant(){
        this.elements.OrderFood().should('be.visible').click()
    }
    closewindowsPopup(){
        cy.on('window:confirm', () => true);
    }
    checkurlOforderFood(){
        this.elements.urlAssert().should('eq','https://order.chick-fil-a.ca/destination')
    }
    checkcurbsidetxt(){
    this.elements.curbSidetxt().should('be.visible')
    }
    checkorderFoodImage(){
        this.elements.checkOrderimg().should('be.visible')
    }
    orderFoodDelivery(){
        this.elements.OrderDevilery().should('be.visible')
    }
    orderFoodCatering(){
        this.elements.OrderCatering().should('be.visible')
    }
    visiturl(){
        cy.visit('https://www.chick-fil-a.ca/locations/on/devonshire')
        //https://order.chick-fil-a.ca/get-started')
    }
    clickonRestaurantdetails(){
        this.elements.RestaurantDetails().should('be.visible')
    }
    RestaurantTimings(){
        this.elements.TimingofRestaurant().should('be.visible')
    }
    ServiceTimings(){
        this.elements.Serviceoptionandhours().first().should('be.visible')
    }
    clickonDineIn(){
        this.elements.Dinein().should('be.visible').click()
    }
    Dineintxtinside(){
        this.elements.insidetxtDinin().eq(2).should('be.visible')
    }
    clickonCurbSidePickup(){
        this.elements.Curbsidepickup().click()
    }
    CurbSidePickuptxtinside(){
        this.elements.insidetxtCurbsidepickup().eq(3).should('be.visible')
    }
    clickonCarryon(){
        this.elements.CarryOut().click()
    }
    Carryouttxtinside(){
        this.elements.insidetxtCarryout().eq(4).should('be.visible')
    }
    clickonDrivethru(){
        this.elements.Drivethru().click()
    }
    Drivethrutxtinside(){
        this.elements.insidetxtDrivethru().eq(5).should('be.visible')
    }
    Amentiestxt(){
        this.elements.AmentiesatRestaurant().should('be.visible')
    }
    ImgofMobileOrdering(){
        this.elements.MobileOrderingImg().should('be.visible')
    }
    Drivethrutxt(){
        this.elements.DrivethruImg().should('be.visible')
    }
    ImgofCateringPickup(){
        this.elements.CateringPickupImg().should('be.visible')
    }
    imgofWiFi(){
        this.elements.WiFiImg().should('be.visible')
    }
    Menutxt(){
        this.elements.ourMenu().should('be.visible')
    }
    Menuparagraph(){
        this.elements.ourMenuParagraph().should('be.visible')
    }
    ImgofourMenu(){
        this.elements.ourMenuImg().last().should('be.visible')
    }
    clickonviewRestaurantMenu(){
        this.elements.viewRestaurantMenu().first().click()
    }
    checkmenuRestaurantUrl(){
    this.elements.urlAssert().should('eq','https://www.chick-fil-a.ca/locations/on/devonshire/menu')
    }
    checkonlocationDetails(){
        this.elements.locationDetails().should('be.visible')
    }
    orderstartedtxt(){
        this.elements.orderStartedforYou().should('be.visible')
    }
    checkOrderFoodstxt(){
        this.elements.OrderFoods().should('be.visible')
    }
    checkOrderCateringstxt(){
        this.elements.OrderCaterings().should('be.visible')
    }
    viewMinimumOrderamount(){
        this.elements.MinimumOrderamount().should('be.visible')
    }
    checkMenuNavtxt(){
        this.elements.MenuNav().should('be.visible')
    }
    checkMenuAvailabilitytxt(){
        this.elements.menuAvailability().should('be.visible')
    }
    checkMenuGrouptxt(){
        this.elements.menuGroup().should('be.visible')
    }
    viewHolidayFilmImg(){
        this.elements.HolidayFilmImg().should('be.visible'),
        cy.go('back')
    }
    viewAboutustxt(){
        this.elements.aboutUs().should('be.visible')
    }
    checkaboutUsParagraphtxt(){
        this.elements.aboutUsParagraph().should('be.visible')
    }
    checkaboutUsImgtxt(){
        this.elements.aboutUsImg().should('be.visible')
    }
    clickonlearnmoreaboutUs(){
        this.elements.learnmoreaboutUs().should('be.visible').click()
    }
    checkaboutUsImg(){
        this.elements.aboutUsImg().eq(2).should('be.visible')
    }
    viewaboutustxt(){
        this.elements.aboutustxt().should('be.visible')
    }
    clickonchickfileAaboutusParahgraph(){
        this.elements.chickfileAabutusParahgraph().eq(8).should('be.visible')
    }
    checkchickensandwichImg(){
        this.elements.chickensandwichImg().should('be.visible')
    }
    checkchickensandwitchtxt(){
        this.elements.chickensandwitchtxt().should('be.visible')
    }
    clickonordernow(){
        this.elements.ordernow().should('be.visible')
        //.click()
    }
    checkurl(){
        this.elements.urlAssert().should('eq','https://order.chick-fil-a.ca/get-started')
    }
    viewCoverImg(){
        this.elements.CoverImg().should('be.visible')
    }
    checkreceiveOrder(){
        this.elements.receiveOrder().should('be.visible')
    }
    checkDrivethruTimingstxt(){
        this.elements.DrivethruTimingstxt().should('be.visible')
    }
    viewcarryOutOrdertxt(){
        this.elements.carryOutOrderInsideRestaurant().should('be.visible')
    }
    seeContentInformationtxt(){
        this.elements.contentInformation().scrollIntoView().should('be.visible')
    }
    viewRestaurantOperatorImg(){
        this.elements.RestaurantOperatorImg().should('be.visible')
    }
    checkOperatortxt(){
        this.elements.Operatortext().should('be.visible')
    }
    viewFollowonSocialmediatxt(){
        this.elements.FollowonSocialmedia().should('be.visible')
    }
    checkHolidayFilmImg(){
        this.elements.HolidayFilmImg().should('be.visible')
    }
    clickoncommunity(){
        this.elements.communityclick().should('be.visible').click()
    }
    viewcommunitytxt(){
        this.elements.communitytxt().should('be.visible')
    }
    checkcommunityparagraphtxt(){
        this.elements.communityparagraphtxt().should('be.visible')
    }
    

    checkHolidayFilmImg(){
        this.elements.HolidayFilmImg().should('be.visible')
    }
    checkRestaurantCommunitytxt(){
        this.elements.RestaurantCommunity().should('be.visible')
    }
    checkCommunityParagraphtxt(){
        this.elements.CommunityParagraph().should('be.visible')
    }
    imageofCommunity(){
        this.elements.CommunityImg().should('be.visible')
    }
    checklearnmoreaboutCommunity(){
        this.elements.learnmoreaboutCommunity().should('be.visible').click();
    }
    viewcareers(){
        this.elements.careers().should('be.visible')
    }
    checkcareersParagraph(){
        this.elements.paragraph().eq(3).should('be.visible')
    }
    clickLearnmoreaboutcareers(){
        this.elements.LearnmoreaboutCareers().click()
    }
    checktxtGrowCarrer(){
        this.elements.GrowCarrertxt().should('be.visible')
    }
    checkInvestingYoutxt(){
        this.elements.InvestingYoutxt().should('be.visible')
    }
    checkWholeHeartSupporttxt(){
        this.elements.WholeHeartSupporttxt().should('be.visible')
    }
    viewpathwaystoPotentialtxt(){
        this.elements.pathwaystoPotentialtxt().should('be.visible')
    }
    RestaurantclosingTimingsonSunday(){
        this.elements.ClosedonSundays().should('be.visible')
    }
    AvailableFlexibilitytoThrivetxt(){
        this.elements.FlexibilitytoThrive().should('be.visible')
    }
    viewPerkstext(){
        this.elements.checkLocalPerkstxt().should('be.visible')
    }
    viewsFollowonSocialmediatxt(){
        this.elements.FollowonSocialmedia().should('be.visible')
    }
    checkHolidayFilmImg(){
        this.elements.HolidayFilmImg().should('be.visible')
    }  

}

module.exports = new Location();