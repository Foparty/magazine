import React from 'react';
import styles from './MainArticle.module.css';

const MainArticle = ({ data }) => {
  return (
    <>
      <div className={styles.mainarticle}>
        {data.slice(0, 1).map((item, index) => (
          <h2 className={styles.title} key={index}>
            {item.title}
          </h2>
        ))}
        {data.slice(0, 1).map((item, index) => (
          <div className={styles.data} key={index}>
            <p className={styles.excerpt}>{item.excerpt}</p>
            <div className={styles.subdata}>
              <div className={styles.datagroup}>
                <h4>Text</h4>
                <p>{item.text}</p>
              </div>
              <div className={styles.datagroup}>
                <h4>Date</h4>
                <p>{item.date}</p>
              </div>
              <div className={styles.datagroup}>
                <h4>Duration</h4>
                <p>{item.duration}</p>
              </div>
              <p className={styles.pill}>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      {/* {data.slice(0, 1).map((item, index) => (
        <img src={item.cover} className={styles.cover} key={index} />
      ))} */}
    </>
  );
};

export default MainArticle;
