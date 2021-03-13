module.exports = {
  preset: 'jest-preset-angular',
  verbose: false,
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/tsconfig.spec.json'
    }
  }
};
