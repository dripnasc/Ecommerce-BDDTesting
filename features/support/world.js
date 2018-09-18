const { setDefaultTimeout, setWorldConstructor } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');

const buildDriver = function () {
  const capabilities = {
    'chromeOptions': {
      'args': ['--start-maximized']
    }
  };
  return new Builder().withCapabilities(capabilities).forBrowser('chrome').build();
};

const world = function () {

  const screenshotPath = 'screenshots';
  this.driver = buildDriver();
  this.domainUrl = 'https://www.walmart.com.br';
  this.waitOverlay = async () => {
    const blockOverlays = await this.driver.findElements(By.css('div.blockUI'));
    for (let i = 0; i < blockOverlays.length; i++) {
      await this.driver.wait(until.stalenessOf(blockOverlays[i]) || until.elementIsNotVisible(blockOverlays[i]), 10000, "BlockUI Overlay is still visible!");
    }
  }

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

setDefaultTimeout(120 * 1000);
setWorldConstructor(world);