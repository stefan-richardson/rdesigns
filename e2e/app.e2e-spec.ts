import { RdesignsPage } from './app.po';

describe('rdesigns App', () => {
  let page: RdesignsPage;

  beforeEach(() => {
    page = new RdesignsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
