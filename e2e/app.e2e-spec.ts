import { UseRxJsNgPage } from './app.po';

describe('use-rx-js-ng App', () => {
  let page: UseRxJsNgPage;

  beforeEach(() => {
    page = new UseRxJsNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
