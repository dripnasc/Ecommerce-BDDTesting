#Feature: Add products to cart

#  As a costumer, I want to be able to add a product to my cart.

#  Background:
#    Given I am logged in using credentials "User" "75676513195" "pwdteste"

#  Scenario: Add <quantity> items of product <productname> to cart
#    Given I had searched for product <productname>
#    And I am viewing the details page of this product
#    When I select <quantity> of this product
#    And I click to add the product to my cart
#    Then The product can be seen on my cart
#    And The quantity is correct