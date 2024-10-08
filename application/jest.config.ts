
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)








// // jest.config.ts
// import { defaults } from 'jest-config';

// const config = {
//   clearMocks: true,
//   moduleDirectories: ['node_modules', 'src'],
//   roots: ['<rootDir>/src'],
//   testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)'],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//     "^.+\\.(js|jsx)$": "babel-jest"
//   },  
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   collectCoverage: true,
//   coverageDirectory: 'coverage',
// };

// export default config;