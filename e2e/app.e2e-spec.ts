import { Ng2AgriOfficialPage } from './app.po';

describe('ng2-agri-official App', function() {
  let page: Ng2AgriOfficialPage;

  beforeEach(() => {
    page = new Ng2AgriOfficialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
