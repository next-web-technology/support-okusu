import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4203',
    specPattern: 'projects/shared/cypress/e2e/**/*.cy.ts',
    supportFile: 'projects/shared/cypress/support/e2e.ts',
  },
  video: true,
});
