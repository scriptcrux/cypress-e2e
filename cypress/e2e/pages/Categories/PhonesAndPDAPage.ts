import Page from '../Page';

class PhoneAndPDSPage extends Page {
  get products() {
    return cy.get('.product-layout');
  }
  selectProduct(productName: string) {
    this.products.find('.title').find(`:contains(${productName})`).click();
  }
}

export default new PhoneAndPDSPage();
