import React from 'react';
import styles from './FrontAside.module.css';
import MagazineAside from './MagazineAside/MagazineAside';
import PopularAside from './PopularAside/PopularAside';
import NewsletterAside from './NewsletterAside/NewsletterAside';

const FrontAside = () => {
  return (
    <section className={styles.aside}>
      <MagazineAside />
      <PopularAside />
      <NewsletterAside />
    </section>
  );
};

export default FrontAside;
