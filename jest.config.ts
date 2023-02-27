import { type Config } from 'jest';

const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)?$';
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex,
  verbose: true,
  notify: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
