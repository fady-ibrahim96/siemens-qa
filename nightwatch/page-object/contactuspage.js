const contactUsPageData = require('/Users/apple/Desktop/qa-task/nightwatch/data/testdata.json') 
module.exports={
    elements: {
        layout:'div#page > .columns-container',
        body:'body',
        contactForm:'form.contact-form-box',
        mail:'input#email',
        submitButton: 'button#submitMessage > span',
        errorBox: 'div#center_column > .alert.alert-danger',
        unselectedSubjectHeading:'select[id="id_contact"] option[value="0"]',
        webMasterSubjectHeading:'select[id="id_contact"] option[value="1"]',
        customerServiceSubjectHeading:'select[id="id_contact"] option[value="2"]',
        webMasterMessage:".col-md-3.col-xs-12 > p:nth-of-type(3)",
        customerServiceMessage:".col-md-3.col-xs-12 > p:nth-of-type(2)",
        invalidMailCheckBox:".form-error.form-group",
        validMailCheckBox:".form-group.form-ok",
        messageField:"textarea#message",
        noSubjectErrorMessage:"div#center_column li",
        successMessage:"div#center_column > .alert.alert-success"

    },

        waitForContactFormVisible(browser){
            return browser.waitForElementVisible(this.elements.contactForm, 2000)
                //    browser.waitForElementVisible(this.elements.contactForm)
        },
        waitForBodyAndTitle(browser){
            return browser.assert.titleContains('Contact us - My Store')
                        .waitForElementVisible(this.elements.body, 2000);
        },
        selectAssertWebMaster(browser){
            return browser.click(this.elements.webMasterSubjectHeading)
                          .assert.containsText(this.elements.webMasterMessage,"If a technical problem occurs on this website") 

        },
        selectAssertCustomerService(browser){
            return browser.click(this.elements.customerServiceSubjectHeading)
                          .assert.containsText(this.elements.customerServiceMessage,"For any question about a product, an order") 

        },
        insertInvalidMail(browser){
            return browser.setValue(this.elements.mail,"fady.ibrahimmansour")
                          .click(this.elements.layout)
                          .assert.elementPresent(this.elements.invalidMailCheckBox)
        },
        insertValidMail(browser){
            return browser.setValue(this.elements.mail,"fady.ibrahimmansour@gmail.com")
                          .click(this.elements.layout)
                          .assert.elementPresent(this.elements.validMailCheckBox)
        },
        insertMessage(browser){
            return browser.setValue(this.elements.messageField,contactUsPageData.SecondTestCase.Message)
        },
        clickSendButton(browser){
            return browser.click(this.elements.submitButton)
        },
        assertErrorFieldexists(browser){
            return browser.assert.elementPresent(this.elements.errorBox)

        },
        assertErrorFieldexistsWithNoSubjectSelected(browser){
            return browser.assert.elementPresent(this.elements.errorBox)
                          .assert.containsText(this.elements.errorBox,contactUsPageData.SecondTestCase.noSubjectErrorMessage)   

        },
        assertErrorFieldexistsWithNoMessageField(browser){
            return browser.assert.elementPresent(this.elements.errorBox)
                          .assert.containsText(this.elements.errorBox,contactUsPageData.SecondTestCase.noMessageErrorMessage)   

        },
        assertSuccessMessage(browser){
            return browser.assert.elementPresent(this.elements.successMessage)
                          .assert.containsText(this.elements.successMessage,contactUsPageData.SecondTestCase.successMessage)

        }
    };
     
    
    

