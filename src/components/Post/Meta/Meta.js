import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import styles from './Meta.module.scss';

const Meta = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Opublikowano {moment(date).locale('pl').format('D MMMM YYYY')}</p>
  </div>
);

export default Meta;
