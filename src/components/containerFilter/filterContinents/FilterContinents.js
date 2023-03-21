import React from 'react';
import styles from '../filterStyles.module.css';

export default function FilterContinents({ handleContinentChange, continent }) {
  return (
    <div className={styles.displayFilter}>
      <label className={styles.label} htmlFor="continent-selector">
        Filtrar países por continente:
      </label>

      <select
        className={styles.select}
        defaultValue="Continente"
        onChange={handleContinentChange}
      >
        <option value={continent === ''}>Filtrar</option>
        <option>Europe</option>
        <option>America</option>
        <option>Asia</option>
        <option>Africa</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
