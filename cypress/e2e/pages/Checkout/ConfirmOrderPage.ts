import Page from '../Page';
type subscriptionButton = 'Yes' | 'No';

class CheckoutPage extends Page {
  get newAddressChkBox() {
    return cy.get('#input-payment-address-new');
  }
  get existingAddressBlock() {
    return cy.get('#payment-existing');
  }

  get firstName() {
    return cy.get('#input-payment-firstname');
  }

  get LastName() {
    return cy.get('#input-payment-lastname');
  }

  get company() {
    return cy.get('#input-payment-company');
  }

  get address() {
    return cy.get('input-payment-address-1');
  }

  get contactNum() {
    return cy.get('[type="tel"]');
  }

  get City() {
    return cy.get('#input-payment-city');
  }

  get PostCode() {
    return cy.get('#input-payment-postcode');
  }

  get Country() {
    return cy.get('[name="country_id"]');
  }

  get RegionOrState() {
    return cy.get('[name="zone_id"]');
  }

  get ReuseAddressCheckbox() {
    return cy.get('.custom-control-label').parent().find('.custom-control-input');
  }

  get AddCommentBox() {
    return cy.get('form-control');
  }

  get termsAndConditionsCheck() {
    return cy.get('.custom-control-label').parent().get('#input-agree');
  }

  get ContinueBtn() {
    return cy.get('button-save');
  }

  enterBillingDetails() {
    //here we need to select body or element which is always there and then needs to apply then block
  }

  //   enterPersonalDetails(firstName: string, lastName: string, email: string, contactNumber: string) {
  //     this.firstName.type(firstName);
  //     this.LastName.type(lastName);
  //     this.emailField.type(email);
  //     this.contactNum.type(contactNumber);
  //   }
  //   enterPassword(pass: string, confirmPass: string) {
  //     this.passwordField.type(pass);
  //     this.passwordConfirm.type(confirmPass);
  //   }

  //   enterNewsletter(option: subscriptionButton) {
  //     const subscriptionOption = option === 'Yes' ? '1' : '0';
  //     this.subscriptionButton.check(subscriptionOption, { force: true });
  //     this.privacyPolicyChkBox.click({ force: true });
  //     this.submitRegistrationBtn.click();
  //   }

  //   completeRegistration(
  //     firstName: string,
  //     lastName: string,
  //     email: string,
  //     contactNumber: string,
  //     pass: string,
  //     confirmPass: string,
  //     option: subscriptionButton
  //   ) {
  //     this.enterPersonalDetails(firstName, lastName, email, contactNumber);
  //     this.enterPassword(pass, confirmPass);
  //     this.enterNewsletter(option);
  //   }
}

export default new CheckoutPage();
