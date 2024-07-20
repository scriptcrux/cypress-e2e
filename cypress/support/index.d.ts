declare namespace Cypress {
  type UserDetails = {
    email: string;
    password: string;
  };
  type usercreds = { email: string; password: string };

  type levels = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

  interface Chainable<Subject = any> {
    login(userDetail?: UserDetails): Chainable<any>;
    loginWithSession(userDetail?: UserDetails): Chainable<any>;
    readJSONFile(fileName: string, newEntry: object): Chainable<any>;
    readCSVFile(fileName: string, newEntry: usercreds): Chainable<any>;
    logMessage(message: string, level: levels): Chainable<any>;
  }
}
