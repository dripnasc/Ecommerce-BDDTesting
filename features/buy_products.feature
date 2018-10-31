Feature: Buy a Product

  As a costumer accessing an e-commerce website, I want be able to buy a product.

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successful purchase using credit card
    Given The product's name <product> is searched
    And I access the product's page
    And I add <quantity> items of the product to my cart
    When I access my cart page
    And I proceed to Check Out
    And I select a shipping address
    And I confirm product=<productTitle> and quantity=<quantity> at my purchase summary
    Then Credit card payment option is displayed

    Examples:
      | product                   | productTitle                                | quantity |
      | "Diamante Negro 20g c/20" | "Chocolate Diamante Negro 20g c/20 - LACTA" | 1        |
     # | "Diamante Negro 20g c/20" | "Chocolate Diamante Negro 20g c/20 - LACTA" | 2        |




