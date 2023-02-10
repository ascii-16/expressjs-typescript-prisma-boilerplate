import { Environments } from '@/utils/enums/environment.enum';

interface AppConfig {
  port: number;
  apiBasePath: string;
  apiVersion: string;
  env: Environments;
  docs: {
    swaggerUIPath: string;
    apiDocsPath: string;
  };
}

const appConfig: AppConfig = {
  port: +process.env.PORT ?? 5000,
  apiBasePath: 'api',
  apiVersion: 'v1',
  env: process.env.NODE_ENV ?? Environments.LOCAL,
  docs: {
    swaggerUIPath: '/v1/swagger',
    apiDocsPath: '/v1/api-docs',
  },
};

export default appConfig;
