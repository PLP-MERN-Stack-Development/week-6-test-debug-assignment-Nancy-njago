const rootConfig = require('../jest.config');

module.exports = {
  ...rootConfig,
  testMatch: ['<rootDir>/tests/unit/**/*.test.js'],
};