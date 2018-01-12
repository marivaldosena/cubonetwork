import { FrontEndChallengePage } from './app.po';

describe('front-end-challenge App', () => {
  let page: FrontEndChallengePage;

  beforeEach(() => {
    page = new FrontEndChallengePage();
    page.navigateTo();
  });

  it('should display message saying app title', () => {
    expect(page.getTitleText()).toContain("CADASTRE-SE");
  });

  it('should display form with name field', () => {
    expect(page.isNameFieldAvailable()).toBeTruthy(true);
  });

  it('should display form with lastname field', () => {
    expect(page.isLastNameFieldAvailable()).toBeTruthy();
  });

  it('should display form with share field', () => {
    expect(page.isShareFieldAvailable()).toBeTruthy();
  });
});
