import { AppID } from '__/stores/apps.store';
import { lazy } from 'react';
import ProjectsApp from './Projects/Projects';

type AppNexusProps = {
  appID: AppID;
  isBeingDragged: boolean;
};

const Calculator = lazy(() => import('./Calculator/Calculator'));
const VSCode = lazy(() => import('./VSCode/VSCode'));
const Calendar = lazy(() => import('./Calendar/Calendar'));

const PlaceholderApp = lazy(() => import('./Placeholder/Placeholder'));
import AboutMeApp from './AboutMe/AboutMe';
import MusicApp from './Music/Music';

export const AppNexus = ({ appID, isBeingDragged }: AppNexusProps) => {
  switch (appID) {
    case 'calculator':
      return <Calculator />;
    case 'calendar':
      return <Calendar />;
    case 'terminal':
      return <ProjectsApp appID={appID} />;
    case 'home':
      return <AboutMeApp appID={appID} />;
    case 'music':
      return <MusicApp appID={appID} />;

    default:
      return <PlaceholderApp appID={appID} />;
  }
};
