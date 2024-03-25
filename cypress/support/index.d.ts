declare namespace Cypress {
  type UserDetails = {
    email: string;
    password: string;
  };

  interface Chainable<Subject = any> {
    login(userDetail?: UserDetails): Chainable<any>;
  }
}
