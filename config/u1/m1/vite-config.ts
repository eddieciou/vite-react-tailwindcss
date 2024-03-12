import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    define: {
      'process.env': {
        U_VERSION: 'u1',
        M_VERSION: 'm1',
      },
    },
  };
});
