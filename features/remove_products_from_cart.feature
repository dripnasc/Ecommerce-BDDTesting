Feature: Remove products to cart

  As a costumer, I want to be able to remove products I had added to my cart.

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successfully removing product from cart containing one product
    Given The product's name <product> is searched
    And I access the product's page
    And I had added <quantity> items of the product to my cart
    When I am accessing my cart page
    And I click to remove the product
    Then I will be informed my cart is empty

    Examples:
      | product              | productTitle                                         | quantity |
      | "sonho de valsa 1kg" | "Chocolate Bombom Sonho De Valsa Pacote 1kg - LACTA" | 2        |