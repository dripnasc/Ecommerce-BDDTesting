const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

//Scenario: Successful Purchase using credit card
When('I am accessing my cart page', async function () {
  await this.driver.findElement(By.className('cart')).click();
  await this.driver.findElement(By.className('my-cart-header-title')).isDisplayed();
});

When('I proceed to Check Out', async function () {
  await this.driver.findElement(By.id('btn-finalize-cart')).click();
});

When('I select a shipping address', async function () {
  await this.driver.findElement(By.className('address-data')).click();
  await this.driver.findElement(By.className('btn btn-success')).click();
});

When('I confirm product={string} and quantity={int} at my purchase summary', async function (productTitle, quantity) {
  //confirming name
  await this.driver.sleep(10000);
  await this.driver.findElement(By.className('product-list-item')).isDisplayed();
  const summaryTitle = await this.driver.findElement(By.className('product-text')).getText();
  assert.equal(summaryTitle, productTitle);

  //confirming quantity
  const summaryQnt = await this.driver.findElement(By.className('product-item-quantity')).getText();
  assert.equal(summaryQnt, quantity + 'x');

  //Proceeding
  await this.driver.findElement(By.className('btn btn-success')).click();
});


Then('Credit card payment option is displayed', async function () {
  await this.driver.sleep(10000);
  await this.driver.findElement(By.className('wm-icon-credit-card-active')).isDisplayed();
});
