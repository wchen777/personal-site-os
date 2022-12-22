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
              src={`/assets/personal/aboutme/personal.jpeg`}
            />
          </div>

          <div class={css.text}>
            <FadeIn>
              <h1>Will Chen</h1>
              <h6>william_b_chen@brown.edu</h6>

              <br />

              <p>
                Hi there! I'm an aspiring <b>quantitative/systems developer</b> studying{' '}
                <b>Computer Science and Economics</b> @ <b>Brown</b> University.
                <br />
                I'm primarily interested in <b>operating systems</b>, <b>distributed systems</b>,
                and <b>quant trading</b>. I also enjoy <b>visual computing</b>.
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
