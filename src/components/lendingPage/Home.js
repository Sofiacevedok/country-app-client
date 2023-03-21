import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.text}>
      <h1>Bienvenidos</h1>
      <Link to="/countries" className={styles.containerButtom}>
        <button className={styles.buttom}>Empecemos</button>
      </Link>
    </div>
  );
}
