import clsx from 'clsx';
// import { motion } from 'framer-motion';
import FadeIn from 'react-fade-in';
import type { AppID } from '__/stores/apps.store';
import WorkCard from './WorkCard';
import css from './Work.module.scss';

type WorkAppTypes = {
  appID: AppID;
};

const workList = [
  {
    title: 'CDN Engineer @ TikTok',
    date: 'JUNE 2023 - PRESENT',
    image: '/assets/work/tiktok.png',
    description: (
      <p class={css.cardText}>Site Reliability, Dynamic Site Acceleration, Edge Caching</p>
    ),
  },

  {
    title: 'Summer Analyst @ Goldman Sachs',
    date: 'JUNE 2022 - AUGUST 2022',
    image: '/assets/work/gs.png',
    description: (
      <p class={css.cardText}>
        Investment Banking Division CRM Engineering — I developed a cloud-native observability and
        monitoring tooling for the client portal infrastructure using Datadog, Terraform, and AWS.
      </p>
    ),
  },

  {
    title: 'Dev Team Lead @ Hack at Brown',
    date: 'OCTOBER 2021 - MAY 2023',
    image: '/assets/work/hab.png',
    description: (
      <p class={css.cardText}>
        I lead the club's website development team. I create and distribute tasks, review PRs, plan
        meetings, conduct interviews, and also code.
        <br />
        <a href="https://2023.hackatbrown.org" target="__blank" className="link">
          View our 2023 website.
        </a>
      </p>
    ),
  },

  {
    title: 'Teaching Assistant @ Brown University',
    date: 'JANUARY 2021 - MAY 2023',
    image: '/assets/work/brown.jpeg',
    description: (
      <>
        <p class={css.cardText}>Spring 2021 - Data Ethics and Society</p>
        <p class={css.cardText}>Fall 2021, Spring 2022 - Computer Vision</p>
        <p class={css.cardText}>Fall 2022 - Intro to Computer Systems</p>
        <p class={css.cardText}>Spring 2023 - Distributed Systems, Operating Systems</p>
      </>
    ),
  },

  {
    title: 'Software Engineer Intern @ Pangea.app',
    date: 'JUNE 2021 - SEPTEMBER 2021',
    image: '/assets/work/pangea.jpeg',
    description: (
      <p class={css.cardText}>
        I helped develop and release a forums page and 200+ notifications, fixed numerous bugs and
        refactored business logic, and worked on reskinning the entire web and mobile UI.
      </p>
    ),
  },

  {
    title: 'Computer Science Instructor @ Juni Learning',
    date: 'APRIL 2021 - JUNE 2022',
    image: '/assets/work/juni.jpeg',
    description: (
      <p class={css.cardText}>
        I taught students K-12 Web Development, AI, and Machine Learning courses through 1-on-1
        lessons and provided detailed feedback on students' learning goals and progress.
      </p>
    ),
  },

  {
    title: 'Bioinformatics Intern @ University of Maryland Institute for Genome Sciences',
    date: 'JUNE - AUGUST 2017, 2018',
    image: '/assets/work/umd.png',
    description: (
      <p class={css.cardText}>
        I worked with supervisors to write scripts and help automate certain genome sequencing
        processes.
      </p>
    ),
  },
];

const WorkApp = ({ appID }: WorkAppTypes) => {
  return (
    <section class={clsx(css.container)}>
      <header class={clsx('app-window-drag-handle', css.titleBar)}></header>
      <section class={css.mainArea}>
        <div class={css.timeline}>
          <ul>
            <FadeIn>
              {workList.map((work, index) => (
                <li>
                  <WorkCard key={index} {...work} />
                </li>
              ))}
            </FadeIn>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default WorkApp;
