import React from 'react';
import styles from './AuthorCardMain.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AuthorCardMain = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.grid}>
        <img src={data.img} className={styles.avatar} alt={data.name} />

        <h2 className={styles.name}>{data.name}</h2>
        <div className={styles.jobgroup}>
          <h4>Job</h4>
          <p>{data.job}</p>
        </div>
        <div className={styles.citygroup}>
          <h4>City</h4>
          <p>{data.city}</p>
        </div>
        <Link to={'#'} className={styles.buttonall}>
          ABOUT
          <AiOutlineArrowRight />
        </Link>
      </div>
    </article>
  );
};
export default AuthorCardMain;
