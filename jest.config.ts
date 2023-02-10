import type { Config } from 'jest';

const jestConfig: Config = {
  verbose: true,
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  testTimeout: 10000,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  fakeTimers: {
    enableGlobally: true,
  },
  modulePathIgnorePatterns: [
    '.srv/',
    '.lib/',
    '.pkg/',
    '.dist/',
    '.out/',
    'srv/',
    'lib/',
    'pkg/',
    'dist/',
    'out/',
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  extensionsToTreatAsEsm: ['.ts'],
};

export default jestConfig;
