const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

//Given I am at the product\'s page'
Given('I am at the product\'s page', async function () {
  await this.driver.findElement(By.className('product-title')).click();
  await this.driver.findElement(By.className('product-name')).isDisplayed();
});

//Scenario: Loading page of a searched product successfully
When('I click at its title', async function () {
  await this.driver.findElement(By.className('product-title')).click();
});

Then('The product\'s page is loaded', async function () {
  await this.driver.findElement(By.className('product-name')).isDisplayed();
  const productName = await this.driver.findElement(By.className('product-name')).getText();
  assert.equal(productName, "Chocolate Bombom Sonho De Valsa Pacote 1kg - Lacta");
});