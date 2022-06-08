module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/stories/**',
    '!<rootDir>/pages/**',
    '!<rootDir>/styles/**',
    '!**/styles/**',
    '!<rootDir>/constants/**',
    '!<rootDir>/components/page/**',
    '!**/*.d.ts',
    '!**/types/**',
    '!**/*.config.ts',
  ],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.spec.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: 'jest-coverage',
  moduleDirectories: ['node_modules', '<rootDir>'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
