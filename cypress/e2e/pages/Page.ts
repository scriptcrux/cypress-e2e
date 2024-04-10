class Page {
  private get pageURL() {
    return cy.url();
  }
  private get breadCrumbs() {
    return cy.get('.breadcrumb').find('.active');
  }

  verifyPageURL(partialPath: string) {
    this.pageURL.should('include', partialPath);
    this.pageURL.should('eq', `${Cypress.config().baseUrl}${partialPath}`);
  }
  verifyPageHeader(locator: string, expectedText: string) {
    cy.contains(locator).should('have.text', expectedText);
  }
  verifyBreadCrumb(breadcrumbName: string) {
    this.breadCrumbs.should('have.text', breadcrumbName);
  }
}

export default Page;
