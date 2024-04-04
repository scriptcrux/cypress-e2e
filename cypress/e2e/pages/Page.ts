class Page {
  private get pageURL() {
    return cy.url();
  }

  verifyPageURL(partialPath: string) {
    this.pageURL.should('include', partialPath);
    this.pageURL.should('eq', `${Cypress.config().baseUrl}${partialPath}`);
  }
  verifyPageHeader(locator: string, expectedText: string) {
    cy.contains(locator).should('have.text', expectedText);
  }
}

export default Page;
