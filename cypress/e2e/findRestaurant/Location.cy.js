/// <reference types="cypress"/>
import 'cypress-iframe';

import Location from "../../pageobjects/Location"

describe("find Restaurant location link page test", () => {
    beforeEach(() => {
      cy.visit("/");
      })

      it("Check the findARestaurant when click on Logo link", () => {
      Location.clickfindARestaurant();
      Location.checkfindRestauranttxt();
      Location.EnterAdressLocation();
      Location.checkUseMyLocation();
      Location.closeFindARestaurantPopUp();
      })

      it('check the FindArestaurant and enter Location NewYork',() => {
        Location.clickfindARestaurant();
        Location.checkfindRestauranttxt();
        Location.enterLocationname();
        Location.searchLocation();
        Location.checkLocationUrl();
      })

      it('search Restaurants in newyork', () =>{
        Location.IncludeLocationUrl();
        Location.checkLocationUrl();
        Location.checkRegionMap();
        Location.checkAllfiltersinPage();
        Location.checkdropdownfilter();
        Location.checkListofnearByLocations();
        Location.seeMorelocationsnearby();
        Location.checkfirstLocationVisible();
        Location.clickonViewDetails();
        Location.PopupSeeYouSoon();
        // Location.PressProceed();
        // Location.checkdotcomUrl();
      })

      it('check the FindArestaurant and enter Location Windsor',() => {
          Location.clickfindARestaurant();
          Location.checkfindRestauranttxt();
          Location.enterwindsorLocationname();
          Location.searchLocation();
          Location.checkWindsorLocationUrl();
        })

        it('search Restaurants in windsor', () =>{
          Location.IncludewindsorLocationUrl();
          Location.checkWindsorLocationUrl();
          Location.checkRegionMap();
          Location.checkAllfiltersinPage();
          Location.checkdropdownfilter();
          Location.checkListofnearByLocations();
          Location.seeMorelocationsnearby();
          Location.firstWindsorLocation();
          Location.clickonViewDetails();
         // Location.PopupSeeYouSoon();
           //Location.PressProceed();
           Location.checkWindsorLocationUrl();
        })

        it('visit Devonshire location url and check details', () => {
          Location.Devonshirelink();
          Location.checkDevoshireurllink();
          Location.checkDevonshiretxtLocation();
          Location.checkExactAddress();
          Location.checkdetailsofRestaurant();
          Location.checkImageofRestaurant();
          Location.checkMapDirectionofRestaurant();
           Location.checkorderFoodImage();
           Location.orderFoodDelivery();
           Location.orderFoodCatering();
          Location.orderFoodinRestaurant();
          Location.closewindowsPopup();
           Location.checkurlOforderFood();
           Location.viewCoverImg();
          Location.checkreceiveOrder();
          Location.checkDrivethruTimingstxt();
          Location.viewcarryOutOrdertxt();
          Location.checkcurbsidetxt();
          Location.seeContentInformationtxt();
          
        })
        it('check Restaurant details and timings',() => {
            Location.visiturl();
            Location.clickonRestaurantdetails();
            Location.clickonRestaurantdetails();
            Location.RestaurantTimings();
            Location.ServiceTimings();
            Location.clickonDineIn();
            Location.Dineintxtinside();
            Location.clickonCurbSidePickup();
            Location.CurbSidePickuptxtinside();
            Location.clickonCarryon();
            Location.Carryouttxtinside();
            Location.clickonDrivethru();
            Location.Drivethrutxtinside();
            Location.Amentiestxt();
            Location.ImgofMobileOrdering();
            Location.Drivethrutxt();
            Location.ImgofCateringPickup();
            Location.imgofWiFi();
            Location.ImgofourMenu();
            Location.clickonviewRestaurantMenu();
            Location.checkmenuRestaurantUrl();
            Location.checkonlocationDetails();
            Location.orderstartedtxt();
            Location.checkOrderFoodstxt();
            Location.checkOrderCateringstxt();
            Location.viewMinimumOrderamount();
            Location.checkMenuNavtxt();
            Location.checkMenuAvailabilitytxt();
            Location.checkMenuGrouptxt();
            Location.viewHolidayFilmImg();

       })

        it('check About us and details',() => {
           Location.visiturl();
           Location.viewAboutustxt();
           Location.checkaboutUsParagraphtxt();
           Location.checkaboutUsImgtxt();
           Location.clickonlearnmoreaboutUs();
           Location.viewaboutustxt();
           Location.clickonchickfileAaboutusParahgraph();
           Location.checkchickensandwichImg();
           Location.checkchickensandwitchtxt();
           Location.clickonordernow();
           Location.viewRestaurantOperatorImg();
           Location.checkOperatortxt();
           Location.viewFollowonSocialmediatxt();
           Location.checkHolidayFilmImg();
        })
        it('check community and details', () => {
          Location.visiturl();
          Location.checkRestaurantCommunitytxt();
          Location.checkCommunityParagraphtxt();
          Location.imageofCommunity();
          Location.checklearnmoreaboutCommunity();
          Location.viewcommunitytxt();
          Location.checkcommunityparagraphtxt();
          Location.viewFollowonSocialmediatxt();
          Location.checkHolidayFilmImg();
        })
        it('check careers and details', () => {
          Location.visiturl();
          Location.viewcareers();
          Location.checkcareersParagraph();
          Location.clickLearnmoreaboutcareers();
          Location.checktxtGrowCarrer();
          Location.checkInvestingYoutxt();
          Location.checkWholeHeartSupporttxt();
          Location.viewpathwaystoPotentialtxt();
          Location.RestaurantclosingTimingsonSunday();
          Location.AvailableFlexibilitytoThrivetxt();
          Location.viewPerkstext();
          Location.viewsFollowonSocialmediatxt();
          Location.checkHolidayFilmImg();
        })

    })