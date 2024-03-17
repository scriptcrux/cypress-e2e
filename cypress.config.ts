// const { defineConfig } = require('cypress');
// const fs = require('fs');
// const neatCSV = require('neat-csv');
import { defineConfig } from 'cypress';
import * as fs from 'fs';
import neatCsv from 'neat-csv';
import path from 'path';

export default defineConfig({
  e2e: {
    // baseUrl: 'https://example.cypress.io',
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    async setupNodeEvents(on, config) {
      // createe task to read from csv
      // const fileName = 'D:/FrondEnd/Testing/framework/cypress-e2e/cypress/fixtures/login.csv';
      const fileName = path.join(__dirname, 'cypress/fixtures/login.csv');

      const text = fs.readFileSync(fileName, 'utf8');
      console.log('text=>', text);
      const csv = await neatCsv(text);
      console.log('loaded the users');
      console.log(csv);
      config.env.usersList = csv;

      on('task', {
        writeFileCSV(data) {
          fs.writeFileSync(fileName, data);
          return null;
        },
      });

      return config;
    },
  },
});
