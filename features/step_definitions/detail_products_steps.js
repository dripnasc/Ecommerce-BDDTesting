const assert = require('assert');
const { When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');


//Scenario: Successfully loading page of a searched product
When('I access the product\'s page', async function () {
  await this.waitOverlay();
  await this.driver.findElement(By.className('product-title')).click();
  await this.waitOverlay();
  await this.driver.findElement(By.className('product-name')).isDisplayed();
});

Then('The product\'s page is loaded informing the product name={string}', async function (productName) {
  await this.waitOverlay();
  await this.driver.findElement(By.className('product-name')).isDisplayed();
  const productNameGet = await this.driver.findElement(By.className('product-name')).getText();
  assert.strictEqual(productNameGet, productName);
});