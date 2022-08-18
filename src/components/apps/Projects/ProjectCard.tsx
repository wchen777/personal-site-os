import React from 'react';
import css from './Projects.module.scss';

type ProjectsCardTypes = {
  url: string;
  image: string;
  title: string;
  description: any;
};

export default function ProjectCard({ url, title, image, description }: ProjectsCardTypes) {
  return (
    <section class={css.mainCard} onClick={() => window.open(url, '_blank')}>
      <div class={css.cardContent}>
        <div class="content-left">
          <img src={image} alt="project image" class={css.projectimg} />
        </div>
        <div class="content-right">
          <div class={css.tag}>
            <h2 class={css.cardTitle}>{title}</h2>
          </div>

          {description}
        </div>
      </div>
    </section>
  );
}
