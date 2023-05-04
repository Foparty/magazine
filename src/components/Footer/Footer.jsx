import React from 'react';
import styles from './Footer.module.css';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.toptext}>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
        <span>NEWSLETTER+++</span>
      </p>
      <section className={styles.cta}>
        <h2 className={styles.ctatext}>Design news to your inbox</h2>
        <form className={styles.signup}>
          <input type="email" placeholder={'Email'} />
          <button>Sing up</button>
        </form>
      </section>
      <section className={styles.navsection}>
        <h3>
          <Link to={'/'}>FYRRE MAGAZINE</Link>
        </h3>
        <ul>
          <li>Art</li>
          <li>Design</li>
          <li>Architechture</li>
        </ul>
        <ul>
          <li>
            <Link to={'/magazine'}>Magazine</Link>
          </li>
          <li>
            <Link to={'/podcast'}>Podcasts</Link>
          </li>
          <li>
            <Link to={'/authors'}>Authors</Link>
          </li>
        </ul>
        <ul>
          <li>Styleguide</li>
          <li>Licensing</li>
          <li>Changelog</li>
        </ul>
      </section>
      <section className={styles.copy}>
        <div className={styles.left}>
          <p>
            &copy; Made by{' '}
            <a href="http://www.alfonsomartingarcia.com" target={'_blank'} rel={'noreferrer'}>
              Alfonso Martín
            </a>{' '}
            - design by{' '}
            <a href="https://templates.gola.io" target={'_blank'} rel={'noreferrer'}>
              Pawel Gola
            </a>
          </p>
        </div>
        <div className={styles.right}>
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
          <FaRss />
        </div>
      </section>
    </footer>
  );
};
export default Footer;
