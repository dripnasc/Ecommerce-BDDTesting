Feature: View details of a product

  As a costumer, I want to view all details of a product I had serached for

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successfully loading page of a searched product
    Given The product's name <product> is searched
    When I access the product's page
    Then The product's page is loaded informing the product name=<productName>

    Examples:
      | product                         | productName                                               |
      | "marcador magic color 36 cores" | "Marcador Magic Color Série Ouro 36 Cores Sortidas 648-O" |
