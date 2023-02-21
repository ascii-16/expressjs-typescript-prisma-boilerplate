import fs from 'fs';
import path from 'path';
import { config as configDotenv } from 'dotenv';
import { cleanEnv } from 'envalid';
import {
  type CommonEnvKeys,
  EnvironmentFile,
  Environments,
} from '@/utils/enums/environment.enum';
import envValidationConfig from '@/config/env-validation.config';

export interface IEnvironment {
  getCurrentEnvironment: () => string;
  setEnvironment: (env?: Environments) => void;
  isProd: () => boolean;
  isDev: () => boolean;
  isTest: () => boolean;
  isStage: () => boolean;
}

class Environment implements IEnvironment {
  private _port: number;
  private _env: Environments;
  private _appUrl: string;

  constructor() {
    this.port = +process.env.PORT;
    this.setEnvironment(process.env.NODE_ENV ?? Environments.DEV);
  }

  get env() {
    return this._env;
  }

  set env(value) {
    this._env = value;
  }

  get port() {
    return this._port;
  }

  set port(value) {
    this._port = value;
  }

  get appUrl() {
    return this._appUrl;
  }

  set appUrl(value) {
    this._appUrl = value;
  }

  private resolveEnvPath(key: CommonEnvKeys): string {
    const rootDir: string = path.resolve(__dirname, '../../');
    const envPath = path.resolve(rootDir, EnvironmentFile[key]);
    const defaultEnvPath = path.resolve(rootDir, EnvironmentFile.DEFAULT);
    if (!fs.existsSync(envPath) && !fs.existsSync(defaultEnvPath)) {
      throw new Error(
        ` \n======================================================================================
          \n${EnvironmentFile.DEFAULT} and ${EnvironmentFile[key]} is missing in root directory. One of them is required
          \n======================================================================================
        `
      );
    }
    return fs.existsSync(envPath) ? envPath : defaultEnvPath;
  }

  private validateEnvValues() {
    const env = cleanEnv(process.env, envValidationConfig);
    this.port = env.PORT;
    this.appUrl = env.APP_BASE_URL;
  }

  public setEnvironment(env = Environments.DEV): void {
    this.env = env;

    const envKey = Object.keys(Environments).find(
      (key) => Environments[key] === this.env
    ) as keyof typeof Environments;
    const envPath = this.resolveEnvPath(envKey);

    configDotenv({ path: envPath });
    this.validateEnvValues();
  }

  public getCurrentEnvironment() {
    return this.env;
  }

  public isProd() {
    return this.env === Environments.PRODUCTION;
  }

  public isDev() {
    return this.env === Environments.DEV;
  }

  public isStage() {
    return this.env === Environments.STAGING;
  }

  public isTest() {
    return this.env === Environments.TEST;
  }
}

export default new Environment();
