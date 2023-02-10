export enum Environments {
  LOCAL = 'local',
  PRODUCTION = 'prod',
  DEV = 'dev',
  TEST = 'test',
  STAGING = 'staging',
}

export enum EnvironmentFile {
  DEFAULT = '.env',
  LOCAL = '.env.local',
  PRODUCTION = '.env.prod',
  DEV = '.env.dev',
  TEST = '.env.test',
  STAGING = '.env.stage',
}

export type CommonEnvKeys = keyof typeof Environments;
export type EnvFileKeys = CommonEnvKeys | 'DEFAULT';
