import React from 'react';
import styles from './AuthorCard.module.css';
import { HiOutlineArrowDownRight } from 'react-icons/hi2';

const AuthorCard = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.imgcontainer}>
          <img src={data.img} className={styles.avatar} alt={data.name} />
        </div>
        <h2 className={styles.name}>{data.name}</h2>
        <div className={styles.jobgroup}>
          <h4>Job</h4>
          <p>{data.job}</p>
        </div>
        <div className={styles.citygroup}>
          <h4>City</h4>
          <p>{data.city}</p>
        </div>
      </div>
    </article>
  );
};
export default AuthorCard;
