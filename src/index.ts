import { config as configDotenv } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import server from './app';
import { printAppInfo } from './utils/print-app-info';
import appConfig from './config/app.config';
import environment from '@/lib/environment';

configDotenv();

const prisma = new PrismaClient();

server.listen(process.env.PORT, () => {
  const { port, env, appUrl: _appUrl } = environment;
  const {
    api: { basePath, version },
  } = appConfig;
  const appUrl = `${_appUrl}:${port}`;
  const apiUrl = `${appUrl}/${basePath}/${version}/${env}`;
  printAppInfo(port, env, appUrl, apiUrl);
});

process.on('SIGINT', () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  prisma.$disconnect();
  console.log('Prisma Disconnected.');
  process.exit(0);
});
