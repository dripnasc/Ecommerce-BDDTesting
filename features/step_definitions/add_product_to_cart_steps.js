const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

Given ('I had added the product to my cart', async function (){
  await this.driver.findElement(By.className('button-success button-pill right buy-button buy-button-product fluid')).click();
});

//Scenario Outline: Add <quantity> items of product to cart
When('I select {int} of this product', async function (quantity) {
  const plusBtn = await this.driver.findElement(By.className('adds track-satellite-oneclick'));
  for (click = 0; click < quantity - 1; click++) {
    plusBtn.click();
  }
});


When('I click to add the product to my cart', async function () {
  await this.driver.findElement(By.className('button-success button-pill right buy-button buy-button-product fluid')).click();
});

Then('The product can be seen on my cart', async function () {
  await this.driver.findElement(By.className('cart')).click();
  await this.driver.findElement(By.className('my-cart-header-title')).isDisplayed();
  const productNameDescription = await this.driver.findElement(By.className('link link-description')).getText();
  assert.equal(productNameDescription, "Chocolate Bombom Sonho De Valsa Pacote 1kg");
});


Then('The quantity {int} added is correctly shown in the cart', async function (qntAdded) {
  const qntCartShowing = await this.driver.findElement(By.className('quantity-spinner ui-spinner-input')).getAttribute('value');
  assert.equal(qntCartShowing, qntAdded);
});