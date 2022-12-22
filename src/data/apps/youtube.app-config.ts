import { createAppConfig } from '__/helpers/create-app-config';

export const youtubeAppConfig = createAppConfig({
  title: `Youtube`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://www.youtube.com/@wchen77', '_blank'),
});
