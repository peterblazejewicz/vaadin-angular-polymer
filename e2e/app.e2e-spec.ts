import { VaadinAngularPage } from './app.po';

describe('vaadin-angular App', function() {
  let page: VaadinAngularPage;

  beforeEach(() => {
    page = new VaadinAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
