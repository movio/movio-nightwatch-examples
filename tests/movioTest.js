module.exports = {
 
  /**
   * A brief example test that uses page (raw) element
   * selectors directly, i.e: doesn't use a  page object 
   * references in 'pageObjects' directory.
   */

  'Simple demo to search for Movio using Google Search': function (browser) {

    // Navigate to Google Search page
    browser.url('http://www.google.com');
    
    browser.waitForElementVisible('body', 1000);
    browser.setValue('input[type=text]', 'movio');
    browser.waitForElementVisible('button[name=btnG]', 1000);
    browser.click('button[name=btnG]');
    browser.pause(1000);
    
    // Test (assert) that Google Search found Movio
    browser.assert.containsText('#main', 'Movio');

    // Use the browser object directly to end the test.
    browser.end();
  },
};
