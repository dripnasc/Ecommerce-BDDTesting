const { After, AfterAll, Status } = require('cucumber');
const fs = require('fs');
const path = require('path');
const sanitize = require('sanitize-filename');

After(function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    this.driver.takeScreenshot().then(function (data) {
      const base64Data = data.replace(/^data:image\/png;base64,/, '');
      fs.writeFile(path.join('screenshots', sanitize(scenario.pickle.name + '.png').replace(/ /g, '_')), base64Data, 'base64', function (err) {
        if (err) {
          console.error(err);
        }
      });
    });
  }
  return this.driver.quit();
});
