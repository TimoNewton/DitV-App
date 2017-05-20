import { DitvAppPage } from './app.po';

describe('ditv-app App', () => {
  let page: DitvAppPage;

  beforeEach(() => {
    page = new DitvAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
