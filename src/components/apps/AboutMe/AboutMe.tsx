import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { AppID } from '__/stores/apps.store';
import css from './AboutMe.module.scss';

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
            <h1>Will Chen</h1>
            <h6>william_b_chen@brown.edu</h6>

            <br />

            <p>
              Hi there! I'm an aspiring <b>quantitative developer</b> studying{' '}
              <b>Computer Science and Economics</b> @ <b>Brown</b> University. <br /> I'm primarily
              interested in <b>systems</b>, <b>infrastructure</b>, and <b>quant trading</b>. Also
              experienced in <b>full stack</b> and <b>computer vision</b>.
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
                href={'https://www.worldscientific.com/worldscibooks/10.1142/8967#t=aboutBook'}
              >
                Market Microstructure in Practice
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMeApp;
