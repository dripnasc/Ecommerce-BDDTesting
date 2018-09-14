const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');


//Scenario: Successful search of an existing product
Given('The product\'s name {string} is searched', async function (product) {
  await this.driver.wait(until.elementLocated(By.className('topbar-search'), 10000));
  await this.driver.findElement(By.className('topbar-search')).isDisplayed();
  await this.driver.findElement(By.id('suggestion-search')).sendKeys(product);
  await this.driver.findElement(By.className('search-icon-topbar')).click();
  await this.driver.findElement(By.className('search-title')).isDisplayed();
})

Then('The product {string} is shown', async function (productTitle) {
  await this.driver.wait(until.elementLocated(By.className('product-title'), 10000));
  const productTitleResult = await this.driver.findElement(By.className('product-title')).getText();
  assert.equal(productTitleResult, productTitle)
});