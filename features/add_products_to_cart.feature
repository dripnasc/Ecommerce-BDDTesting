Feature: Add products to cart

  As a costumer, I want to be able to add a product to my cart.

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successfully adding several items of a product to cart
    Given The product's name <product> is searched
    And I access the product's page
    And I add <quantity> items of the product to my cart
    Then The product <productTitle> can be seen on my cart
    And The quantity <quantity> added is correctly shown in the cart

    Examples:
      | product                   | productTitle                        | quantity |
      | "Diamante Negro 20g c/20" | "Chocolate Diamante Negro 20g c/20" | 5        |