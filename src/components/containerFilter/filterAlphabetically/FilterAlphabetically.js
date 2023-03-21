import React from 'react';
import styles from '../filterStyles.module.css';
//, { useState, useEffect }

export default function FilterAlphabetically({
  handleAlphabetChange,
  alphabetically,
}) {
  return (
    <div className={styles.displayFilter}>
      <label className={styles.label} htmlFor="alphabetically-selector">
        Ordenar alfabéticamente:
      </label>
      <select className={styles.select} onChange={handleAlphabetChange}>
        <option value={alphabetically === ''}>Ordenar</option>
        <option value="ASC">Alfabéticamente ascendente</option>
        <option value="DESC">Alfabéticamente descendente</option>
      </select>
    </div>
  );
}
