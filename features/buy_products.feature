Feature: Buy a Product

  As a costumer accessing an e-commerce website, I want be able to buy a product.

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"
    And I had successfully added a product to my cart

  Scenario: Successfull Purchase using credit card
    Given I am accessing my cart page
    When I proceed to Check Out
    And I select a shipping address
    Then Credit card payment option is displayed
    #The above steps were adjusted to the Challenging Test suggestion. The correct steps to a successfull purchase would be:
    #And I fill credit card required information
    #And I confirm the operation
    #Then A confirmation message is shown
    #And My purchase id is informed


  Scenario: Empty Payment Method
    Given I am accessing my cart page
    And I had proceeded to Check Out
    And I had select a shipping address
    When I try to confirm operation without selecting a payment method
    Then Required fields will be highlighted
    And I won't be able to confirm the purchase




