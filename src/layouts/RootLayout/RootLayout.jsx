import React from 'react';
import styles from './RootLayout.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaRss } from 'react-icons/fa';

const RootLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <h2 className={styles.logo}>
            <Link to={'/'}>FYRRE MAGAZINE</Link>
          </h2>
          <div className={styles.navigation}>
            <div className={styles.links}>
              <NavLink to={'/'}>home</NavLink>
              <NavLink to={'/magazine'}>magazine</NavLink>
              <NavLink to={'/authors'}>authors</NavLink>
              <NavLink to={'/podcast'}>podcast</NavLink>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.social}>
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <AiFillYoutube />
              <FaRss />
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
