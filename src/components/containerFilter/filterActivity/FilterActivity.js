import React, { useEffect } from 'react';
import styles from '../filterStyles.module.css';

//, { useState, useEffect }

export default function FilterActivity({
  handleActivityChange,
  getActivities,
  activities,
}) {
  // conectar con redux, crear archivo index,js
  // recibir como props  y activities
  useEffect(() => {
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.displayFilter}>
      <label className={styles.label} htmlFor="continent-selector">
        Filtrar por actividades turísticas:
      </label>
      {/* <select onChange={(e) => handleContinentChange(e)}> */}
      <select
        className={styles.select}
        defaultValue=""
        onChange={handleActivityChange}
      >
        <option value="">Seleccionar actividad</option>
        {/*         <option>Tomar mate</option>
        <option>Correr</option> */}

        {activities.map((actividad, index) => {
          return <option key={index}>{actividad.name}</option>;
        })}
      </select>
    </div>
  );
}
