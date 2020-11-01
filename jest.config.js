module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts',
    '!src/server.ts',
    '!node_modules/**'
  ],
  reporters: [ 'jest-junit', 'default' ]
};
