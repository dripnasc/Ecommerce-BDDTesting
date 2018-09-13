Feature: Buy a Product

  As a costumer accessing an e-commerce website, I want be able to buy a product.

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successful Purchase using credit card
    Given The product's name <product> is searched
    And I access the product's page
    And I add <quantity> items of the product to my cart
    When I access my cart page
    And I proceed to Check Out
    And I select a shipping address
    And I confirm product=<productTitle> and quantity=<quantity> at my purchase summary
    Then Credit card payment option is displayed
    #The above steps were adjusted to the Challenging Test suggestion. The correct steps to a successfull purchase would be:
    #And I fill credit card required information
    #And I confirm the operation
    #Then A confirmation message is shown
    #And My purchase id is informed

    Examples:
      | product              | productTitle                                         | quantity |
      | "sonho de valsa 1kg" | "Chocolate Bombom Sonho De Valsa Pacote 1kg - LACTA" | 1        |
      | "sonho de valsa 1kg" | "Chocolate Bombom Sonho De Valsa Pacote 1kg - LACTA" | 2        |




