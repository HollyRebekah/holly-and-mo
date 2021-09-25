import React from 'react';

import venue from './venue.jpeg';
import { LinkButton } from '../../atoms/LinkButton/LinkButton'
import { Section } from '../../templates/Section/Section'

import styles from './Venue.module.css';

export const Venue = () => {
  return (
    <Section>
      <div className={styles.wrapper} id='venue'>
        <div className={styles.textWrapper}>
          <div className={styles.textContainer}>
            <p className={styles.subheading}>Venue</p>
            <h3>Stock Farm Barn</h3>
            <p className={styles.content}>We hope you can join us to celebrate our wedding at Stock Farm Barn, 15 minutes outside Altrincham. The whole day will be here so no need to worry about transport between venues!  </p>
            <LinkButton className={styles.button} text='View on map' href='https://maps.google.com/?q=Tatton+Weddings+at+Stock+Farm+Barn&ll=53.35360785667121,-2.3490459410626348&z=12' target="_blank" />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={venue} />
        </div>
      </div>
    </Section>
  );
};
