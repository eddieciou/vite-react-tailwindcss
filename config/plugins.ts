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
