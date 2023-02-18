interface AppConfig {
  api: {
    basePath: string;
    version: string;
  };
  docs: {
    swaggerUIPath: string;
    apiDocsPath: string;
  };
}

const appConfig: AppConfig = {
  api: {
    basePath: 'api',
    version: 'v1',
  },
  docs: {
    swaggerUIPath: '/v1/swagger',
    apiDocsPath: '/v1/api-docs',
  },
};

export default appConfig;
