import React from 'react';
import styles from './PodcastCard.module.css';
import { HiOutlineArrowDownRight } from 'react-icons/hi2';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PodcastCard = ({ data }) => {
  console.log(data);
  return (
    <article className={styles.card}>
      <div className={styles.grid}>
        <span className={styles.ordernumber}>{data.order}</span>
        <div className={styles.imgcontainer}>
          <img src={data.img} className={styles.cover} alt={data.title} />
          <div className={styles.imgtitle}>
            <h2>FYRRE</h2>
            <p>PODCAST</p>
          </div>
          <p className={styles.ep}>{data.ep}</p>
          <div className={styles.arrow}>
            <HiOutlineArrowDownRight />
          </div>
        </div>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.datagroup}>
          <div className={styles.dategroup}>
            <h4>Date</h4>
            <p>{data.date}</p>
          </div>
          <div className={styles.durationagroup}>
            <h4>Duration</h4>
            <p>{data.duration}</p>
          </div>
        </div>
        <Link to={'#'} className={styles.buttonall}>
          LISTEN
          <AiOutlineArrowRight />
        </Link>
      </div>
    </article>
  );
};
export default PodcastCard;
