import { str, num } from 'envalid';
import appConfig from './app.config';
import { Environments } from '@/enums/environment.enum';

const envValidationConfig = {
  NODE_ENV: str({
    default: Environments.DEV,
    choices: [...Object.values(Environments)],
  }),
  PORT: num({ default: appConfig.defaultPort }),
  APP_BASE_URL: str(),
  DATABASE_URL: str(),
};

export default envValidationConfig;
