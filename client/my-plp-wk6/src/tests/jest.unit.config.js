const rootConfig = require('../jest.config');

module.exports = {
  ...rootConfig,
  testMatch: ['<rootDir>/src/tests/unit/**/*.test.{js,jsx}'],
};