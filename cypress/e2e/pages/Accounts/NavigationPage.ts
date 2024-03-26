class Navigation {
  get openMyAccountMenu() {
    // return cy.contains(' My account');
    return cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")');
  }
  get openRegisterPage() {
    return cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Register")');
  }

  get openLoginPage() {
    return cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Login")');
  }
}

export default new Navigation();
