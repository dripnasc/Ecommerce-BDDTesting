Feature: View details of a product

  As a costumer, I want to view all details of a product I had serached for

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successfully loading page of a searched product
    Given The product's name <product> is searched
    When I access the product's page
    Then The product's page is loaded informing the product name=<productName>

    Examples:
      | product                   | productName                                  |
      | "Diamante Negro 20g c/20" | "Chocolate Diamante Negro 20g c/20 - Lacta" |
