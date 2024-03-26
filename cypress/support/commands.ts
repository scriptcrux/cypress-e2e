// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export default function addCustomCommands() {
  Cypress.Commands.add('login', function (userDetails?) {
    let email: string, password: string;
    if (userDetails) {
      email = userDetails.email;
      password = userDetails.password;
      cy.log('if', email, password);
    } else {
      cy.fixture('login.json').then(function (data) {
        this.newData = data[0];
      });
      cy.log('this.newData', this.newData);
      email = this.newData.email;
      password = this.newData.password;
    }
    // cy.log('details-outside', email, password);
    //opening account menu
    cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    //opening registration form
    cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Login")').click();

    //typing email and password
    cy.contains('E-Mail Address').siblings('.form-control').type(email);
    cy.contains('Forgotten Password').prev('[placeholder="Password"]').type(password);

    //logged in
    cy.get('form').children('input[type="submit"]').click();
  });
}
