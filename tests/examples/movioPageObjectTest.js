module.exports = {

  /**
   * A brief example test that uses element selectors
   * from a page objects file 'pageObjects/googlePage.js'.
   */

  'Running Step One - Navigate to Google Search page': function (browser) {
    const googlePage = browser.page.googlePage();
    
    googlePage.navigate();

    googlePage.waitForElementVisible('@body', 1000);
    googlePage.setValue('@searchBox', 'movio');
    googlePage.waitForElementVisible('@searchButton', 1000);
  },

  'Running Step Two - Search for Movio': function (browser) {
    const googlePage = browser.page.googlePage();

    // Not using a page object reference, so using the browser object directly.
    browser.pause(2000);
    
    googlePage.click('@searchButton');

    // Not using a page object reference, so using the browser object directly.
    browser.pause(1000);

    googlePage.assert.containsText('@main', 'Movio');

    // Not using a page object reference, so use the browser object directly to end the test.
    browser.end();
  },
};
