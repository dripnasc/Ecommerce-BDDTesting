const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, key } = require('selenium-webdriver');

Given('The e-commerce website is acessible', function () {
  this.driver.get(this.domainUrl);
  return this.driver.wait(until.elementsLocated(By.id('topbar-login-link'))).then(() => {
    return this.driver.findElements(By.id('topbar-login-link'));
  }).then(function (element) {
    assert.notEqual(element.length, 0, 'botao nao esta presente');
  });
});

Given('I am logged into the e-commerce website', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});