import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import os from 'os';
import react from '@vitejs/plugin-react';

export const htmlPlugin = (
  platformName: string,
  uVersion: string,
  mVersion: string,
) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html
        .replace(/<title>(.*?)<\/title>/, `<title>${platformName}</title>`)
        .replace('faviconPath', `/${uVersion}/${mVersion}/favicon.ico`);
    },
  };
};

export const getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];
    if (interfaceInfo) {
      for (const info of interfaceInfo) {
        if (!info.internal && info.family === 'IPv4') {
          return info.address;
        }
      }
    } else {
      return '';
    }
  }
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      htmlPlugin(
        env.VITE_PLATFORM_NAME,
        env.VITE_U_VERSION,
        env.VITE_M_VERSION,
      ),
      react(),
    ],
    server: {
      host: getIPAddress(),
      port: 4001,
      open: true,
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    resolve: {
      alias: {
        '@commonImages': resolve(__dirname, 'commonImages'),
        '@uVersionContainers': resolve(
          __dirname,
          `src/containers/${env.VITE_U_VERSION}`,
        ),
        '@themes': resolve(
          __dirname,
          `src/themes/${env.VITE_U_VERSION}/${env.VITE_M_VERSION}-theme.css`,
        ),
      },
    },
  };
});
