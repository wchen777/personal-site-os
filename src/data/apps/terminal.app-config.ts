import { createAppConfig } from '__/helpers/create-app-config';

export const projectsAppConfig = createAppConfig({
  title: 'Projects',
  resizable: true,
  width: 3 * document.body.clientWidth / 4,
  height: 4 * document.body.clientHeight / 5,
  x : document.body.clientWidth / 2 + document.body.clientWidth / 8,
  y : 0
});
