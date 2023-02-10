import { type Environments } from '@/utils/enums/environment.enum';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Environments;
      PORT: string;
      APP_BASE_URL: string;
      DATABASE_URL: string;
      AWS_REGION: string;
      COGNITO_POOL_ID: string;
      CUSTOM_ENV?: string;
    }
  }
}

export {};
