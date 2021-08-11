import React from 'react';
import PropTypes from 'prop-types';

import styles from './Detail.module.css';

export const Detail = ({ icon, title, info }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.svgContainer}>{icon}</div>
      <h2>{title}</h2>
      <span>{info}</span>
    </div>
  );
};

Detail.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
