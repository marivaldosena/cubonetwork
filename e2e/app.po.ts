import { browser, element, by } from 'protractor';

export class FrontEndChallengePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  isNameFieldAvailable() {
    return element(by.css('app-root form #name')).isPresent();
  }

  isLastNameFieldAvailable() {
    return element(by.css('app-root form #lastname')).isPresent();
  }

  isShareFieldAvailable() {
    return element(by.css('app-root form #share')).isPresent();
  }
}
