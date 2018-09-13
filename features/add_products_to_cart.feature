Feature: Add products to cart

  As a costumer, I want to be able to add a product to my cart.

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successfully adding several items of a product to cart
    Given The product's name <product> is searched
    And I access the product's page
    And I had added <quantity> items of the product to my cart
    Then The product <productTitle> can be seen on my cart
    And The quantity <quantity> added is correctly shown in the cart

    Examples:
      | product                | productTitle                                              | quantity |
      | "caderno canson a4 98" | "Caderno Canson A4 Artbook One 98 Folhas - Referência:A4" | 5        |