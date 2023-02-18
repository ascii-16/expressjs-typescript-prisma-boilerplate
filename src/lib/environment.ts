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
  isLocal: () => boolean;
}

class Environment implements IEnvironment {
  private _port: number;
  private _env: Environments;
  private _appUrl: string;

  constructor(nodeEnv?: Environments) {
    this.port = +process.env.PORT;
    this.setEnvironment(nodeEnv ?? Environments.LOCAL);
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
    let envPath = path.resolve(rootDir, EnvironmentFile[key]);
    if (!fs.existsSync(envPath)) {
      // Would throw error if .env.<NODE_ENV> file is not found
      // if you set CUSTOM_ENV to true
      const isCustomEnv = !!process.env.CUSTOM_ENV;
      if (isCustomEnv) {
        throw new Error(
          `${EnvironmentFile[key]} file is missing in root directory`
        );
      }
      envPath = path.resolve(rootDir, EnvironmentFile.DEFAULT);
    }
    return envPath;
  }

  private validateEnvValues() {
    const env = cleanEnv(process.env, envValidationConfig);
    this.port = env.PORT;
    this.appUrl = env.APP_BASE_URL;
  }

  public setEnvironment(env = Environments.LOCAL): void {
    this.env = env;

    const envKey = Object.keys(Environments).find(
      (key) => Environments[key] === this.env
    ) as keyof typeof Environments;
    const envPath = this.resolveEnvPath(envKey);

    if (!fs.existsSync(envPath)) {
      throw new Error('.env file is missing in root directory');
    }

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

  public isLocal() {
    return this.env === Environments.LOCAL;
  }
}

export default new Environment();
