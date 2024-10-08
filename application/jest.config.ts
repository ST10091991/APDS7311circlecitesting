import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\\\]+$'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

export default config;