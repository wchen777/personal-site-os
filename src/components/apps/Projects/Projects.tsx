import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { AppID } from '__/stores/apps.store';
import ProjectCard from './ProjectCard';
import css from './Projects.module.scss';

type ProjectsAppTypes = {
  appID: AppID;
};

const projects = [
  {
    title: 'CoreaChord',
    image: '/assets/personal/projects/corea.png',
    url: 'https://coreachord.herokuapp.com/',
    description: (
      <>
        <p class={css.cardText}>
          A unique jazz chord progression generator using an algorithm powered by a Markov chain
          stochastic process.
        </p>
        <br />
        <p class={css.cardText}>Dedicated to the late jazz legend Chick Corea.</p>
      </>
    ),
  },

  {
    title: 'PuddleStore',
    image: '/assets/personal/projects/puddlestore sc2.png',
    url: 'https://github.com/wchen777/puddlestore',
    description: (
      <>
        <p class={css.cardText}>Distributed file system based on OceanStore.</p>
        <br />
        <p class={css.cardText}>
          Apache Zookeeper as distributed consistency and a Tapestry network as a peer-to-peer
          key-value datastore/chunk server. Round-robin load balancing and data block replication.
        </p>
      </>
    ),
  },

  {
    title: 'National Gallery of Art — Digital Model',
    image: 'assets/personal/projects/model screenshot.png',
    url: 'https://wchen777.github.io/national-gallery-model/',
    description: (
      <p class={css.cardText}>
        Interactive digital model of I.M. Pei's <i>National Gallery of Art, East Wing</i> located in
        Washington D.C.{' '}
      </p>
    ),
  },

  {
    title: 'Cafe App',
    image: '/assets/personal/projects/cafe poster 2.png',
    url: 'https://github.com/wchen777/cafe-app',
    description: (
      <p class={css.cardText}>
        A social media mobile app creating an interconnected community between
        underrepresented/emerging and established artists and creators.
      </p>
    ),
  },

  {
    title: 'Visualizing Polya Vector Fields',
    image: '/assets/personal/projects/polya.png',
    url: 'https://www.youtube.com/watch?v=itEqPTJpxUo',
    description: (
      <p class={css.cardText}>
        22-min video in the style of 3Blue1Brown {'('}
        <i>Manim</i>
        {')'} describing the niche topic of Polya vector fields in complex analysis.
      </p>
    ),
  },

  {
    title: 'ASL Recog',
    image: '/assets/personal/projects/asl.png',
    url: 'https://github.com/wchen777/ASL-recog',
    description: (
      <>
        <p class={css.cardText}>
          Live video American Sign Language alphabet convolutional neural network classifier trained
          using transfer learning with VGG16.
        </p>

        <br />

        <p class={css.cardText}>
          Displays classification result with detected hand and label using semantic image
          segmentation. Transfer learning using ResNet50.
        </p>
      </>
    ),
  },

  {
    title: 'TA Hours Anywhere',
    image: '/assets/personal/projects/taha.png',
    url: 'https://github.com/wchen777/ta-hours-anywhere',
    description: (
      <>
        <p class={css.cardText}>
          Web application to connect volunteer instructors (TAs) and students wherever, whenever.
          Live chat and instructor-student matching.
        </p>
        <br />
        <p class={css.cardText}>Developed as a part of Full Stack @ Brown.</p>
      </>
    ),
  },

  {
    title: 'FBLA Galaxia',
    image: '/assets/personal/projects/fbla.png',
    url: 'https://drive.google.com/drive/folders/0B-3uskX1s5r3bUNfbXhFOHFVMDA?resourcekey=0-tjcR-ZXLFYUbL5rhJvK2UQ&usp=sharing',
    description: (
      <>
        <p class={css.cardText}>
          Retro-style educational space shooter that encourages the learning of business related
          concepts. Players collected journal entries and answered quizzes to earn points while
          defeating waves of enemies.
        </p>
        <br />
        <p class={css.cardText}>
          1st place in Maryland, presented at the national level for the Future Business Leaders of
          America competition.
        </p>
      </>
    ),
  },
];

const ProjectsApp = ({ appID }: ProjectsAppTypes) => {
  return (
    <section class={clsx(css.container)}>
      <header class={clsx('app-window-drag-handle', css.titleBar)}></header>
      <section class={css.mainArea}>
        {projects.map((project) => (
          <div class={css.projectBlock}>
            <ProjectCard key={project.title} {...project} />
            <div class={css.dividerP} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectsApp;
