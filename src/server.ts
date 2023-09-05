import App from './app';

const app = new App();
const server = app.express;

app.connectPrisma().catch((e) => {
  throw e;
});

export default server;
