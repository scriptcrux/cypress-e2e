import Page from '../Page';
type subscriptionButton = 'Yes' | 'No';

interface AdressDetails {
  firsName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  postCode: string;
  country: string;
  region: string;
}

class CheckoutPage extends Page {
  get newAddressChkBox() {
    return cy.get('#input-payment-address-new');
  }
  get existingAddressBlock() {
    return cy.get('#payment-existing');
  }

  get existingAddressDropdown() {
    return this.existingAddressBlock.find("[name='address_id']");
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
    return cy.get('#input-payment-address-1');
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
    return cy.get('#input-comment');
  }

  get termsAndConditionsCheck() {
    return cy.get('.custom-control-label').parent().get('#input-agree');
  }

  get ContinueBtn() {
    return cy.get('#button-save');
  }

  enterCustomerDetails(firstName: string, lastName: string, company: string) {
    this.firstName.type(firstName);
    this.LastName.type(lastName);
    this.company.type(company);
  }

  AddNewAddress(address1: string, city: string, postCode: string, country: string, region: string) {
    this.address.type(address1);
    this.City.type(city);
    this.PostCode.type(postCode);
    this.Country.select(country);
    this.RegionOrState.select(region);
  }

  selectBillingDetails(useNewAddress = false, options = 0) {
    cy.get('body').then(($body) => {
      if ($body.find('#payment-existing').length) {
        if (useNewAddress) this.newAddressChkBox.click();
        else {
          this.existingAddressDropdown.select(options);
        }
      }
    });
  }

  enterBillingDetails(addressDetails: AdressDetails) {
    const { firsName, lastName, company, address1, city, postCode, country, region } = addressDetails;
    this.enterCustomerDetails(firsName, lastName, company);
    this.AddNewAddress(address1, city, postCode, country, region);
  }

  completeCheckout(comment: string) {
    this.AddCommentBox.type(comment);
    this.termsAndConditionsCheck.click({ force: true });
    this.ContinueBtn.click();
  }
}

export default new CheckoutPage();
