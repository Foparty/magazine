import React from 'react';
import styles from './PopularAside.module.css';

const PopularAside = () => {
  return (
    <section className={styles.popular}>
      <h3 className={styles.title}>Most Popular</h3>
      <div className={styles.section}>
        <p>01</p>
        <div className={styles.flex}>
          <h2>Street art festival</h2>
          <p>
            Text <span>Cristofer Vaccaro</span>
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <p>02</p>
        <div className={styles.flex}>
          <h2>Hope dies last</h2>
          <p>
            Text <span>Anne Henry</span>
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <p>03</p>
        <div className={styles.flex}>
          <h2>Artists who want to rise above</h2>
          <p>
            Text <span>Anna Nielsen</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularAside;
