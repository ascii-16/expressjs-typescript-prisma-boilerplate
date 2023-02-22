import chalk from 'chalk';
import appConfig from '@/config/app.config';
import environment from '@/lib/environment';
import { logWithoutConsole } from '@/lib/logger';
import { HR } from './helper';

export const printAppInfo = (
  port: number,
  env: string,
  appUrl: string,
  apiUrl: string
) => {
  const {
    docs: { swaggerUIPath, apiDocsPath },
  } = appConfig;
  const divider = HR('blue', '~', 55);
  const urlChalk = chalk.underline.blue;
  const labelChalk = chalk.white.bold;
  const primaryChalk = chalk.green;
  const serverSuccessMessage = primaryChalk.bold(
    '🚀 Server successfully started'
  );
  console.log(`
    \r${divider}\n
    \r${serverSuccessMessage}\n
    \r${divider}\n
    \r✅ ${labelChalk('Port')}: ${primaryChalk(port)}\n
    \r✅ ${labelChalk('ENV')}: ${primaryChalk(env)}\n
    \r✅ ${labelChalk('App URL')}: ${urlChalk(appUrl)}\n
    \r✅ ${labelChalk('Api URL')}: ${urlChalk(apiUrl)}\n
    \r✅ ${labelChalk('Swagger')}: ${urlChalk(`${appUrl}${swaggerUIPath}`)}\n
    \r✅ ${labelChalk('API Specs')}: ${urlChalk(`${appUrl}${apiDocsPath}`)}\n
    \r${divider}
  `);
  if (!environment.isDev()) {
    logWithoutConsole({
      level: 'info',
      message: `Server started at ${appUrl}`,
    });
  }
};
