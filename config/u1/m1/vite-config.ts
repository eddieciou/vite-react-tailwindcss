import { defineConfig } from 'vite';
import { htmlPlugin } from '../../plugins';

export default defineConfig(() => {
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
  };
});
