import React from 'react';
import styles from './FrontPodcasts.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PodcastCard from '../PodcastCard/PodcastCard.jsx';

const FrontPodcasts = ({ data }) => {
  return (
    <section className={styles.podcasts}>
      <header className={styles.header}>
        <h2 className={styles.title}>Podcast</h2>
        <Link to={'/podcast'} className={styles.buttonall}>
          all episodes
          <AiOutlineArrowRight />
        </Link>
      </header>
      <div className={styles.content}>
        {data.slice(0, 3).map((item) => (
          <PodcastCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
export default FrontPodcasts;
