import React from 'react';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.heroImage}>
      <h1 className={styles.heroText}>
        <span className={styles.textLarge}>Holly & Mo</span>
        <span className={styles.textSmall}>are getting married</span>
      </h1>
    </div>
  );
};
