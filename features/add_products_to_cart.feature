Feature: Add products to cart

  As a costumer, I want to be able to add a product to my cart.

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"
    And The product "sonho de valsa 1kg" has been searched
    And I accessed the product's page

  Scenario Outline: Add <quantity> items of product to cart
    When I select <quantity> of this product
    And I click to add the product to my cart
    Then The product can be seen on my cart
    And The quantity <quantity> added is correctly shown in the cart

    Examples:
      | quantity |
      | 1        |
      | 2        |