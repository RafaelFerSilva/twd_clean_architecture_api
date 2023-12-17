/** @type {import('jest').Config} */
const config = {
  roots: [
    '<rootDir>/src'
  ],

  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
