const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

// Given('The e-commerce website is acessible', function () {
//   this.driver.get(this.domainUrl);
//   return this.driver.wait(until.elementsLocated(By.id('topbar-login-link'))).then(() => {
//     return this.driver.findElements(By.id('topbar-login-link'));
//   }).then(function (element) {
//     assert.notEqual(element.length, 0, 'botao nao esta presente');
//   });
// });

Given('I am logged in using credentials username={string} and password={string}', function (username, password) {
  this.driver.get(this.domainUrl);
  this.driver.wait(until.elementsLocated(By.id('topbar-login-link'))).then(() => {
    this.driver.findElements(By.id('topbar-login-link')).click();
    this.driver.findElements(By.id('siginField')).sendKeys(username);
    this.driver.findElements(By.id('password')).sendKeys(password);
    this.driver.findElements(By.id('siginButtonSend')).click();
  }).then(function (element) {
    this.element = this.driver.findElements(By.id('suggestion-search')).getText();
    assert.equal(element, 'Olá, User. O que você procura?');
  });
});