import { createAppConfig } from '__/helpers/create-app-config';

export const linkedinAppConfig = createAppConfig({
  title: `LinkedIn`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://www.linkedin.com/in/wchen77/', '_blank'),
});
