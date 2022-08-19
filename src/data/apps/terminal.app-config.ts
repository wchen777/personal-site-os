import { createAppConfig } from '__/helpers/create-app-config';

export const projectsAppConfig = createAppConfig({
  title: 'Projects',
  resizable: false,
  expandable: false,
  width: 3 * document.body.clientWidth / 4,
  height: document.body.clientHeight > document.body.clientWidth ? document.body.clientHeight / 3 : 5 * document.body.clientHeight / 6,
  x : document.body.clientWidth / 2 + document.body.clientWidth / 8,
  y : 0
});
