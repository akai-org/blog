import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

const Meta = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Opublikowano {moment(date).format('D MMMM YYYY')}</p>
  </div>
);

export default Meta;
