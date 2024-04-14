import { fakerEN_IN as faker } from '@faker-js/faker';
import * as fs from 'fs';
import path from 'path';
import navigationPage from './pages/Accounts/NavigationPage';
import registerPage from './pages/Accounts/RegisterPage';
import successPage from './pages/Accounts/SuccessPage';
import myAccountPage from './pages/Accounts/MyAccountPage';
import loginPage from './pages/Accounts/LoginPage';
import navBarPage from './pages/Navbar/NavBarPage';
import topCategoriesPage from './pages/Categories/TopCategoriesPage';
import phonesAndPDAPage from './pages/Categories/PhonesAndPDAPage';
import productPage from './pages/Products/ProductPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

describe('template spec', () => {
  const fileNamecsv = 'cypress/fixtures/login.csv';
  const fileNamejson = 'cypress/fixtures/login.json';
  before('Navigation to portal', function () {
    cy.visit('/');
    cy.fixture('login.json').then(function (data) {
      this.newData = data[1];
    });
  });

  // beforeEach(function () {
  //for seesion use
  //   cy.loginWithSession();
  //   cy.visit('/');
  // });

  xit('user is able to register', () => {
    //generating data
    const username = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const cellNumber = faker.phone.number();
    const password = faker.internet.password();

    navigationPage.openMyAccountMenu();
    navigationPage.openRegisterPage();
    registerPage.completeRegistration(username, lastname, email, cellNumber, password, password, 'Yes');

    cy.readJSONFile(fileNamejson, { email, password });

    cy.readCSVFile(fileNamecsv, { email, password });

    // //moving to main page
    successPage.selectContinueBtn();

    //verifying logged in to welcome page
    myAccountPage.verifyAccountHeader('card-header');
  });

  xit('user is able to login', function () {
    // cy.login(this.newData);
    // cy.login();

    // opening account menu
    navigationPage.openMyAccountMenu();

    //opening registration form
    navigationPage.openLoginPage();

    loginPage.login(this.newData.email, this.newData.password);

    loginPage.verifyPageURL('?route=account/account');

    // cy.contains('My Account');
    // cy.contains('My Orders');
    myAccountPage.verifyAccountHeader('card-header');
    myAccountPage.verifyOrderHeader('card-header');
  });

  xit('using single command to login', function () {
    // opening account menu
    navigationPage.openMyAccountMenu();

    //opening registration form
    navigationPage.openLoginPage();

    //without user
    // cy.login();

    //with user
    cy.login(this.newData);

    loginPage.verifyPageURL('?route=account/account');

    // cy.contains('My Account');
    // cy.contains('My Orders');
    myAccountPage.verifyAccountHeader('card-header');
    myAccountPage.verifyOrderHeader('card-header');
  });

  xit('login flow using cy session ', function () {
    /* now we can navigate to any page using session we just need to use cy.visit("/url to navigate to") */

    // cy.visit('/');
    // //without user
    // cy.loginWithSession();

    //with user
    // cy.login(this.newData);
    navBarPage.openHomeTab();

    //open category
    topCategoriesPage.openPhoneCategory();

    //verify header
    phonesAndPDAPage.verifyPageHeader('PDAs', 'Phones & PDAs');

    //navigate to home page
  });

  it('end to end flow for the placing the order ', function () {
    //without user
    // cy.login();

    //with user
    cy.login(this.newData);

    //navigate to home page
    navBarPage.openHomeTab();

    //open category
    topCategoriesPage.openPhoneCategory();

    //verify header
    phonesAndPDAPage.verifyPageHeader('PDAs', 'Phones & PDAs');

    //select product
    phonesAndPDAPage.selectProduct('HTC Touch HD');

    productPage.verifyBreadCrumb('HTC Touch HD');

    productPage.setProductItem('2');
    productPage.setProductItem('1');

    productPage.clickBuyNowBtn();

    CheckoutPage.verifyBreadCrumb('Checkout');
  });
});
