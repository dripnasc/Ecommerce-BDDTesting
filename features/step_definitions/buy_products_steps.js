const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');


//Scenario: Successful Purchase using credit card
When('I access my cart page', async function () {
  await this.waitOverlay();
  await this.driver.findElement(By.className('cart')).click();
  await this.driver.wait(until.elementLocated(By.className('my-cart-header-title')));
});

When('I proceed to Check Out', async function () {
  await this.waitOverlay();
  await this.driver.wait(until.elementLocated(By.id('btn-finalize-cart'))).click();
});

When('I select a shipping address', async function () {
  await this.waitOverlay();
  await this.driver.wait(until.elementLocated(By.css('body > div.wrapper > main > div > div > div.address-card.choose.view-address'))).click();
  await this.driver.findElement(By.css('[data-js="continue"]')).click();
});

When('I confirm product={string} and quantity={int} at my purchase summary', async function (productTitle, quantity) {
  await this.waitOverlay();
  //confirming name
  await this.driver.wait(until.elementLocated(By.className('product-list-item')));
  const summaryTitle = await this.driver.findElement(By.className('product-text')).getText();
  assert.strictEqual(summaryTitle, productTitle);
  //confirming quantity
  const summaryQnt = await this.driver.findElement(By.className('product-item-quantity')).getText();
  assert.strictEqual(summaryQnt, quantity + 'x');
  //Proceeding
  await this.driver.wait(until.elementLocated(By.css('[data-js="continue"]'))).click();
});

Then('Credit card payment option is displayed', async function () {
  await this.waitOverlay();
  await this.driver.wait(until.elementLocated(By.className('wm-icon-credit-card-active'), 10000));
  await this.driver.findElement(By.className('wm-icon-credit-card-active')).isDisplayed();
});
