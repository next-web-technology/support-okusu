import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4201',
    specPattern: 'projects/web/cypress/e2e/**/*.cy.ts',
    supportFile: 'projects/web/cypress/support/e2e.ts',
  },
});
