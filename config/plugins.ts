import * as os from 'os';

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
