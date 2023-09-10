class NationalMenu{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       Nationalmenulnk: () => cy.contains("Menu"),
       NationalMenucl: () => cy.xpath("//span[contains(text(),'Menu')]"),
       hovermenu: () => cy.get("div.subnav a[href='/menu#entrees']"), 
       Availabilitymaydifferatdifferentlocations: () => cy.xpath("//p[contains(text(),'Availability may differ at different locations.')]"),     
       menuAvailabilityCallout: () => cy.get("div[class='menu-availability-callout']"),
       ChickenSandwich: () => cy.get("img[alt='Chick-fil-A® Chicken Sandwich']"),
       ChickenSandwichImg: () => cy.get("img[alt='Chick-fil-A® Chicken Sandwich']"),
       OrderNowBtn: () => cy.xpath("//a[contains(text(),'Order now')]"),
       ChickenSandwichPrdName: () => cy.get('.p-details__h1').should('include.text', 'Chick-fil-A® Chicken Sandwich'),
       
       OrderFoodLink: () =>  cy.get("img[alt='Pickup Bag Grey Icon']"),
       ExtrasSection: () => cy.xpath("//h2[@id='pdp-accord-heading']"),
       IngredientsSection: () => cy.xpath("//h2[@id='pdp-ingredients-accord-heading']"),

       DeluxeSandwich: () => cy.get("img[alt='Chick-fil-A® Deluxe Sandwich']"),
       SpicyChickenSandwich: () => cy.get("img[alt='Spicy Chicken Sandwich']"),
       SpicyDeluxeSandwich: () => cy.get("img[alt='Spicy Deluxe Sandwich']"),
       GrilledChickenSandwich: () => cy.get("img[alt='Grilled Chicken Sandwich']"),
       GrilledChickenClubSandwich: () => cy.get("img[alt='Chick-fil-A® Grilled Chicken Club Sandwich']"),
       Nuggets: () => cy.get("img[alt='Chick-fil-A® Nuggets']"),
       GrilledNuggets: () => cy.get("img[alt='Grilled Nuggets']"),
       SpicyChickStrips: () => cy.get("img[alt='Spicy Chick-fil-A Chick-n-Strips®']"),

       Entréeslnk: () => cy.contains("Entrées"),
       Saladslink: () => cy.contains("Salads"),       
       CobbSalad: () => cy.get("img[alt='Cobb Salad']"),
       SpicySouthwestSalad: () => cy.get("img[alt='Spicy Southwest Salad']"),
       Sideslink: () => cy.contains("Sides"),
       KidsMealslink: () => cy.contains("Kid's Meals"),
       Treatslink: () => cy.contains("Treats"),
       Beverageslink: () => cy.get(`a[href="/menu#beverages"]`),
       DippingSaucesandDressingslink: () => cy.contains("Dipping Sauces and Dressings"),
       Cateringlink: () => cy.contains("Catering"),

       Sideslink: () => cy.contains("Sides"),
       
       WafflePotatoFries: () => cy.get("img[alt='Chick-fil-A Waffle Potato Fries®']"),
       SideSalad: () => cy.get("img[alt='Side Salad']"),
       ChickenNoodleSoup: () => cy.get("img[alt='Chicken Noodle Soup']"),
       WafflePotatoChips: () => cy.get("img[alt='Waffle Potato Chips']"),       
       BuddyFruitsMultifruit: () => cy.get("img[alt='Buddy Fruits® Multifruit']"),

       KidsMeallink: () => cy.contains("Kid's Meals"),      
       CtNuggetsKidsMeal: () => cy.get(`img[alt="5 Ct Nuggets Kid's Meal"]`),       
       CtGrilledNuggetsKidsMeal: () => cy.get(`img[alt="5 Ct Grilled Nuggets Kid's Meal"]`),

       Treatslink: () => cy.contains("Treats"),
       PeachMilkshake: () => cy.get("img[alt='Peach Milkshake']"),       
       SeasonalFrostedWhitePeachLemonade: () => cy.get("img[alt='Seasonal Frosted White Peach Lemonade']"),
       FrostedLemonade: () => cy.get("img[alt='Frosted Lemonade']"),       
       FrostedCoffee: () => cy.get("img[alt='Frosted Coffee']"),
       ChocolateChunkCookie: () => cy.get("img[alt='Chocolate Chunk Cookie']"),       
       CookiesCreamMilkshake: () => cy.get("img[alt='Cookies & Cream Milkshake']"),
       ChocolateMilkshake: () => cy.get("img[alt='Chocolate Milkshake']"),       
       StrawberryMilkshake: () => cy.get("img[alt='Strawberry Milkshake']"),
       VanillaMilkshake: () => cy.get("img[alt='Vanilla Milkshake']"),       
       ChickfilAIcedreamCone: () => cy.get("img[alt='Chick-fil-A® Icedream® Cone']"),
       SmallIcedreamCup: () => cy.get("img[alt='Small Icedream® Cup']"),       
              
       SeasonalWhitePeachBeverages: () => cy.get("img[alt='Seasonal White Peach Beverages']"),
       FreshlyBrewedIcedTeaSweetened: () => cy.get("img[alt='Freshly-Brewed Iced Tea Sweetened']"),
       FreshlyBrewedIcedTeaUnsweetened: () => cy.get("img[alt='Freshly-Brewed Iced Tea Unsweetened']"),
       ChickfilALemonade: () => cy.get("img[alt='Chick-fil-A® Lemonade']"),
       ChickfilADietLemonade: () => cy.get("img[alt='Chick-fil-A® Diet Lemonade']"),
       SunjoySweetTeaLemonade: () => cy.get("img[alt='Sunjoy® (1/2 Sweet Tea, 1/2 Lemonade)']"),
       Sunjoy12SweetTeaDietLemonade: () => cy.get("img[alt='Sunjoy® (1/2 Sweet Tea, 1/2 Diet Lemonade)']"),
       SunjoyUnsweetTeaLemonade: () => cy.get("img[alt='Sunjoy® (1/2 Unsweet Tea, 1/2 Lemonade)']"),
       SunjoyUnsweetTeaDietLemonade: () => cy.get("img[alt='Sunjoy® (1/2 Unsweet Tea, 1/2 Diet Lemonade)']"),
       IcedCoffee: () => cy.get("img[alt='Iced Coffee']"),
       CocaCola: () => cy.get("img[alt='Coca-Cola®']"),
       DietCoke: () => cy.get("img[alt='Diet Coke®']"),
       CokeZeroSugar: () => cy.get("img[alt='Coke® Zero Sugar']"),
       Sprite: () => cy.get("img[alt='Sprite®']"),
       HonestKidsAppleJuice: () => cy.get("img[alt='Honest Kids® Apple Juice']"),
       SimplyOrange: () => cy.get("img[alt='Simply Orange®']"),
       Milk: () => cy.get("img[alt='2% Milk']"),
       Coffee: () => cy.get("img[alt='Coffee']"),
       HotTeas: () => cy.get("img[alt='Hot Teas']"),
       GallonBeverages: () => cy.get("img[alt='Gallon Beverages']"),
       CanadaDryGingerAle: () => cy.get("img[alt='Canada Dry® Ginger Ale']"),
       StrawberryPassionFruitopia: () => cy.get("img[alt='Strawberry Passion Fruitopia®']"),
       FruitopiaOrangeGroove: () => cy.get("img[alt='Fruitopia® Orange Groove']"),
       IceProducts: () => cy.get("img[alt='Ice Products']"),
       smartwater: () => cy.get("img[alt='smartwater®']"),

       DippingSaucesDressingslink: () => cy.contains("Dipping Sauces & Dressings"),
       BarbequeSauce: () => cy.get("img[alt='Barbeque Sauce']"),
       ChickfilASauce: () => cy.get("img[alt='Chick-fil-A® Sauce']"),
       GardenHerbRanchSauce: () => cy.get("img[alt='Garden Herb Ranch Sauce']"),
       HoneyMustardSauce: () => cy.get("img[alt='Honey Mustard Sauce']"),
       PolynesianSauce: () => cy.get("img[alt='Polynesian Sauce']"),
       SweetandSpicySrirachaSauce: () => cy.get("img[alt='Sweet and Spicy Sriracha Sauce']"),
       ZestyBuffaloSauce: () => cy.get("img[alt='Zesty Buffalo Sauce']"),
       HoneyRoastedBBQSauce: () => cy.get("img[alt='Honey Roasted BBQ Sauce']"),
       AvocadoLimeRanchDressing: () => cy.get("img[alt='Avocado Lime Ranch Dressing']"),
       CreamySalsaDressing: () => cy.get("img[alt='Creamy Salsa Dressing']"),
       HoneyMustardDressing: () => cy.get("img[alt='Honey Mustard Dressing']"),
       GardenHerbRanchDressing: () => cy.get("img[alt='Garden Herb Ranch Dressing']"),
       BalsamicVinaigretteDressing: () => cy.get("img[alt='Balsamic Vinaigrette Dressing']"),
       ItalianDressing: () => cy.get("img[alt='Italian Dressing']"),
       ZestyAppleCiderVinaigretteDressing: () => cy.get("img[alt='Zesty Apple Cider Vinaigrette Dressing']"),


       Cateringlink: () => cy.contains("Catering"),
       ChickfilAChickenSandwich: () => cy.get("img[alt='Chick-fil-A® Chicken Sandwich']"),
       SpicyChickenSandwich: () => cy.get("img[alt='Spicy Chicken Sandwich']"),
       ChickfilANuggets: () => cy.get("img[alt='Chick-fil-A® Nuggets']"),
       ClickheretostartacateringorderBtn: () => cy.xpath("//a[contains(text(),'Click here to start a catering order')]"),
    }

    callBack(){
        cy.go('back');
    }

    clickNationalmenulnk(){
        this.elements.Nationalmenulnk().click({force: true});
    }

    assertNationalMenuUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu');
    }

    assertmenuAvailabilityCallout(){
        this.elements.menuAvailabilityCallout().should('be.visible');
    }

    assertAvailabilitymaydifferatdifferentlocations(){
        this.elements.Availabilitymaydifferatdifferentlocations().should('be.visible');
    }
    
    assertChickenSandwich(){
        this.elements.ChickenSandwich().should('be.visible');
    }

    clickChickenSandwich(){
        this.elements.ChickenSandwich().click();
    }

    assertChickenSandwichUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu/chick-fil-a-chicken-sandwich');
    }

    assertChickenSandwichImg(){
        this.elements.ChickenSandwichImg().should('be.visible');
    }

    assertChickenSandwichPrdName(){
        this.elements.ChickenSandwichPrdName().should('be.visible');
    }

    assertOrderFoodLink(){
        this.elements.OrderFoodLink().should('be.visible');
    }

    clickOrderFoodLink(){
        this.elements.OrderFoodLink().eq(0).click({force: true});
    }

    assertOrderFoodUrl(){
        this.elements.urlAssert().should('include', Cypress.config().orderPageUrl + 'load-dot-com?itemTag=SANDWICH_CFA_CHICKEN');
    }

    assertExtrasSection(){
        this.elements.ExtrasSection().should('be.visible');
    }

    assertIngredientsSection(){
        this.elements.IngredientsSection().should('be.visible');
    }

    assertDeluxeSandwich(){
        this.elements.DeluxeSandwich().should('be.visible');
    }

    assertSpicyChickenSandwich(){
        this.elements.SpicyChickenSandwich().should('be.visible');
    }

    assertSpicyDeluxeSandwich(){
        this.elements.SpicyDeluxeSandwich().should('be.visible');
    }

    assertGrilledChickenSandwich(){
        this.elements.GrilledChickenSandwich().should('be.visible');
    }

    assertGrilledChickenClubSandwich(){
        this.elements.GrilledChickenClubSandwich().should('be.visible');
    }

    assertNuggets(){
        this.elements.Nuggets().should('be.visible');
    }

    assertGrilledNuggets(){
        this.elements.GrilledNuggets().should('be.visible');
    }

    assertSpicyChickStrips(){
        this.elements.ChickenSandwich().should('be.visible');
    }   

    hoverNationalmenulnk(){
        this.elements.NationalMenucl().trigger('mouseover')        
    }

    assertEntréeslnk(){
        this.elements.Entréeslnk().should('be.visible');
    }

    assertSaladslink(){
        this.elements.Saladslink().should('be.visible');
    }

    assertSideslink(){
        this.elements.Sideslink().should('be.visible');
    }

    assertKidsMeallink(){
        this.elements.Saladslink().should('be.visible');
    }

    assertTreatslink(){
        this.elements.Treatslink().should('be.visible');
    }

    assertBeverageslink(){
        this.elements.Beverageslink().should('be.visible');
    }

    assertDippingSaucesDressingslink(){
        this.elements.DippingSaucesDressingslink().should('be.visible');
    }

    assertCateringlink(){
        this.elements.Cateringlink().should('be.visible');
    }

    assertTreatslink(){
        this.elements.Treatslink().should('be.visible');
    }
    
    clickEntréeslnk(){
        this.elements.Entréeslnk().click({force: true});
    }

    assertEntréesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#entrees');
    }

    clickSaladslink(){
        this.elements.Saladslink().click({force: true});
    }

    assertSaladsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#salads');
    }
    
    assertCobbSalad(){
        this.elements.CobbSalad().should('be.visible');
    }

    assertSpicySouthwestSalad(){
        this.elements.SpicySouthwestSalad().should('be.visible');
    }

    clickSideslink(){
        this.elements.Sideslink().click({force: true});
    }

    assertSidesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#sides');
    }
    
    assertWafflePotatoFries(){
        this.elements.WafflePotatoFries().should('be.visible');
    }

    assertSideSalad(){
        this.elements.SideSalad().should('be.visible');
    }

    assertChickenNoodleSoup(){
        this.elements.ChickenNoodleSoup().should('be.visible');
    }

    assertWafflePotatoChips(){
        this.elements.WafflePotatoChips().should('be.visible');
    }

    assertBuddyFruitsMultifruit(){
        this.elements.BuddyFruitsMultifruit().should('be.visible');
    }
    
    clickKidsMeallink(){
        this.elements.KidsMeallink().click({force: true});
    }

    assertKidsMealUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#kidsmeals');
    }
    
    assertCtNuggetsKidsMeal(){
        this.elements.CtNuggetsKidsMeal().should('be.visible');
    }

    assertCtGrilledNuggetsKidsMeal(){
        this.elements.CtGrilledNuggetsKidsMeal().should('be.visible');
    }
    
    clickTreatslink(){
        this.elements.Treatslink().click({force: true});
    }

    assertTreatsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#treats');
    }
    
    assertPeachMilkshake(){
        this.elements.PeachMilkshake().should('be.visible');
    }

    assertSeasonalFrostedWhitePeachLemonade(){
        this.elements.SeasonalFrostedWhitePeachLemonade().should('be.visible');
    }

    assertFrostedLemonade(){
        this.elements.FrostedLemonade().should('be.visible');
    }

    assertFrostedCoffee(){
        this.elements.FrostedCoffee().should('be.visible');
    }

    assertChocolateChunkCookie(){
        this.elements.ChocolateChunkCookie().should('be.visible');
    }

    assertCookiesCreamMilkshake(){
        this.elements.CookiesCreamMilkshake().should('be.visible');
    }

    assertChocolateMilkshake(){
        this.elements.ChocolateMilkshake().should('be.visible');
    }

    assertStrawberryMilkshake(){
        this.elements.StrawberryMilkshake().should('be.visible');
    }

    assertVanillaMilkshake(){
        this.elements.VanillaMilkshake().should('be.visible');
    }

    assertChickfilAIcedreamCone(){
        this.elements.ChickfilAIcedreamCone().should('be.visible');
    }

    assertSmallIcedreamCup(){
        this.elements.SmallIcedreamCup().should('be.visible');
    }

    clickBeverageslink(){
        this.elements.Beverageslink().click({force: true});
    }

    assertBeveragesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#beverages');
    }
    
    assertSeasonalWhitePeachBeverages(){
        this.elements.SeasonalWhitePeachBeverages().should('be.visible');
    }

    assertFreshlyBrewedIcedTeaSweetened(){
        this.elements.FreshlyBrewedIcedTeaSweetened().should('be.visible');
    }

    assertFreshlyBrewedIcedTeaUnsweetened(){
        this.elements.FreshlyBrewedIcedTeaUnsweetened().should('be.visible');
    }

    assertChickfilALemonade(){
        this.elements.ChickfilALemonade().should('be.visible');
    }

    assertChickfilADietLemonade(){
        this.elements.ChickfilADietLemonade().should('be.visible');
    }

    assertSunjoySweetTeaLemonade(){
        this.elements.SunjoySweetTeaLemonade().should('be.visible');
    }

    assertSunjoy12SweetTeaDietLemonade(){
        this.elements.Sunjoy12SweetTeaDietLemonade().should('be.visible');
    }

    assertSunjoyUnsweetTeaLemonade(){
        this.elements.SunjoyUnsweetTeaLemonade().should('be.visible');
    }

    assertSunjoyUnsweetTeaDietLemonade(){
        this.elements.SunjoyUnsweetTeaDietLemonade().should('be.visible');
    }

    assertIcedCoffee(){
        this.elements.IcedCoffee().should('be.visible');
    }

    assertCocaCola(){
        this.elements.CocaCola().should('be.visible');
    }

    assertDietCoke(){
        this.elements.DietCoke().should('be.visible');
    }    

    assertCokeZeroSugar(){
        this.elements.CokeZeroSugar().should('be.visible');
    }

    assertSprite(){
        this.elements.Sprite().should('be.visible');
    }

    assertHonestKidsAppleJuice(){
        this.elements.HonestKidsAppleJuice().should('be.visible');
    }

    assertSimplyOrange(){
        this.elements.SimplyOrange().should('be.visible');
    }

    assertMilk(){
        this.elements.Milk().should('be.visible');
    }

    assertCoffee(){
        this.elements.Coffee().should('be.visible');
    }

    assertHotTeas(){
        this.elements.HotTeas().should('be.visible');
    }

    assertGallonBeverages(){
        this.elements.GallonBeverages().should('be.visible');
    }

    assertCanadaDryGingerAle(){
        this.elements.CanadaDryGingerAle().should('be.visible');
    }

    assertStrawberryPassionFruitopia(){
        this.elements.StrawberryPassionFruitopia().should('be.visible');
    }

    assertFruitopiaOrangeGroove(){
        this.elements.FruitopiaOrangeGroove().should('be.visible');
    }

    assertIceProducts(){
        this.elements.IceProducts().should('be.visible');
    }

    assertsmartwater(){
        this.elements.smartwater().should('be.visible');
    }

    clickDippingSaucesDressingslink(){
        this.elements.DippingSaucesDressingslink().click({force: true});
    }

    assertDippingSaucesDressingslinkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#sauces');
    }
    
    assertBarbequeSauce(){
        this.elements.BarbequeSauce().should('be.visible');
    }

    assertChickfilASauce(){
        this.elements.ChickfilASauce().should('be.visible');
    }

    assertGardenHerbRanchSauce(){
        this.elements.GardenHerbRanchSauce().should('be.visible');
    }

    assertHoneyMustardSauce(){
        this.elements.HoneyMustardSauce().should('be.visible');
    }

    assertPolynesianSauce(){
        this.elements.PolynesianSauce().should('be.visible');
    }

    assertSweetandSpicySrirachaSauce(){
        this.elements.SweetandSpicySrirachaSauce().should('be.visible');
    }

    assertZestyBuffaloSauce(){
        this.elements.ZestyBuffaloSauce().should('be.visible');
    }

    assertHoneyRoastedBBQSauce(){
        this.elements.HoneyRoastedBBQSauce().should('be.visible');
    }

    assertCreamySalsaDressing(){
        this.elements.CreamySalsaDressing().should('be.visible');
    }

    assertAvocadoLimeRanchDressing(){
        this.elements.AvocadoLimeRanchDressing().should('be.visible');
    }

    assertHoneyMustardDressing(){
        this.elements.HoneyMustardDressing().should('be.visible');
    }

    assertGardenHerbRanchDressing(){
        this.elements.GardenHerbRanchDressing().should('be.visible');
    }

    assertBalsamicVinaigretteDressing(){
        this.elements.BalsamicVinaigretteDressing().should('be.visible');
    }

    assertItalianDressing(){
        this.elements.ItalianDressing().should('be.visible');
    }

    assertZestyAppleCiderVinaigretteDressing(){
        this.elements.ZestyAppleCiderVinaigretteDressing().should('be.visible');
    }
    
    clickCateringlink(){
        this.elements.Cateringlink().click({force: true});
    }

    assertCateringUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'catering');
    }
    
    assertChickfilAChickenSandwich(){
        this.elements.ChickfilAChickenSandwich().should('be.visible');
    }

    assertSpicyChickenSandwich(){
        this.elements.SpicyChickenSandwich().should('be.visible');
    }

    assertChickfilANuggets(){
        this.elements.ChickfilANuggets().should('be.visible');
    }

    assertOrderNowBtn(){        
        this.elements.OrderNowBtn().should('be.visible');
    }

    clickOrderNowBtn(){        
        this.elements.OrderNowBtn().click();
    }

    assertClickheretostartacateringorderBtn(){
        this.elements.ClickheretostartacateringorderBtn().should("be.visible");
    }

    ClickheretostartacateringorderBtn(){
        this.elements.ClickheretostartacateringorderBtn().click();
    }

    testNationalProductsdetails(){
        cy.fixture("NationalProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl);                         
            cy.go('back');                   
        });
        })
    }

    testEntréesProductsdetails(){
        cy.fixture("EntréesProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickEntréeslnk();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl);                        
            cy.go('back');                       
        });
        })
    }


    testSaladsProductsdetails(){
        cy.fixture("SaladsProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickSaladslink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl);                         
            cy.go('back');                       
        });
        })
    }

    testSidesProductsdetails(){
        cy.fixture("SidesProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickSideslink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl);                   
            cy.go('back');                      
        });
        });
    }

    testSidesProductsdetails(){
        cy.fixture("KidsMealsProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickKidsMeallink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();            
            this.clickOrderFoodLink();             
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
            cy.go('back');                   
            });
        })
    }

    testTreatsProductsdetails(){
        cy.fixture("TreatsProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickTreatslink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            //this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
            cy.go('back');                   
            });
        });
    }

    testBeveragesProductsdetails(){
        cy.fixture("BeveragesProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickBeverageslink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),                    
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
            cy.go('back');                   
            });
        });
    }

    testDippingSaucesandDressingsProductsdetails(){
        cy.fixture("DippingSaucesandDressingsProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickDippingSaucesDressingslink();
            cy.get(userdata.productname).should("be.visible");
            cy.get(userdata.productname).eq(0).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            
            this.assertIngredientsSection();
            this.assertOrderFoodLink();
            this.clickOrderFoodLink();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
            cy.go('back');                           
            });
        });
    }

    testCateringProductsdetails(){
        cy.fixture("CateringProductsList").then((data) => {
            data.forEach((userdata) => {
            this.clickNationalmenulnk();
            this.clickCateringlink();
            cy.get(userdata.productname).should("be.visible");
            this.assertOrderNowBtn();
            cy.get(userdata.productname).click();            
            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
            cy.get(userdata.productimage).should("be.visible");            
            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
            //this.assertExtrasSection();
            this.assertIngredientsSection();
            this.assertClickheretostartacateringorderBtn();
            this.ClickheretostartacateringorderBtn();            
            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
            cy.go('back');                   
            });
        });
    }

    /*
        cy.fixture("NationalSubMenuList").then((datasubmenu) => {
            datasubmenu.forEach((submenu) => {
                cy.fixture("JsonFileNameList").then((datafilename) => {
                    //string datfilename = this.datafilename
                    datafilename.forEach((filename) => {
                        

                        cy.fixture(filename).then((data) => {
                            data.forEach((userdata) => {
                            this.clickNationalmenulnk();
                            //this.clickCateringlink();
                            cy.contains(submenu.submenuname).click({force: true});
                            cy.get(userdata.productname).should("be.visible");
                            this.assertOrderNowBtn();
                            cy.get(userdata.productname).click();            
                            cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
                            cy.get(userdata.productimage).should("be.visible");            
                            cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
                            //this.assertExtrasSection();
                            this.assertIngredientsSection();
                            this.assertClickheretostartacateringorderBtn();
                            this.clickheretostartacateringorderBtn();            
                            cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
                            cy.go('back');                   
                });
            });});
        });});})
    }*/
}

module.exports = new NationalMenu();
