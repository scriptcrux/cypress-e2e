import { defineConfig } from 'cypress';
import baseConfig from './cypress.config';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'https://www.google.com',
  },
});
