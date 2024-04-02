/// <reference types="vite/client" />
type TUVersion = 'u1' | 'u2';

declare global {
  interface ImportMetaEnv {
    readonly VITE_U_VERSION: TUVersion;
    readonly VITE_M_VERSION: string;
    readonly VITE_PLATFORM_NAME: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export { TUVersion };
