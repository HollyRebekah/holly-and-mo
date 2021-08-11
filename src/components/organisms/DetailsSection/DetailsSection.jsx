import React from 'react';

import { Detail } from '../../molecules/Detail/Detail';
import { ReactComponent as BarnIcon } from '../../../svgs/barn-icon.svg';
import { ReactComponent as CalendarIcon } from '../../../svgs/calendar-icon.svg';

import styles from './DetailsSection.module.css';

export const DetailsSection = () => {
  return (
    <div className={styles.wrapper}>
      <Detail
        icon={<BarnIcon />}
        title="Where"
        info="Stock Farm Barn, Altrincham WA14 3QF"
      />
      <Detail icon={<CalendarIcon />} title="When" info="20th August 2022" />
    </div>
  );
};
