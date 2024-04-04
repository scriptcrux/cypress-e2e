import Page from '../Page';

class TopCategoriesPage extends Page {
  get phoneAndPDACategory() {
    return cy.get('.figure-caption').find(":contains('Phones & PDAs')");
  }

  openPhoneCategory() {
    this.phoneAndPDACategory.click();
  }
}

export default new TopCategoriesPage();
