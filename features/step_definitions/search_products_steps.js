const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');


// Given the product {string} has been searched
Given('The product {string} has been searched', async function (searchedProduct) {
  await this.driver.findElement(By.className('topbar-search')).isDisplayed();
  await this.driver.findElement(By.id('suggestion-search')).sendKeys(searchedProduct);
  await this.driver.findElement(By.className('search-icon-topbar')).click();
  await this.driver.findElement(By.className('search-title')).isDisplayed();
})

//Scenario: Successfull search of an existing product
Given('I am at the homepage', async function () {
  await this.driver.findElement(By.className('topbar-search')).isDisplayed();
});

When('I search for {string}', async function (searchString) {
  await this.driver.findElement(By.id('suggestion-search')).sendKeys(searchString);
  await this.driver.findElement(By.className('search-icon-topbar')).click();
  await this.driver.findElement(By.className('search-title')).isDisplayed();
});

Then('The product {string} is shown', async function (productTitle) {
  const productTitleResult = await this.driver.findElement(By.className('product-title')).getText();
  assert.equal(productTitleResult, productTitle)
});