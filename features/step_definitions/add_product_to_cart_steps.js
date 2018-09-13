const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

// Given ('I had successfully added a product to my cart', async function (){

// });

//Scenario Outline: Add <quantity> items of product to cart
When('I select {int} of this product', async function (quantity) {
  const plusBtn = await this.driver.findElement(By.className('adds track-satellite-oneclick'));
  for (click = 0; click < quantity; click++) {
    plusBtn.click();
  }
});


When('I click to add the product to my cart', async function () {
  await this.driver.findElement(By.className('button-success button-pill right buy-button buy-button-product fluid')).click();
});
