class LocalMenu{

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

       Entréeslnk: () => cy.get("a[href='#entrees']"),
       LocalSaladslink: () => cy.get("a[href='#salads']"),       
       CobbSalad: () => cy.get("img[alt='Cobb Salad']"),
       SpicySouthwestSalad: () => cy.get("img[alt='Spicy Southwest Salad']"),
       LocalSideslink: () => cy.get("a[href='#sides']"),
       LocalKidsMealslink: () => cy.get("a[href='#kidsmeals']"),
       LocalTreatslink: () => cy.get("a[href='#treats']"),
       LocalBeverageslink: () => cy.get("a[href='#beverages']"),
       LocalDippingSaucesandDressingslink: () => cy.get("a[href='#sauces']"),
       LocalPackagedMealslink: () => cy.get("a[href='#packagedmeals']"),
       LocalCateringlink: () => cy.get("a[href='/locations/on/devonshire/catering']"),

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
       
       Beverageslink: () => cy.contains("Beverages"),
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
       LocalCateringTrayslink: () => cy.get("a[href='#trays']"),
       LocalCateringEntreeslink: () => cy.get("a[href='#entrées']"),
       LocalCateringSaladWrapslink: () => cy.get("a[href='#saladswraps']"),
       LocalCateringSidesTreatslink: () => cy.get("a[href='#sidestreats']"),
       LocalCateringBeverageslink: () => cy.get("a[href='#beverages']"),
       LocalCateringPackagedMealslink: () => cy.get("a[href='#packagedmeals']"),
    
    
    }

    callBack(){
        cy.go('back');
    }

    clickEntreesMenulnk(){
        this.elements.Entréeslnk().eq(0).click({force: true});
    }    

    assertEntréeslnk(){
        this.elements.Entréeslnk().should('be.visible');
    }

    assertOrderFoodLink(){
        this.elements.OrderFoodLink().should('be.visible');
    }

    clickOrderFoodLink(){
        this.elements.OrderFoodLink().eq(0).click({force: true});
    }

    assertLocalSaladslink(){
        this.elements.LocalSaladslink().should('be.visible');
    }

    assertLocalSideslink(){
        this.elements.LocalSideslink().should('be.visible');
    }

    assertLocalKidsMeallink(){
        this.elements.LocalSaladslink().should('be.visible');
    }

    assertLocalTreatslink(){
        this.elements.LocalTreatslink().should('be.visible');
    }

    assertLocalBeverageslink(){
        this.elements.LocalBeverageslink().should('be.visible');
    }

    assertLocalDippingSaucesDressingslink(){
        this.elements.LocalDippingSaucesDressingslink().should('be.visible');
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

    clickLocalSaladslink(){
        this.elements.LocalSaladslink().eq(0).click({force: true});
    }

    assertLocalSaladsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#salads');
    }
    
    assertCobbSalad(){
        this.elements.CobbSalad().should('be.visible');
    }

    assertSpicySouthwestSalad(){
        this.elements.SpicySouthwestSalad().should('be.visible');
    }

    clickLocalSideslink(){
        this.elements.LocalSideslink().click({force: true});
    }

    assertSidesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + 'menu#sides');
    }
    
    assertWafflePotatoFries(){
        this.elements.WafflePotatoFries().should('be.visible');
    }

    assertLocalSideSalad(){
        this.elements.LocalSideSalad().should('be.visible');
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
    
    clickLocalKidsMealslink(){
        this.elements.LocalKidsMealslink().click({force: true});
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
    
    clickLocalTreatslink(){
        this.elements.LocalTreatslink().click({force: true});
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

    clickLocalBeverageslink(){
        this.elements.LocalBeverageslink().click({force: true});
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

    clickLocalDippingSaucesandDressingslink(){
        this.elements.LocalDippingSaucesandDressingslink().click({force: true});
    }

    assertIngredientsSection(){
        this.elements.IngredientsSection().should('be.visible');
    }

    assertDippingSaucesandDressingslinkUrl(){
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
    
    clickLocalCateringlink(){
        this.elements.LocalCateringlink().click({force: true});
    }
    
    clickLocalCateringTrayslink(){
        this.elements.LocalCateringTrayslink().click({force: true});
    }

    clickLocalCateringEntreeslink(){
        this.elements.LocalCateringEntreeslink().click({force: true});
    }

    clickLocalCateringSaladWrapslink(){
        this.elements.LocalCateringSaladWrapslink().click({force: true});
    }

    clickLocalCateringSidesTreatslink(){
        this.elements.LocalCateringSidesTreatslink().click({force: true});
    }

    clickLocalCateringBeverageslink(){
        this.elements.LocalCateringBeverageslink().click({force: true});
    }
    clickLocalPackagedMealslink(){
        this.elements.LocalCateringPackagedMealslink().click({force: true});
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

    assertExtrasSection(){
        this.elements.ExtrasSection().should('be.visible');
    }

    testLocalEntreesProductsdetails(){
        cy.fixture("LocalEntreesProductsList").then((data) => {
                data.forEach((userdata) => {
                this.clickEntreesMenulnk();
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
                cy.go('back');                   
                });
            })
        }

        testLocalSaladsProductsdetails(){
        cy.fixture("LocalSaladsProductsList").then((data) => {
                data.forEach((userdata) => {               
                this.clickLocalSaladslink();
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
                cy.go('back');                       
                });
            })
        }

    testLocalSidesProductsdetails(){
        cy.fixture("LocalSidesProductsList").then((data) => {
                data.forEach((userdata) => {                
                    this.clickLocalSideslink();
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
                    cy.go('back');                      
                });
            });
        }

        testLocalKidsMealsProductsdetails(){
            cy.fixture("LocalKidsmealsProductsList").then((data) => {
                    data.forEach((userdata) => {                
                    this.clickLocalKidsMealslink();
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
                    cy.go('back');                
                    });
                });
            }

    testLocalTreatsProductsdetails(){
        cy.fixture("LocalTreatsProductsList").then((data) => {
                data.forEach((userdata) => {                
                this.clickLocalTreatslink();
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
                cy.go('back');                
                });
            });
        }

    testLocalBeveragesProductsdetails(){
            cy.fixture("LocalBeveragesProductsList").then((data) => {
                data.forEach((userdata) => {                
                this.clickLocalBeverageslink();
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
                cy.go('back');                 
                });
            });
        }

    testLocalDippingSaucesandDressingsProductsdetails(){
        cy.fixture("LocalDippingSaucesandDressingsProductsList").then((data) => {
                data.forEach((userdata) => {               
                this.clickLocalDippingSaucesandDressingslink();
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
                cy.go('back');                          
                });
            });
        }

    testLocalCateringProductsdetails(){
        this.clickLocalCateringlink();
        cy.fixture("LocalCateringProductsList").then((data) => {
                data.forEach((userdata) => {
                             
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
                cy.go('back');                 
                });
            });
        }

        testLocalCateringTraysProductsdetails(){
            this.clickLocalCateringlink();
            cy.fixture("LocalCateringTraysProductsList").then((data) => {
                    data.forEach((userdata) => {
                    this.clickLocalCateringTrayslink();
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
                    cy.go('back');                 
                    });
                });
            }

            testLocalCateringEntreesProductsdetails(){
                this.clickLocalCateringlink();
                cy.fixture("LocalCateringEntreesProductsList").then((data) => {
                        data.forEach((userdata) => {
                        this.clickLocalCateringEntreeslink();
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
                        cy.go('back');                 
                        });
                    });
                }


                testLocalCateringSaladwrapProductsdetails(){
                    this.clickLocalCateringlink();
                    cy.fixture("LocalCateringSaladNWrapsProductsList").then((data) => {
                            data.forEach((userdata) => {
                            this.clickLocalCateringSaladWrapslink();
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
                            cy.go('back');                 
                            });
                        });
                    }


                    testLocalCateringSidesTreatsProductsdetails(){
                        this.clickLocalCateringlink();
                        cy.fixture("LocalCateringSidesNTreatsProductsList").then((data) => {
                                data.forEach((userdata) => {
                                this.clickLocalCateringSidesTreatslink();
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
                                cy.go('back');                 
                                });
                            });
                        }


                        testLocalCateringBeveragesProductsdetails(){
                            this.clickLocalCateringlink();
                            cy.fixture("LocalCateringBeveragesProductsList").then((data) => {
                                    data.forEach((userdata) => {
                                    this.clickLocalCateringBeverageslink();
                                    cy.get(userdata.productname).should("be.visible");
                                    this.assertOrderNowBtn();
                                    cy.get(userdata.productname).click();            
                                    cy.url().should('include', Cypress.config().baseUrl + userdata.producturl);            
                                    cy.get(userdata.productimage).should("be.visible");            
                                    cy.get('.p-details__h1').should('include.text', userdata.productnameheading),
                                    //this.assertExtrasSection();
                                    //this.assertIngredientsSection();
                                    this.assertClickheretostartacateringorderBtn();
                                    this.ClickheretostartacateringorderBtn();            
                                    cy.url().should('include', Cypress.config().orderPageUrl + userdata.orderfoodurl); 
                                    cy.go('back');   
                                    cy.go('back');                 
                                    });
                                });
                            }


                            testLocalCateringPackagedMealsProductsdetails(){
                                this.clickLocalCateringlink();
                                cy.fixture("LocalCateringPackagedMealsProductsList").then((data) => {
                                        data.forEach((userdata) => {
                                        this.clickLocalPackagedMealslink();
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
                                        cy.go('back');                 
                                        });
                                    });
                                }

   
}

module.exports = new LocalMenu();
