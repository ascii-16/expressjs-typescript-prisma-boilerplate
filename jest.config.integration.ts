import config from './jest.config';

const integrationConfig: typeof config = {
  ...config,
  testRegex: '(/__tests__/.*|(\\.|/)(integration\\.test))\\.(js?|ts?)?$',
};

export default integrationConfig;
