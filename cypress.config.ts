import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  video: false,
  projectId: 'nextjs-template',
  downloadsFolder: 'tests/UI/downloads',
  fixturesFolder: 'tests/UI/fixtures',
  screenshotsFolder: 'tests/UI/screenshots',
  videosFolder: 'tests/UI/videos',
  env: {
    baseUrl: 'http://localhost:3000',
  },

  e2e: {
    specPattern: 'tests/UI/**/*.cy.js',
    supportFile: 'tests/UI/support/index.js',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
