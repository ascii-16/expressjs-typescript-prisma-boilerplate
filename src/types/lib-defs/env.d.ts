import { type Environments } from '@/enums/environment.enum';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Environments;
      PORT: string;
      APP_BASE_URL: string;
      DATABASE_URL: string;
    }
  }
}

export {};
