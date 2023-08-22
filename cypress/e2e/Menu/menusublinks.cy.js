/// <reference types="cypress"/>

import menusublinks from "../../pageobjects/menusublinks"
describe('Menu sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify sub links under Menu', () => {   
    
    cy.fixture('menusublinks').then((data) =>{
    menusublinks.elements.pageTitle().should('eq', data.homepagetitle1);
    menusublinks.clickLogo();    
    menusublinks.hovermenulnk(); 
    menusublinks.clickmenulnk();
    menusublinks.assertmenuAvailabilityCallout(); 
    menusublinks.assertAvailabilitymaydifferatdifferentlocations(); 
    menusublinks.assertChickenSandwitch(); 
    menusublinks.assertDeluxSandwitch(); 
    menusublinks.assertSpicyChickenSandwitch(); 
    menusublinks.assertSpicyDeluxSandwitch(); 
    menusublinks.assertGrilledChickenSandwitch(); 
    menusublinks.assertGrilledChickenClubSandwitch(); 
    menusublinks.assertNuggets(); 
    menusublinks.assertGrilledNuggets(); 
    menusublinks.assertSpicyChickStrips(); 
    
    menusublinks.clickEntréeslnk();
    menusublinks.assertEntréesUrl();
    menusublinks.assertmenuAvailabilityCallout(); 
    menusublinks.assertAvailabilitymaydifferatdifferentlocations(); 
    menusublinks.assertChickenSandwitch(); 
    menusublinks.assertDeluxSandwitch(); 
    menusublinks.assertSpicyChickenSandwitch(); 
    menusublinks.assertSpicyDeluxSandwitch(); 
    menusublinks.assertGrilledChickenSandwitch(); 
    menusublinks.assertGrilledChickenClubSandwitch(); 
    menusublinks.assertNuggets(); 
    menusublinks.assertGrilledNuggets(); 
    menusublinks.assertSpicyChickStrips(); 

    menusublinks.hovermenulnk();     
    menusublinks.clickSaladslink();      
    menusublinks.assertSaladsUrl(); 
    menusublinks.assertCobbSalad();  
    menusublinks.assertSpicySouthwestSalad();  
    
    menusublinks.clickSideslink();     
    menusublinks.assertSidesUrl();      
    menusublinks.assertWafflePotatoFries(); 
    menusublinks.assertSideSalad();  
    menusublinks.assertChickenNoodleSoup(); 
    menusublinks.assertWafflePotatoChips();     
    menusublinks.assertBuddyFruitsMultifruit();  

    menusublinks.clickKidsMeallink();  
    menusublinks.assertKidsMealUrl();  
    menusublinks.assertCtNuggetsKidsMeal();  
    menusublinks.assertCtGrilledNuggetsKidsMeal(); 
    
    menusublinks.clickTreatslink();
    menusublinks.assertTreatsUrl();
    menusublinks.assertPeachMilkshake();
    menusublinks.assertSeasonalFrostedWhitePeachLemonade();
    menusublinks.assertFrostedLemonade();
    menusublinks.assertFrostedCoffee();
    menusublinks.assertChocolateChunkCookie();
    menusublinks.assertCookiesCreamMilkshake();
    menusublinks.assertChocolateMilkshake();
    menusublinks.assertStrawberryMilkshake();
    menusublinks.assertVanillaMilkshake();
    menusublinks.assertChickfilAIcedreamCone();
    menusublinks.assertSmallIcedreamCup();

    menusublinks.clickBeverageslink();
    menusublinks.assertBeveragesUrl();
    menusublinks.assertSeasonalWhitePeachBeverages();
    menusublinks.assertFreshlyBrewedIcedTeaSweetened();
    menusublinks.assertFreshlyBrewedIcedTeaUnsweetened();
    menusublinks.assertChickfilALemonade();
    menusublinks.assertChickfilADietLemonade();
    menusublinks.assertSunjoySweetTeaLemonade();
    menusublinks.assertSunjoy12SweetTeaDietLemonade();
    menusublinks.assertSunjoyUnsweetTeaLemonade();
    menusublinks.assertSunjoyUnsweetTeaDietLemonade();
    menusublinks.assertIcedCoffee();
    menusublinks.assertCocaCola();
    menusublinks.assertDietCoke();
    menusublinks.assertCokeZeroSugar();
    menusublinks.assertSprite();
    menusublinks.assertHonestKidsAppleJuice();
    menusublinks.assertSimplyOrange();
    menusublinks.assertMilk();
    menusublinks.assertCoffee();
    menusublinks.assertHotTeas();
    menusublinks.assertGallonBeverages();
    menusublinks.assertCanadaDryGingerAle();
    menusublinks.assertStrawberryPassionFruitopia();
    menusublinks.assertFruitopiaOrangeGroove();
    menusublinks.assertIceProducts();
    menusublinks.assertsmartwater();

    menusublinks.clickDippingSaucesDressingslink();
    menusublinks.assertDippingSaucesDressingslinkUrl();
    menusublinks.assertBarbequeSauce();
    menusublinks.assertChickfilASauce();
    menusublinks.assertGardenHerbRanchSauce();
    menusublinks.assertHoneyMustardSauce();
    menusublinks.assertPolynesianSauce();
    menusublinks.assertSweetandSpicySrirachaSauce();
    menusublinks.assertZestyBuffaloSauce();
    menusublinks.assertHoneyRoastedBBQSauce();
    menusublinks.assertCreamySalsaDressing();
    menusublinks.assertAvocadoLimeRanchDressing();
    menusublinks.assertHoneyMustardDressing();
    menusublinks.assertGardenHerbRanchDressing();
    menusublinks.assertBalsamicVinaigretteDressing();
    menusublinks.assertItalianDressing();
    menusublinks.assertZestyAppleCiderVinaigretteDressing();

    menusublinks.clickCateringlink();
    menusublinks.assertCateringUrl();
    menusublinks.assertChickfilAChickenSandwich();
    menusublinks.assertSpicyChickenSandwich();
    menusublinks.assertChickfilANuggets();

    
    })
  })
})