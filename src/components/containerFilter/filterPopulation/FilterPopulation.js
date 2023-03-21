import React from 'react';
import styles from '../filterStyles.module.css';

export default function FilterPopulation({
  handlePopulationChange,
  population,
}) {
  return (
    <div className={styles.displayFilter}>
      <label className={styles.label} htmlFor="continent-selector">
        Ordenar por cantidad de población:
      </label>
      {/* <select onChange={(e) => handleContinentChange(e)}> */}

      <select className={styles.select} onChange={handlePopulationChange}>
        <option value={population === ''}>Ordenar</option>
        <option value="DESC">Mayor cantidad</option>
        <option value="ASC">Menor cantidad</option>
      </select>
    </div>
  );
}
