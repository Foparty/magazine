import React from 'react';
import styles from './Podcast.module.css';
import PodcastCard from '../../components/PodcastCard/PodcastCard.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';

const Podcast = ({ data }) => {
  return (
    <>
      <div className={styles.podcasts}>
        <h2 className={styles.maintitle}>Podcast</h2>
        {data.map((item) => (
          <PodcastCard key={item.id} data={item} />
        ))}
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Podcast;
