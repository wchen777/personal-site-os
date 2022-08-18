import { createAppConfig } from '__/helpers/create-app-config';

export const homeAppConfig = createAppConfig({
  title: 'About Me',
  resizable: false,
  width: 3 * document.body.clientWidth / 4,
  height: document.body.clientHeight > document.body.clientWidth ? document.body.clientHeight / 3 : 4 * document.body.clientHeight / 5,
  x : document.body.clientWidth / 2 + document.body.clientWidth / 8,
  y : 0
});
