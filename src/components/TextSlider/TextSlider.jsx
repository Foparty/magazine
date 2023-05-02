import React from 'react';
import styles from './TextSlider.module.css';

const messages = [
  {
    message: 'Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Fuga!',
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Fuga!',
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Fuga!',
  },
];

const TextSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <p className={styles.message}>NEWS TICKER+++</p>
        {messages.map((item, index) => (
          <span key={index}>{item.message}</span>
        ))}
        <p className={styles.message}>NEWS TICKER+++</p>
        {messages.map((item, index) => (
          <span key={index}>{item.message}</span>
        ))}
        <p className={styles.message}>NEWS TICKER+++</p>
        {messages.map((item, index) => (
          <span key={index}>{item.message}</span>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
