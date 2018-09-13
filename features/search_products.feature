Feature: Search for products

  As a costumer, I want to access an e-commerce website and search for products

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario Outline: Successfull search of an existing product
    Given I am at the homepage
    When I search for <searchString>
    Then The product <productTitle> is shown

    Examples:
      | searchString         | productTitle                                         |
      | "sonho de valsa 1kg" | "Chocolate Bombom Sonho De Valsa Pacote 1kg - Lacta" |
      #| "marcador magic color 36 cores" | "Marcador Magic Color Série Ouro 36 Cores Sortidas 648-O" |