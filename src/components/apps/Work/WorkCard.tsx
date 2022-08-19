import React from 'react';
import css from './Work.module.scss';

type WorkCardTypes = {
  image: string;
  title: string;
  description: any;
  date: string;
};

export default function ProjectCard({ title, image, date, description }: WorkCardTypes) {
  return (
    <section class={css.workCard}>
      <div class={css.cardContent}>
        <div class="content-left">
          <img src={image} alt="project image" class={css.projectimg} />
        </div>
        <div class={css.right}>
          <div class={css.tag}>
            <h2 class={css.workTitle}>{title}</h2>
            <p class={css.workDate}>{date}</p>
          </div>

          {description}
        </div>
      </div>
    </section>
  );
}
