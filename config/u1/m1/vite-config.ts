import { defineConfig } from 'vite';
import { htmlPlugin } from '../../plugins';
// import { fileURLToPath } from 'node:url';
//
// const filesNeedToExclude = ['public/u1/m1/vite.svg'];
//
// const filesPathToExclude = filesNeedToExclude.map((src) => {
//   return fileURLToPath(new URL(src, import.meta.url));
// });

export default defineConfig(({ mode }) => {
  const uVersion = 'u1';
  const mVersion = 'm1';
  const platformName = 'DEV U1M1';

  return {
    define: {
      'process.env': {
        U_VERSION: uVersion,
        M_VERSION: mVersion,
        PLATFORM_NAME: platformName,
      },
    },
    plugins: [htmlPlugin(platformName, uVersion, mVersion)],
    publicDir: mode === 'production' ? 'assets' : 'public',
  };
});
