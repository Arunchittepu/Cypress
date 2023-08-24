class menusublinks{

    elements = {
        pageTitle: () => cy.title(),
        urlAssert: () => cy.url(),
       logolink: () => cy.get("a[class='icon-logo-desktop logo']"),
       menulnk: () => cy.contains("Menu"),
       Menucl: () => cy.xpath("//span[contains(text(),'Menu')]"),
       hovermenu: () => cy.get("div.subnav a[href='/menu#entrees']"), 
       Availabilitymaydifferatdifferentlocations: () => cy.xpath("//p[contains(text(),'Availability may differ at different locations.')]"),     
       menuAvailabilityCallout: () => cy.get("div[class='menu-availability-callout']"),
       ChickenSandwitch: () => cy.get("img[alt='Chick-fil-A® Chicken Sandwich']"),
       DeluxSandwitch: () => cy.get("img[alt='Chick-fil-A® Deluxe Sandwich']"),
       SpicyChickenSandwitch: () => cy.get("img[alt='Spicy Chicken Sandwich']"),
       SpicyDeluxSandwitch: () => cy.get("img[alt='Spicy Deluxe Sandwich']"),
       GrilledChickenSandwitch: () => cy.get("img[alt='Grilled Chicken Sandwich']"),
       GrilledChickenClubSandwitch: () => cy.get("img[alt='Chick-fil-A® Grilled Chicken Club Sandwich']"),
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
       Beverageslink: () => cy.contains("Beverages"),
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
    }

 

    clickmenulnk(){
        this.elements.menulnk().click();
    }

    assertmenuAvailabilityCallout(){
        this.elements.menuAvailabilityCallout().should('be.visible');
    }

    assertAvailabilitymaydifferatdifferentlocations(){
        this.elements.Availabilitymaydifferatdifferentlocations().should('be.visible');
    }
    
    assertChickenSandwitch(){
        this.elements.ChickenSandwitch().should('be.visible');
    }

    assertDeluxSandwitch(){
        this.elements.DeluxSandwitch().should('be.visible');
    }

    assertSpicyChickenSandwitch(){
        this.elements.SpicyChickenSandwitch().should('be.visible');
    }

    assertSpicyDeluxSandwitch(){
        this.elements.SpicyDeluxSandwitch().should('be.visible');
    }

    assertGrilledChickenSandwitch(){
        this.elements.GrilledChickenSandwitch().should('be.visible');
    }

    assertGrilledChickenClubSandwitch(){
        this.elements.GrilledChickenClubSandwitch().should('be.visible');
    }

    assertNuggets(){
        this.elements.Nuggets().should('be.visible');
    }

    assertGrilledNuggets(){
        this.elements.GrilledNuggets().should('be.visible');
    }

    assertSpicyChickStrips(){
        this.elements.ChickenSandwitch().should('be.visible');
    }   

    hovermenulnk(){
        this.elements.Menucl().trigger('mouseover')        
    }

    clickEntréeslnk(){
        this.elements.Entréeslnk().click({force: true});
    }

    assertEntréesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#entrees');
    }

    clickSaladslink(){
        this.elements.Saladslink().click();
    }

    assertSaladsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#salads');
    }
    
    assertCobbSalad(){
        this.elements.CobbSalad().should('be.visible');
    }

    assertSpicySouthwestSalad(){
        this.elements.SpicySouthwestSalad().should('be.visible');
    }

    clickSideslink(){
        this.elements.Sideslink().click();
    }

    assertSidesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#sides');
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
        this.elements.KidsMeallink().click();
    }

    assertKidsMealUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#kidsmeals');
    }
    
    assertCtNuggetsKidsMeal(){
        this.elements.CtNuggetsKidsMeal().should('be.visible');
    }

    assertCtGrilledNuggetsKidsMeal(){
        this.elements.CtGrilledNuggetsKidsMeal().should('be.visible');
    }
    
    clickTreatslink(){
        this.elements.Treatslink().click();
    }

    assertTreatsUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#treats');
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
        this.elements.Beverageslink().click();
    }

    assertBeveragesUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#beverages');
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
        this.elements.DippingSaucesDressingslink().click();
    }

    assertDippingSaucesDressingslinkUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/menu#sauces');
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
        this.elements.Cateringlink().click();
    }

    assertCateringUrl(){
        this.elements.urlAssert().should('include', Cypress.config().baseUrl + '/catering');
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

}

module.exports = new menusublinks();
