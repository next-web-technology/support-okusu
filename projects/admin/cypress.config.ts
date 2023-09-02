import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'projects/admin/cypress/e2e/**/*.cy.ts',
    supportFile: 'projects/admin/cypress/support/e2e.ts',
  },
  video: true,
});
