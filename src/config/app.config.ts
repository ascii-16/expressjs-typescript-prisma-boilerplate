import { DEFAULT_PORT } from '@/utils/constants';

interface AppConfig {
  api: {
    /**
     * Api base path
     */
    basePath: string;

    /**
     * Api version
     */
    version: string;
  };
  docs: {
    /**
     * Swagger ui path
     */
    swaggerUIPath: string;

    /**
     * Open api specs path
     */
    apiDocsPath: string;
  };
  logs: {
    /**
     * Folder where log files would be saved
     */
    dir: string;

    /**
     * File name in which the combined logs of app would be written
     */
    logFile: string;

    /**
     * File name of error logs
     */
    errorLogFile: string;
  };
  defaultPort: number;
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
  logs: {
    dir: './logs',
    logFile: 'app.log',
    errorLogFile: 'error.log',
  },
  defaultPort: DEFAULT_PORT,
};

export default appConfig;
