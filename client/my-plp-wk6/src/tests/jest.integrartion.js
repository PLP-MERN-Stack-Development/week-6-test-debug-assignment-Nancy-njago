const rootConfig = require('../jest.config');

module.exports = {
  ...rootConfig,
  testMatch: ['<rootDir>/src/tests/integration/**/*.test.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};