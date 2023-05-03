import React from 'react';
import styles from './Podcast.module.css';
import PodcastCard from '../../components/PodcastCard/PodcastCard.jsx';

const Podcast = ({ data }) => {
  return (
    <div className={styles.content}>
      {data.map((item) => (
        <PodcastCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Podcast;
