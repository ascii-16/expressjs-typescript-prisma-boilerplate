import { str, num } from 'envalid';
import { Environments } from '@/enums/environment.enum';

const envValidationConfig = {
  NODE_ENV: str({
    default: Environments.DEV,
    choices: [...Object.values(Environments)],
  }),
  PORT: num({ default: 5000 }),
  APP_BASE_URL: str(),
  DATABASE_URL: str(),
};

export default envValidationConfig;
