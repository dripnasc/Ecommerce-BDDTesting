const assert = require('assert');
const { When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');


//Scenario Outline: Successfully removing product from cart containing one product
When('I click to remove the product', async function () {
  await this.waitOverlay();
  await this.driver.findElement(By.className('link-trash')).click();
});

Then('I will be informed my cart is empty', async function () {
  await this.waitOverlay();
  const message = await this.driver.findElement(By.className('subtitle')).getText();
  assert.strictEqual(message, "Seu carrinho está vazio");
});
