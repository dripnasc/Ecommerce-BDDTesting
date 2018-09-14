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
    // const blockOverlays = await this.driver.findElements(By.css('div.blockOverlay'));
    // console.log('waiting')
    // for(let i=0; i < blockOverlays.length; i++) {
    //   console.log(blockOverlays[i])
    //   const o = await blockOverlays[i].getCssValue('opacity');
    //   const d = await blockOverlays[i].getCssValue('display')
    //   console.log('opacity', o);
    //   console.log('display', d);
    //   await this.driver.wait(!blockOverlays[i].isDisplayed(), 10000, "BlockUI Overlay is still visible!");
    //   console.log('saiu tela1')
    // }
    await this.driver.sleep(5000);
  }

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

setDefaultTimeout(50 * 1000);
setWorldConstructor(world);