import { defineConfig } from 'vite';
import { htmlPlugin } from '../../plugins';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
    plugins: [htmlPlugin(platformName, uVersion, mVersion), react()],
    publicDir: mode === 'production' ? 'assets' : 'public',
    css: {
      postcss: {
        plugins: [
          tailwindcss({ config: `config/${uVersion}/tailwind.config.js` }),
        ],
      },
    },
    resolve: {
      alias: {
        '@commonImages': resolve(__dirname, '../../../commonImages'),
      },
    },
  };
});
