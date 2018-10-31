Feature: Search for products

  As a costumer, I want to access an e-commerce website and search for products

  Background:
    Given I am logged with "User" using login="75676513195" and password="pwdteste"

  Scenario Outline: Successful search of an existing product
    When The product's name <product> is searched
    Then The product <productTitle> is shown

    Examples:
      | product                   | productTitle                                |
      | "Diamante Negro 20g c/20" | "Chocolate Diamante Negro 20g c/20 - Lacta" |
