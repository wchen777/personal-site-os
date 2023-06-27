import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { AppID } from '__/stores/apps.store';
import css from './AboutMe.module.scss';
import FadeIn from 'react-fade-in';

type AboutMeAppTypes = {
  appID: AppID;
};

const AboutMeApp = ({ appID }: AboutMeAppTypes) => {
  return (
    <section class={clsx(css.container)}>
      <header class={clsx('app-window-drag-handle', css.titleBar)}></header>
      <section class={css.mainArea}>
        <div class={css.all}>
          <div>
            <motion.img
              class={css.propic}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 20,
              }}
              draggable={false}
              src={`/assets/personal/aboutme/personal_2.png`}
            />
          </div>

          <div class={css.text}>
            <FadeIn>
              <h1>Will Chen</h1>
              <h6>william_b_chen@alumni.brown.edu</h6>

              <br />

              <p>
                Hi there! I'm a recent graduate in <b>Computer Science and Economics</b> (ScB) @{' '}
                <b>Brown University</b>. I'm currently working as a <b>Software Engineer</b> @{' '}
                <b>TikTok</b> on the <b>CDN Infrastructure</b> team!
                <br />
              </p>

              <br />

              <p>
                My focuses are in <b>operating systems</b>, <b>distributed systems</b>, and{' '}
                <b>visual computing</b>. I'm also interested in <b>quantitative trading</b>.
              </p>

              <br />

              <p>
                I love <b>jazz</b> and <b>horror films</b>; I'm a <b>multi-genre pianist</b> and
                award-winning <b>self-taught composer</b>, and also a <b>certified bartender</b>!
              </p>

              <br />

              <p>
                Currently reading:{' '}
                <a
                  class={css.link}
                  target="_blank"
                  href={'https://www.amazon.com/Man-Who-Solved-Market-Revolution/dp/073521798X'}
                >
                  The Man Who Solved the Market
                </a>
                .
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMeApp;
