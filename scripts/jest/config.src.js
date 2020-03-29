module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  preset: 'ts-jest',
  rootDir: process.cwd(),
  roots: ['<rootDir>/test'],
  testMatch: ['<rootDir>/test/*.spec.ts?(x)'],
  transform: { '^.+\\.(js|tsx?)$': 'ts-jest' },
}
