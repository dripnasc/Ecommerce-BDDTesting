Feature: Search for products

  As a costumer, I want to access an e-commerce website and search for products

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successful search of an existing product
    When The product's name <product> is searched
    Then The product <productTitle> is shown

    Examples:
      | product                         | productTitle                                              |
      | "marcador magic color 36 cores" | "Marcador Magic Color Série Ouro 36 Cores Sortidas 648-O" |
