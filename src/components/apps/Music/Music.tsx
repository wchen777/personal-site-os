import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { AppID } from '__/stores/apps.store';
import css from './Music.module.scss';

type MusicAppTypes = {
  appID: AppID;
};

const MusicApp = ({ appID }: MusicAppTypes) => {
  return (
    <section class={clsx(css.container)}>
      <header class={clsx('app-window-drag-handle', css.titleBar)}></header>
      <section class={css.mainArea}>
        <div class={css.col}>
          <p>Here is some of my music.</p>
          <div class={css.divider}></div>
          {/* <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3901659191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/album/alone-with-a-dream">
              alone with a dream by Will Chen
            </a>
          </iframe> */}
          <iframe
            style={{ border: 0, width: '450px', height: '340px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3901659191/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/album/alone-with-a-dream">
              alone with a dream by Will Chen
            </a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=3730602576/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/solace">Solace by Will Chen</a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=1989853614/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/lovely-isnt-it">
              Lovely, isn&#39;t it? by Will Chen
            </a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=1879316663/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/stargazing">Stargazing by Will Chen</a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=217223452/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/grand-valse-in-a">
              Grand Valse in A by Will Chen
            </a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=461483856/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/nausicaa">Nausicaa by Will Chen</a>
          </iframe>

          <div class={css.divider}></div>

          <iframe
            style={{ border: 0, width: '450px', height: '120px' }}
            src="https://bandcamp.com/EmbeddedPlayer/track=1190054534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://willchen.bandcamp.com/track/memory">Memory by Will Chen</a>
          </iframe>
        </div>
      </section>
    </section>
  );
};

export default MusicApp;
