import Page from '../Page';

class ProductPage extends Page {
  get homeTab() {
    return cy.contains('Home');
  }

  openHomeTab() {
    this.homeTab.click();
  }
}

export default new ProductPage();
