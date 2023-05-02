import React from 'react';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.grid}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.excerpt}>{data.excerpt}</p>
          <div className={styles.textgroup}>
            <h4>Text</h4>
            <p>{data.text}</p>
          </div>
          <div className={styles.dategroup}>
            <h4>Date</h4>
            <p>{data.date}</p>
          </div>
          <div className={styles.durationagroup}>
            <h4>Duration</h4>
            <p>{data.duration}</p>
          </div>
          <div className={styles.pill}>
            <span>{data.category}</span>
          </div>
          <img src={data.cover} className={styles.cover} />
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
