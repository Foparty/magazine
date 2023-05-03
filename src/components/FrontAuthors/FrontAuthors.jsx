import React from 'react';
import styles from './FrontAuthors.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import AuthorCard from '../AuthorCard/AuthorCard.jsx';

const FrontAuthors = ({ data }) => {
  return (
    <section className={styles.authors}>
      <header className={styles.header}>
        <h2 className={styles.title}>Authors</h2>
        <Link to={'/authors'} className={styles.buttonall}>
          all authors
          <AiOutlineArrowRight />
        </Link>
      </header>
      <div className={styles.content}>
        {data.slice(0, 6).map((item) => (
          <AuthorCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
export default FrontAuthors;
