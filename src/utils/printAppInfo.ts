import appConfig from '@/config/app.config';
import environment from '@/lib/environment';
import { logWithoutConsole } from '@/lib/logger';

export const printAppInfo = (
  port: number,
  env: string,
  appUrl: string,
  apiUrl: string
) => {
  console.log('------------------------------------------------');
  console.log('🚀 Server successfully started');
  console.log('------------------------------------------------');
  console.log(`✅ Port: ${port}\n`);
  console.log(`✅ ENV: ${env}\n`);
  console.log(`✅ App URL: ${appUrl}\n`);
  console.log(`✅ API URL: ${apiUrl}\n`);
  console.log(`✅ Swagger: ${appUrl}${appConfig.docs.swaggerUIPath}\n`);
  console.log(`✅ API Specs: ${appUrl}${appConfig.docs.apiDocsPath}`);
  console.log('------------------------------------------------\n');
  if (!environment.isLocal()) {
    logWithoutConsole({
      level: 'info',
      message: `Server started at ${appUrl}`,
    });
  }
};
