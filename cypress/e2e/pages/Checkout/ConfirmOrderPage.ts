import Page from '../Page';
type subscriptionButton = 'Yes' | 'No';

class ConfirmOrderPage extends Page {
  get confirmOrderButton() {
    return cy.get('#button-confirm');
  }

  get EditOrderButton() {
    return cy.contains('Edit');
  }

  confirmOrder() {
    this.confirmOrderButton.click();
  }
}

export default new ConfirmOrderPage();
