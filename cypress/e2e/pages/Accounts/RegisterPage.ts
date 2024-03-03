class RegisterPage {
  get openMyAccountMenu() {
    return cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")');
  }
}

export default new RegisterPage();
