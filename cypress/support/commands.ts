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
  Cypress.Commands.add('login', (userDetails?) => {
    let email: string, password: string;
    if (userDetails) {
      email = userDetails.email;
      password = userDetails.password;
    } else {
      cy.fixture('login.json').then(function (data) {
        this.newData = data[0];
        email = this.newData.email;
        password = this.newData.password;
      });
      cy.log(email, password);
    }
    cy.log('login');
  });
}
