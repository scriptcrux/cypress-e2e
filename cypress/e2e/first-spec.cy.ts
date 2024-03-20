import { fakerEN_IN as faker } from '@faker-js/faker';
import * as fs from 'fs';
import path from 'path';

describe('template spec', () => {
  before('Navigation to portal', function () {
    cy.visit('/');

    cy.fixture('login.json').then(function (data) {
      this.newData = data[0];
    });
  });

  /*   it.skip('user is able to register', () => {
    //generating data
    const username = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const cellNumber = faker.phone.number();
    const password = faker.internet.password();

    // cy.visit('/');

    //opening account menu
    cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    //opening registration form
    cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Register")').click();

    //filling registration form
    // cy.get('.form-control').filter('[placeholder="First Name"]').type('user123').should('have.value', 'user123');
    cy.get('.form-control').filter('[placeholder="First Name"]').type(username).should('have.value', username);

    // cy.get('#input-lastname').type('last1234');
    cy.get('#input-lastname').type(lastname);

    // cy.get('[placeholder="E-Mail"]').type('user1123@mail.com');
    cy.get('[placeholder="E-Mail"]').type(email);

    // cy.get('[type="tel"]').type('917894561230');
    cy.get('[type="tel"]').type(cellNumber);

    // cy.get('#input-password').type('qwerty@12345');
    cy.get('#input-password').type(password);

    // cy.get('#input-confirm').type('qwerty@12345');
    cy.get('#input-confirm').type(password);

    cy.get('.custom-control-label').filter(":contains('No')").prev().check({ force: true }).should('be.checked');

    cy.get('.custom-control-label')
      .filter(':contains("I have read")')
      .parent()
      .children('#input-agree')
      .check({ force: true })
      .should('be.checked');

    //submit details
    cy.get('[value="Continue"]').click();

    //verifying submission
    cy.contains('Your Account Has Been Created!').should('have.class', 'page-title');

    const fileNamecsv = 'cypress/fixtures/login.csv';
    const fileNamejson = 'cypress/fixtures/login.json';

    cy.readFile(fileNamejson).then((list) => {
      list.push({ email, password });
      cy.log(JSON.stringify(list));
      cy.writeFile(fileNamejson, list);
    });

    cy.task('readFileforStorage', fileNamecsv).then((data) => {
      cy.log('dotage', data);
      const newData = `${data}\n${email},${password}`;
      cy.task('writeFileCSV', { fileName: fileNamecsv, data: newData });
    });

    //moving to main page
    cy.contains('Continue').click();

    //verifying logged in to login page
    cy.contains('My Account').should('have.class', 'card-header');
  });
 */
  // before(function () {
  //   cy.fixture('login.json').then(function (data) {
  //     this.newData = data;
  //   });
  // });

  it('user is able to login', function () {
    // const fileNamecsv = 'cypress/fixtures/login.csv';
    // const fileNamejson = 'cypress/fixtures/login.json';

    cy.log('newData=>', this.newData);

    //opening account menu
    cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    //opening registration form
    cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Login")').click();

    cy.contains('E-Mail Address').siblings('.form-control').type(this.newData.email);
    cy.contains('Forgotten Password').prev('[placeholder="Password"]').type(this.newData.password);

    cy.get('form').children('input[type="submit"]').click();

    cy.url().should('include', '?route=account/account');
    cy.url().should('eq', `${Cypress.config().baseUrl}?route=account/account`);

    cy.contains('My Account');
    cy.contains('My Orders');

    // /* JSON */
    // cy.readFile(fileNamejson).then((list) => {

    //   cy.log(JSON.stringify(list));
    //   cy.writeFile(fileNamejson, list);
    // });
    // /* Csv using cypress read/write methods */
    // cy.readFile(fileNamecsv).then((list) => {
    //   const newData = `${list}${email},${password}\n`;
    //   cy.log(JSON.stringify(newData));
    //   // cy.log(JSON.stringify(list));
    //   cy.writeFile(fileNamecsv, newData);
    // });

    // /* csv using fs module */
    // cy.task('readFileforStorage', fileNamecsv).then((data) => {
    //   cy.log('dotage', data);
    //   // const newcreatedData = JSON.stringify(`${email},${password}\n`);
    //   // cy.log(newcreatedData);
    //   const newData = `${data}\n${email},${password}`;
    //   // const newData = `${data},${newcreatedData}`;
    //   cy.task('writeFileCSV', { fileName: fileNamecsv, data: newData });
    // });
  });
});
