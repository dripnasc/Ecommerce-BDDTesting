const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

//Scenario: Successfull Purchase
Given('I am accessing my cart page', async function () {
  await this.driver.findElement(By.className('cart')).click();
  await this.driver.findElement(By.className('my-cart-header-title')).isDisplayed();
});

When('I proceed to Check Out', async function () {
  await this.driver.findElement(By.id('btn-finalize-cart')).click();
});

When('I select a shipping address', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('Credit card payment option is displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//Scenario: Empty Payment Method
Given('I had proceeded to Check Out', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('I had select a shipping address', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I try to confirm operation without selecting a payment method', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('Required fields will be highlighted', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I won\'t be able to confirm the purchase', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
