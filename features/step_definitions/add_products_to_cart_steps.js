const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');


//Scenario Outline: Successfully adding several items of a product to cart
Given('I had added {int} items of the product to my cart', async function (quantity) {
  const plusBtn = await this.driver.findElement(By.className('adds track-satellite-oneclick'));
  for (click = 0; click < quantity - 1; click++) {
    plusBtn.click();
  }
  await this.driver.findElement(By.className('button-success button-pill right buy-button buy-button-product fluid')).click();
});

Then('The product {string} can be seen on my cart', async function (productTitle) {
  await this.driver.findElement(By.className('cart')).click();
  await this.driver.findElement(By.className('my-cart-header-title')).isDisplayed();
  const productNameDescription = await this.driver.findElement(By.className('link link-description')).getText();
  assert.equal(productNameDescription, productTitle);
});

Then('The quantity {int} added is correctly shown in the cart', async function (qntAdded) {
  const qntCartShowing = await this.driver.findElement(By.className('quantity-spinner ui-spinner-input')).getAttribute('value');
  assert.equal(qntCartShowing, qntAdded);
});