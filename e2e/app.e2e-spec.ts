import { JdInventoryPage } from './app.po';

describe('jd-inventory App', () => {
  let page: JdInventoryPage;

  beforeEach(() => {
    page = new JdInventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
