import { ServiceAngularPage } from './app.po';

describe('service-angular App', function() {
  let page: ServiceAngularPage;

  beforeEach(() => {
    page = new ServiceAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
