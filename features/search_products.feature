Feature: Search for products

  As a costumer, I want to access an e-commerce website and search for products

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successful search of an existing product
    Given The product's name <product> is searched
    When I access the product's page
    Then The product <productTitle> is shown
