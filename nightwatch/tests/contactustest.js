const contactUsPage = require('/Users/apple/Desktop/qa-task/nightwatch/page-object/contactuspage.js') 
const contactUsPageData = require('/Users/apple/Desktop/qa-task/nightwatch/data/testdata.json') 
describe('contact us automation', function() {
    beforeEach(browser => browser.navigateTo(contactUsPageData.firstTestCase.url));
  
    it('assert contact us form is visible', function(browser) {
      contactUsPage.waitForContactFormVisible(browser)
      contactUsPage.waitForBodyAndTitle(browser)
        // .setValue('input#email', 'mouricehanaa@gmail.com')
        // // .assert.visible('button[type=submit]')
        // .click('button#submitMessage > span')
        // .assert.visible('div#center_column > .alert.alert-danger')
        // .assert.textContains('div#center_column > .alert.alert-danger', 'There is 1 error');
    });
    it('assert on subject heading message is displayed upon selecting webmaster', function(browser){
      contactUsPage.selectAssertWebMaster(browser);
    });
    it('assert on subject heading message is displayed upon selecting Customer Service', function(browser){
      contactUsPage.selectAssertCustomerService(browser);
    });
    it('assert on inserting invalid value for mail', function(browser){
      contactUsPage.insertInvalidMail(browser)
        
    });
    it('assert on inserting valid value for mail', function(browser){
      contactUsPage.insertValidMail(browser)
        
    });
    it('assert on error message is displayed while inserting value in message field and leaving mail field blank/invalid', function(browser){
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexists(browser)

    });
    it('assert on error message is displayed while inserting value in message field mail and leaving subject heading dropdown unselected ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoSubjectSelected(browser)

    });
    it('assert on error message is displayed while inserting value in message and mail fields and leaving subject heading dropdown unselected ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoSubjectSelected(browser)

    });
    it('assert on error message is displayed while inserting value in mail and subject heading and leaving message field blank ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoMessageField(browser)

    });
    it('assert on success message when filling the form with valid values', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.selectAssertCustomerService(browser);
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertSuccessMessage(browser)

    });
    after(browser => browser.end());
  });