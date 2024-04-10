import Page from '../Page';

class ProductPage extends Page {
  get productInput() {
    return cy.get('#entry_216841').find('[aria-label="Decrease quantity"]').parent().next();
  }

  get buyNowbtn() {
    return cy.contains('Buy now');
  }

  setProductItem(input: string) {
    this.productInput.clear();
    this.productInput.type(input);
  }

  clickBuyNowBtn() {
    this.buyNowbtn.click();
  }
}

export default new ProductPage();
