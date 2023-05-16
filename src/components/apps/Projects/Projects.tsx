import clsx from 'clsx';
// import { motion } from 'framer-motion';
import FadeIn from 'react-fade-in';
import type { AppID } from '__/stores/apps.store';
import ProjectCard from './ProjectCard';
import css from './Projects.module.scss';

type ProjectsAppTypes = {
  appID: AppID;
};

const projects = [
  {
    title: 'Copied City Procedural Generation',
    image: '/assets/personal/projects/copiedcity.png',
    url: 'https://youtu.be/oJNf88NCcSI',
    description: (
      <>
        <p class={css.cardText}>
          Replicating the style of <i>Nier Automata's Copied City</i> with stochastic shape grammar
          as a procedurally generated realtime environment using OpenGL.
        </p>
      </>
    ),
  },

  {
    title: 'CoreaChord',
    image: '/assets/personal/projects/corea.png',
    url: 'https://corea-chord.herokuapp.com/',
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
    title: 'TCP/IP',
    image: '/assets/personal/projects/tcp.png',
    url: 'https://github.com/wchen777/tcp-ip',
    description: (
      <>
        <p class={css.cardText}>
          TCP/IP protocols from scratch — implemented as virtual IP nodes exposing a TCP socket API.{' '}
        </p>
        <br />
        <p class={css.cardText}>
          Retransmissions, timeouts, early arrivals, sliding window, congestion control, etc. <br />
          Graphs of sequence numbers vs. time and throughput vs. time are shown, along with a packet
          capture.
        </p>
      </>
    ),
  },
  {
    title: 'Path Tracer',
    image: '/assets/personal/projects/pathtracer_pics.png',
    url: 'https://github.com/wchen777/',
    description: (
      <>
        <p class={css.cardText}>
          Simulating physically-based transport of light. Uses the Monte Carlo method to solve the
          rendering equation.
        </p>
        <br />
        <p class={css.cardText}>
          Fresnel dielectric refraction/reflection, direct illumination with event splitting,
          importance sampling, image-based lighting, stratified sampling, etc.
        </p>
      </>
    ),
  },
  {
    title: 'Ray Tracer',
    image: '/assets/personal/projects/ray.png',
    url: 'https://github.com/wchen777/ray-realtime',
    description: (
      <>
        <p class={css.cardText}>
          Multithreaded raytracer utilizing Phong illumination model and implicit geometry.
        </p>
        <br />
        <p class={css.cardText}>
          Implements bounding volume hierarchy, supersampling, recursive reflections, shadows,
          texture mapping w/ interpolated sampling, refractions using Snell's Law.
        </p>
      </>
    ),
  },
  {
    title: 'Bayesian Analysis of S&P 500 Returns',
    image: '/assets/personal/projects/garch.png',
    url: 'https://github.com/wchen777/sp-500_garch',
    description: (
      <>
        <p class={css.cardText}>
          Bayesian posterior simulation methods applied to a GARCH (Generalized Autoregressive
          Conditional Heteroskedasticity) volatility model on S&P 500 historical returns.
        </p>
        <br />
        <p class={css.cardText}>
          Uses a Metropolis-Hastings random walk to sample and simulate the posterior distribution.
          Joint distribution tests, prior predictive analysis, model checks.
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
    title: 'Network Encoding Visualizer',
    image: 'assets/personal/projects/manchester.gif',
    url: 'https://github.com/wchen777/network-encoding-vis/',
    description: (
      <>
        <p class={css.cardText}>
          ASCII visualizer for how bits are transformed into signals on the physical network layer.
        </p>
        <br />
        <p class={css.cardText}>NRZ, Manchester, 4B/5B block encoding.</p>
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
    title: 'Visualizing Polya Vector Fields',
    image: '/assets/personal/projects/polya.png',
    url: 'https://www.youtube.com/watch?v=itEqPTJpxUo',
    description: (
      <p class={css.cardText}>
        22-min video in the style of 3Blue1Brown using<i> Manim </i>describing the niche topic of
        Polya vector fields in complex analysis.
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
    title: 'Cafe App',
    image: '/assets/personal/projects/cafe poster 2.png',
    url: 'https://github.com/wchen777/cafe-app',
    description: (
      <p class={css.cardText}>
        A PoC social media mobile app creating an interconnected community between
        underrepresented/emerging and established artists and creators.
      </p>
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
          Retro-style educational space shooter encouraging the learning of business-related
          concepts. Collect journal entries and answer quizzes to earn points while defeating waves
          of enemies.
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
        <FadeIn>
          {projects.map((project) => (
            <div class={css.projectBlock}>
              <ProjectCard key={project.title} {...project} />
              <div class={css.dividerP} />
            </div>
          ))}
        </FadeIn>
      </section>
    </section>
  );
};

export default ProjectsApp;
