import { Environments } from '@/utils/enums/environment.enum';
import { str, bool, num } from 'envalid';
import appConfig from './app.config';

const envValidationConfig = {
  NODE_ENV: str({
    default: appConfig.env,
    choices: [...Object.values(Environments)],
  }),
  CUSTOM_ENV: bool({ default: false }),
  PORT: num({ devDefault: 5000 }),
  APP_BASE_URL: str(),
  DATABASE_URL: str(),
  AWS_REGION: str(),
  COGNITO_POOL_ID: str(),
};

export default envValidationConfig;
