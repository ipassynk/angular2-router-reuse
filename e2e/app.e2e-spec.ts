import { Angular2RouterReusePage } from './app.po';

describe('angular2-router-reuse App', function() {
  let page: Angular2RouterReusePage;

  beforeEach(() => {
    page = new Angular2RouterReusePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
