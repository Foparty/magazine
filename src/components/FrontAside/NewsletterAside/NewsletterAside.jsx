import React from 'react';
import styles from './NewsletterAside.module.css';

const NewsletterAside = () => {
  return (
    <section className={styles.newsletter}>
      <h3 className={styles.title}>Newsletter</h3>
      <p className={styles.sub}>Design News to your inbox</p>
      <input className={styles.input} type="text" placeholder="Email" />
      <button className={styles.button}>sign up</button>
    </section>
  );
};

export default NewsletterAside;
