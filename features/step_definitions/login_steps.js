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

Given('I am logged in using credentials {string} {string}', function (username, password) {
  this.driver.get(this.domainUrl);
  return this.driver.wait(until.elementsLocated(By.id('topbar-login-link'))).then(() => {
    this.driver.findElement(By.id('topbar-login-link')).click();
    this.driver.wait(until.elementsLocated(By.xpath('signinField')));
    this.driver.wait(until.elementsLocated(By.id('password')));
    this.driver.wait(until.elementsLocated(By.id('siginButtonSend')));
    this.driver.findElement(By.id('signinField')).sendKeys(username);
    this.driver.findElement(By.id('password')).sendKeys(password);
    this.driver.findElement(By.id('siginButtonSend')).click();
    return this.driver.wait(until.elementsLocated(By.id('suggestion-search')));
  }).then(function (element) {
    //assert.equal(element, 'Olá, User. O que você procura?');
    assert.notEqual(element.length, 0, 'campo de busca nao esta presente');
  });
});