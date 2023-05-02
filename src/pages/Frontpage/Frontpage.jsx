import React from 'react';
import styles from './Frontpage.module.css';
import TextSlider from '../../components/TextSlider/TextSlider';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import FrontAside from '../../components/FrontAside/FrontAside';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Frontpage = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.frontpage}>
      <h2 className={styles.maintitle}>Art & Life</h2>
      <TextSlider />
      {data.slice(0, 1).map((item) => (
        <ArticleCard key={item.id} data={item} />
      ))}
      <div className={styles.maingrid}>
        <div className={styles.featuredarticles}>
          {data.slice(1, 7).map((item) => (
            <ArticleCard key={item.id} data={item} />
          ))}
        </div>
        <div className={styles.aside}>
          <FrontAside />
        </div>
      </div>
      <Link to={'/articles'} className={styles.buttonall}>
        all articles
        <AiOutlineArrowRight />
      </Link>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Frontpage;
