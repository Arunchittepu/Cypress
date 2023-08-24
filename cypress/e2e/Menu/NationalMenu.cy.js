/// <reference types="cypress"/>

import NationalMenu from "../../pageobjects/NationalMenu";

describe('Menu sub links test', () => {
   
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify sub links under Menu', () => {   
    
    cy.fixture('NationalMenu').then((data) =>{
      NationalMenu.elements.pageTitle().should('eq', data.homepagetitle1);
      NationalMenu.clickLogo();    
      NationalMenu.hovermenulnk(); 
      NationalMenu.clickmenulnk();
      NationalMenu.assertmenuAvailabilityCallout(); 
      NationalMenu.assertAvailabilitymaydifferatdifferentlocations(); 
      NationalMenu.assertChickenSandwitch(); 
      NationalMenu.assertDeluxSandwitch(); 
      NationalMenu.assertSpicyChickenSandwitch(); 
      NationalMenu.assertSpicyDeluxSandwitch(); 
      NationalMenu.assertGrilledChickenSandwitch(); 
      NationalMenu.assertGrilledChickenClubSandwitch(); 
      NationalMenu.assertNuggets(); 
      NationalMenu.assertGrilledNuggets(); 
      NationalMenu.assertSpicyChickStrips(); 
    
      NationalMenu.clickEntréeslnk();
      NationalMenu.assertEntréesUrl();
      NationalMenu.assertmenuAvailabilityCallout(); 
      NationalMenu.assertAvailabilitymaydifferatdifferentlocations(); 
      NationalMenu.assertChickenSandwitch(); 
      NationalMenu.assertDeluxSandwitch(); 
      NationalMenu.assertSpicyChickenSandwitch(); 
      NationalMenu.assertSpicyDeluxSandwitch(); 
      NationalMenu.assertGrilledChickenSandwitch(); 
      NationalMenu.assertGrilledChickenClubSandwitch(); 
      NationalMenu.assertNuggets(); 
      NationalMenu.assertGrilledNuggets(); 
      NationalMenu.assertSpicyChickStrips(); 

      NationalMenu.hovermenulnk();     
      NationalMenu.clickSaladslink();      
      NationalMenu.assertSaladsUrl(); 
      NationalMenu.assertCobbSalad();  
      NationalMenu.assertSpicySouthwestSalad();  
      
      NationalMenu.clickSideslink();     
      NationalMenu.assertSidesUrl();      
      NationalMenu.assertWafflePotatoFries(); 
      NationalMenu.assertSideSalad();  
      NationalMenu.assertChickenNoodleSoup(); 
      NationalMenu.assertWafflePotatoChips();     
      NationalMenu.assertBuddyFruitsMultifruit();  

      NationalMenu.clickKidsMeallink();  
      NationalMenu.assertKidsMealUrl();  
      NationalMenu.assertCtNuggetsKidsMeal();  
      NationalMenu.assertCtGrilledNuggetsKidsMeal(); 
      
      NationalMenu.clickTreatslink();
      NationalMenu.assertTreatsUrl();
      NationalMenu.assertPeachMilkshake();
      NationalMenu.assertSeasonalFrostedWhitePeachLemonade();
      NationalMenu.assertFrostedLemonade();
      NationalMenu.assertFrostedCoffee();
      NationalMenu.assertChocolateChunkCookie();
      NationalMenu.assertCookiesCreamMilkshake();
      NationalMenu.assertChocolateMilkshake();
      NationalMenu.assertStrawberryMilkshake();
      NationalMenu.assertVanillaMilkshake();
      NationalMenu.assertChickfilAIcedreamCone();
      NationalMenu.assertSmallIcedreamCup();

      NationalMenu.clickBeverageslink();
      NationalMenu.assertBeveragesUrl();
      NationalMenu.assertSeasonalWhitePeachBeverages();
      NationalMenu.assertFreshlyBrewedIcedTeaSweetened();
      NationalMenu.assertFreshlyBrewedIcedTeaUnsweetened();
      NationalMenu.assertChickfilALemonade();
      NationalMenu.assertChickfilADietLemonade();
      NationalMenu.assertSunjoySweetTeaLemonade();
      NationalMenu.assertSunjoy12SweetTeaDietLemonade();
      NationalMenu.assertSunjoyUnsweetTeaLemonade();
      NationalMenu.assertSunjoyUnsweetTeaDietLemonade();
      NationalMenu.assertIcedCoffee();
      NationalMenu.assertCocaCola();
      NationalMenu.assertDietCoke();
      NationalMenu.assertCokeZeroSugar();
      NationalMenu.assertSprite();
      NationalMenu.assertHonestKidsAppleJuice();
      NationalMenu.assertSimplyOrange();
      NationalMenu.assertMilk();
      NationalMenu.assertCoffee();
      NationalMenu.assertHotTeas();
      NationalMenu.assertGallonBeverages();
      NationalMenu.assertCanadaDryGingerAle();
      NationalMenu.assertStrawberryPassionFruitopia();
      NationalMenu.assertFruitopiaOrangeGroove();
      NationalMenu.assertIceProducts();
      NationalMenu.assertsmartwater();

      NationalMenu.clickDippingSaucesDressingslink();
      NationalMenu.assertDippingSaucesDressingslinkUrl();
      NationalMenu.assertBarbequeSauce();
      NationalMenu.assertChickfilASauce();
      NationalMenu.assertGardenHerbRanchSauce();
      NationalMenu.assertHoneyMustardSauce();
      NationalMenu.assertPolynesianSauce();
      NationalMenu.assertSweetandSpicySrirachaSauce();
      NationalMenu.assertZestyBuffaloSauce();
      NationalMenu.assertHoneyRoastedBBQSauce();
      NationalMenu.assertCreamySalsaDressing();
      NationalMenu.assertAvocadoLimeRanchDressing();
      NationalMenu.assertHoneyMustardDressing();
      NationalMenu.assertGardenHerbRanchDressing();
      NationalMenu.assertBalsamicVinaigretteDressing();
      NationalMenu.assertItalianDressing();
      NationalMenu.assertZestyAppleCiderVinaigretteDressing();

      NationalMenu.clickCateringlink();
      NationalMenu.assertCateringUrl();
      NationalMenu.assertChickfilAChickenSandwich();
      NationalMenu.assertSpicyChickenSandwich();
      NationalMenu.assertChickfilANuggets();

    
    })
  })
})