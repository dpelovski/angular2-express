import { SteraGroupPage } from './app.po';

describe('stera-group App', () => {
  let page: SteraGroupPage;

  beforeEach(() => {
    page = new SteraGroupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
