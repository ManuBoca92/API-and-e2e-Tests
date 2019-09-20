import { element, by } from "protractor";

describe("Allianz ui test", function() {
  it("should go to webpage", function() {
    browser.waitForAngularEnabled(false);
    browser.get(
      "https://b2c-es.uat.booking.allianz-assistance.com/iframe.html?angularparams=/TRAVEL/B2C/ES/es_ES/step-1"
    );
    browser.switchTo().frame(element(by.tagName("iframe")).getWebElement());
  });
});
