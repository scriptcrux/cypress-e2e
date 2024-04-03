import Page from '../Page';

class NavBarPage extends Page {
  get homeTab() {
    return cy.contains('Home');
  }

  openHomeTab() {
    this.homeTab.click();
  }
}

export default new NavBarPage();
