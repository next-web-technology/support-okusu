import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4202',
    specPattern: 'projects/lp/cypress/e2e/**/*.cy.ts',
    supportFile: 'projects/lp/cypress/support/e2e.ts',
  },
  video: true,
});
