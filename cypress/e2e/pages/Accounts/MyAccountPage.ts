class MyAccountPage {
  get pageHeader() {
    return cy.contains('My Account');
  }
  verifyPageHeader(cls: string) {
    this.pageHeader.should('have.class', cls);
  }
}

export default new MyAccountPage();
