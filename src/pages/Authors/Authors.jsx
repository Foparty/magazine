import React from 'react';
import styles from './Authors.module.css';
import AuthorCardMain from '../../components/AuthorCard/AuthorCardMain.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Authors = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles.authors}>
        <h2 className={styles.maintitle}>Authors</h2>
        <div className={styles.content}>
          {data.map((item) => (
            <AuthorCardMain key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authors;
