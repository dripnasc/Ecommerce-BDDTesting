const { setDefaultTimeout, setWorldConstructor } = require('cucumber');
const webdriver = require('selenium-webdriver');
const fs = require('fs');

const buildDriver = function () {
  return new webdriver.Builder().forBrowser('chrome').build();
};

const world = function () {

  const screenshotPath = 'screenshots';
  this.driver = buildDriver();
  //this.driver.manage().window().maximize();
  this.domainUrl = 'https://www.walmart.com.br';

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

setDefaultTimeout(50 * 1000);
setWorldConstructor(world);