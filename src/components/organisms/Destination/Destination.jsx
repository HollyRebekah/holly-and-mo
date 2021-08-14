import React from 'react';

import venue from './venue.jpeg';

import styles from './Destination.module.css';

export const Destination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h3>Stock Farm Barn</h3>
          <a
            href="https://maps.google.com/?q=Tatton+Weddings+at+Stock+Farm+Barn&ll=53.35360785667121,-2.3490459410626348&z=12"
            target="_blank"
          >
            View on map
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={venue} />
      </div>
    </div>
  );
};
