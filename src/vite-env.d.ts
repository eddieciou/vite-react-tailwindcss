/// <reference types="vite/client" />
type TUVersion = 'u1' | 'u2';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      U_VERSION: TUVersion;
      M_VERSION: string;
    }
  }
}

export { TUVersion };
