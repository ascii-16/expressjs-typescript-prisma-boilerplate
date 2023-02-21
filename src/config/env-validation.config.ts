import { Environments } from '@/utils/enums/environment.enum';
import { str, bool, num } from 'envalid';

const envValidationConfig = {
  NODE_ENV: str({
    default: Environments.DEV,
    choices: [...Object.values(Environments)],
  }),
  CUSTOM_ENV: bool({ default: false }),
  PORT: num({ default: 5000 }),
  APP_BASE_URL: str(),
  DATABASE_URL: str(),
  AWS_REGION: str(),
  COGNITO_POOL_ID: str(),
};

export default envValidationConfig;
