Feature: View details of a product

  As a costumer, I want to view all details of a product I had serached for

  Background:
    Given I am logged in using credentials "User" "75676513195" "pwdteste"

  Scenario: Loading page of a searched product successfully
    Given The product's name <product> is searched
    When I click at its title
    Then The product's page is loaded