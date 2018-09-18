const assert = require('assert');
const { Given } = require('cucumber');
const { By } = require('selenium-webdriver');


//Login Background
Given('I am logged with {string} using login={string} and password={string}', async function (firstname, login, password) {
  await this.driver.get(this.domainUrl);
  await this.waitOverlay();
  await this.driver.findElement(By.id('topbar-login-link')).click();
  this.driver.switchTo().frame('iframeLogin');
  await this.waitOverlay();
  await this.driver.findElement(By.id('signinField')).sendKeys(login);
  await this.driver.findElement(By.id('password')).sendKeys(password);
  await this.driver.findElement(By.id('signinButtonSend')).click();
  await this.driver.switchTo().defaultContent();
  await this.driver.findElement(By.className('profile')).click();
  await this.waitOverlay();
  const userName = await this.driver.findElement(By.className('profile-name ng-binding')).getText();
  assert.strictEqual(userName, firstname);
});