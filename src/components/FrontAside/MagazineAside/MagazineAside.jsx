import React from 'react';
import styles from './MagazineAside.module.css';
import { magazinecover1 } from '/public/img';

const MagazineAside = () => {
  return (
    <section className={styles.magazine}>
      <h3 className={styles.title}>Printmagazine</h3>
      <p className={styles.date}>03/2022</p>
      <img className={styles.img} src={magazinecover1} alt="march 2022 magazine cover" />
      <button className={styles.button}>button</button>
    </section>
  );
};

export default MagazineAside;
