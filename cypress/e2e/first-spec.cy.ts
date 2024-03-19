import { fakerEN_IN as faker } from '@faker-js/faker';
import * as fs from 'fs';
import path from 'path';

describe('template spec', () => {
  it('user is able to register', () => {
    // const username = faker.person.firstName();
    // const lastname = faker.person.lastName();
    // //email, telephone,password
    const email = faker.internet.email();
    // const cellNumber = faker.phone.number();
    const password = faker.internet.password();

    // cy.visit('/');

    // //opening account menu
    // cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    // //opening registration form
    // cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Register")').click();

    // //filling registration form
    // // cy.get('.form-control').filter('[placeholder="First Name"]').type('user123').should('have.value', 'user123');
    // cy.get('.form-control').filter('[placeholder="First Name"]').type(username).should('have.value', username);

    // // cy.get('#input-lastname').type('last1234');
    // cy.get('#input-lastname').type(lastname);

    // // cy.get('[placeholder="E-Mail"]').type('user1123@mail.com');
    // cy.get('[placeholder="E-Mail"]').type(email);

    // // cy.get('[type="tel"]').type('917894561230');
    // cy.get('[type="tel"]').type(cellNumber);

    // // cy.get('#input-password').type('qwerty@12345');
    // cy.get('#input-password').type(password);

    // // cy.get('#input-confirm').type('qwerty@12345');
    // cy.get('#input-confirm').type(password);

    // cy.get('.custom-control-label').filter(":contains('No')").prev().check({ force: true }).should('be.checked');

    // cy.get('.custom-control-label')
    //   .filter(':contains("I have read")')
    //   .parent()
    //   .children('#input-agree')
    //   .check({ force: true })
    //   .should('be.checked');

    // //submit details
    // cy.get('[value="Continue"]').click();

    // //verifying submission
    // cy.contains('Your Account Has Been Created!').should('have.class', 'page-title');

    const fileName = 'cypress/fixtures/login.csv';

    cy.task('readFileCSV', fileName).then((data) => {
      // console.log('readFileCSV=>data=>', data);

      cy.log('readFileCSV=>data=>', JSON.stringify(data));
    });

    // const newData = `${csvUsers}${email},${password}\n`;
    // console.log('newData', newData);
    // cy.log('newData=>', newData);
    // fs.writeFileSync(filename, newData);
    // cy.log('fileName=>', fileName);
    // cy.task('writeFileCSV', { fileName: fileName, newData: newData });

    // const fileName = 'cypress/fixtures/login.csv';

    // //moving to main page
    // cy.contains('Continue').click();

    // //verifying logged in to login page
    // cy.contains('My Account').should('have.class', 'card-header');
  });

  // it('user is able to login', () => {
  //   //JSON
  //   // cy.readFile(filename).then((list) => {
  //   //   list.push({ email, password });
  //   //   cy.log(JSON.stringify(list));
  //   //   cy.writeFile(filename, list);
  //   // });
  //   //Csv using cypress read/write methods
  //   // cy.readFile(filename).then((list) => {
  //   //   const newData = `${list}${email},${password}\n`;
  //   //   cy.log(JSON.stringify(newData));
  //   //   // cy.log(JSON.stringify(list));
  //   //   cy.writeFile(filename, newData);
  //   // });
  //   //csv using fs module
  //   // cy.task('readFileforStorage', fileName).then((data) => {
  //   //   cy.log('dotage', data);
  //   //   // const newcreatedData = JSON.stringify(`${email},${password}\n`);
  //   //   // cy.log(newcreatedData);
  //   //   const newData = `${data}\n${email},${password}`;
  //   //   // const newData = `${data},${newcreatedData}`;
  //   //   cy.task('writeFileCSV', { fileName: fileName, data: newData });
  //   // });
  // });
});
