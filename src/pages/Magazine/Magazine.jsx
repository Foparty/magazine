import React from 'react';
import styles from './Magazine.module.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Footer from '../../components/Footer/Footer.jsx';
import { ScrollRestoration } from 'react-router-dom';

const Magazine = ({ data }) => {
  return (
    <>
      <div className={styles.magazine}>
        <h2 className={styles.maintitle}>Magazine</h2>
        <section className={styles.categories}>
          <h3>categories</h3>
          <div className={styles.categorieslist}>
            <div className={styles.pill}>all</div>
            <div className={styles.pill}>art</div>
            <div className={styles.pill}>street art</div>
            <div className={styles.pill}>sculptures</div>
          </div>
        </section>
        <section className={styles.articles}>
          {data.map((item) => (
            <ArticleCard key={item.id} data={item} />
          ))}
        </section>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Magazine;
