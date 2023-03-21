import React from 'react';
import FilterActivity from './filterActivity/index';
import FilterAlphabetically from './filterAlphabetically/FilterAlphabetically';
import FilterContinents from './filterContinents/FilterContinents';
import FilterPopulation from './filterPopulation/FilterPopulation';
import styles from './ContainerFilter.module.css';

export default function Container(props) {
  return (
    <div className={styles.displayContainer}>
      <FilterActivity handleActivityChange={props.handleActivityChange} />
      <FilterAlphabetically
        alphabetically={props.alphabetically}
        handleAlphabetChange={props.handleAlphabetChange}
      />
      <FilterContinents
        continent={props.continent}
        handleContinentChange={props.handleContinentChange}
      />
      <FilterPopulation
        population={props.population}
        handlePopulationChange={props.handlePopulationChange}
      />
    </div>
  );
}
