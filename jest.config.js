module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/__tests__/**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/static/'],
  coverageReporters: ['lcov', 'text', 'json'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        suiteNameTemplate: '{filepath}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        outputName: 'junit.xml',
      },
    ],
  ],
  // collectCoverageFrom: ['lib/**/*.js'],
};
