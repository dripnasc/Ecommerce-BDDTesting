Feature: Remove products to cart

  As a costumer, I want to be able to remove products I had added to my cart.

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successfully removing product from cart containing one product
    Given The product's name <product> is searched
    And I access the product's page
    And I add <quantity> items of the product to my cart
    When I access my cart page
    And I click to remove the product
    Then I will be informed my cart is empty

    Examples:
      | product                   | productTitle                       | quantity |
      | "achocolatado toddy 400g" | "Achocolatado Toddy 400g - Quaker" | 2        |