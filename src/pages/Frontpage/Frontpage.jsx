import React from 'react';
import styles from './Frontpage.module.css';
import TextSlider from '../../components/TextSlider/TextSlider';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import FrontAside from '../../components/FrontAside/FrontAside';
import { Link, ScrollRestoration } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FrontPodcasts from '../../components/FrontPodcasts/FrontPodcasts.jsx';
import FrontAuthors from '../../components/FrontAuthors/FrontAuthors.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Frontpage = ({ data, podcasts, authors }) => {
  console.log(data);
  return (
    <>
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
            <Link to={'/magazine'} className={styles.buttonall}>
              all articles
              <AiOutlineArrowRight />
            </Link>
          </div>
          <div className={styles.aside}>
            <FrontAside />
          </div>
        </div>
        <div className={styles.divider}></div>
        <FrontPodcasts data={podcasts} />
        <div className={styles.divider}></div>
        <FrontAuthors data={authors} />
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Frontpage;
