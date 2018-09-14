const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');


//Login Background
Given('I am logged with {string} using login={string} and password={string}', async function (firstname, login, password) {
  await this.driver.get(this.domainUrl);
  await this.waitOverlay();
  await this.driver.findElement(By.id('topbar-login-link')).click();
  this.driver.switchTo().frame('iframeLogin');
  await this.driver.findElement(By.id('signinField')).sendKeys(login);
  await this.driver.findElement(By.id('password')).sendKeys(password);
  await this.driver.findElement(By.id('signinButtonSend')).click();
  await this.waitOverlay();
  await this.driver.switchTo().defaultContent();
  const userName = await this.driver.wait(until.elementLocated(By.id('suggestion-search'))).getAttribute('placeholder');
  assert.strictEqual(userName, 'Olá, ' + firstname + '. O que você procura?');
});