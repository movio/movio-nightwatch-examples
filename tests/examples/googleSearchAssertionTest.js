module.exports = {

  /**
   * A brief example test that uses element selectors
   * from a page objects file 'pageObjects/googlePage.js'\
   * and then uses assertions to test the page.
   */

  'Demo of Assertion testing on Google page': function (browser) {
    const googlePage = browser.page.googlePage();

    googlePage.navigate();
    browser.pause(1000);

    // expect element  to be present in 1000ms
    googlePage.expect.element('@body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    googlePage.expect.element('@listItem').to.have.css('display');

    // expect element  to have attribute 'class' which contains text 'vasq'
    googlePage.expect.element('@body').to.have.attribute('class').which.contains('vasq');

    // expect element <#lst-ib> to be an input tag
    googlePage.expect.element('@listItem').to.be.an('input');

    // expect element <#lst-ib> to be visible
    googlePage.expect.element('@listItem').to.be.visible;

    browser.end();
  },
};
