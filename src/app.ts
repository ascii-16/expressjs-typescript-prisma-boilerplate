import cors from 'cors';
import nocache from 'nocache';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import home from './home';
import environment from './lib/environment';
import expressJSDocSwaggerConfig from './config/express-jsdoc-swagger.config';
import appConfig from './config/app.config';
import errorHandler from '@/middlewares/error-handler';
import routes from '@/modules/index';
import prismaClient from '@/lib/prisma';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.disableSettings();
    this.setRoutes();
    this.setErrorHandler();
    this.initializeDocs();
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(nocache());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet());
    this.express.use(express.static('public'));
  }

  private disableSettings(): void {
    this.express.disable('x-powered-by');
  }

  private setRoutes(): void {
    const {
      api: { version },
    } = appConfig;
    const { env } = environment;
    this.express.use('/', home);
    this.express.use(`/api/${version}/${env}`, routes);
  }

  private setErrorHandler(): void {
    this.express.use(errorHandler);
  }

  private initializeDocs(): void {
    expressJSDocSwagger(this.express)(expressJSDocSwaggerConfig);
  }

  public async connectPrisma(): Promise<void> {
    await prismaClient.$connect();
  }
}

const app = new App();
const server = app.express;

app.connectPrisma().catch((e) => {
  throw e;
});

export default server;
