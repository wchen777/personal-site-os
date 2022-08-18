import { createAppConfig } from '__/helpers/create-app-config';

export const viewSourceAppConfig = createAppConfig({
  title: `Github`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/wchen777', '_blank'),
});
