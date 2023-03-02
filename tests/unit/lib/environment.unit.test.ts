import { Environment } from '../../../src/lib/environment';
import { Environments } from '../../../src/enums/environment.enum';
import appConfig from '../../../src/config/app.config';

describe('[Unit] - environment', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  it('should initialize with default values', () => {
    // NODE_ENV would be set to test by jest by default
    process.env.PORT = undefined as unknown as typeof process.env.PORT;
    process.env.NODE_ENV = undefined as unknown as typeof process.env.NODE_ENV;
    const environment = new Environment();
    expect(environment.getCurrentEnvironment()).toEqual(Environments.DEV);
    expect(environment.isDev()).toEqual(true);
    expect(environment.isProd()).toEqual(false);
    expect(environment.isStage()).toEqual(false);
    expect(environment.isTest()).toEqual(false);
    expect(environment.port).toEqual(appConfig.defaultPort);
  });

  it('should set environment values', () => {
    const environment = new Environment();
    environment.setEnvironment(Environments.DEV);
    expect(environment.getCurrentEnvironment()).toEqual(Environments.DEV);
    expect(environment.isDev()).toEqual(true);
    expect(environment.isProd()).toEqual(false);
    expect(environment.isStage()).toEqual(false);
    expect(environment.isTest()).toEqual(false);
  });

  it('should throw an error when environment file is not found', () => {
    expect(() => {
      const environment = new Environment();
      environment.setEnvironment('invalid' as Environments);
    }).toThrowError();
  });

  it('should read values from environment file', () => {
    const { PORT, APP_BASE_URL } = process.env;
    const environment = new Environment();
    environment.setEnvironment('production' as Environments);
    expect(environment.port).toEqual(PORT ? +PORT : appConfig.defaultPort);
    expect(environment.appUrl).toEqual(APP_BASE_URL);
  });
});
