const rootConfig = require('../jest.config');

module.exports = {
  ...rootConfig,
  testMatch: ['<rootDir>/tests/integration/**/*.test.js'],
  globalSetup: '<rootDir>/tests/setup.js',
  globalTeardown: '<rootDir>/tests/teardown.js',
};