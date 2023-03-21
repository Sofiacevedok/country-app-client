import React from 'react';
import ButtonCreateActivity from './buttonCreateActivity/ButtonCreateActivity';
import InputSearch from './inputSearch/InputSearch';
import ResetFilters from './resetFilters/ResetFilters';
import styles from './interactiveSearch.module.css';

export default function InteractiveSearch({
  handleSearchInputChange,
  handleResetChange,
}) {
  return (
    <div className={styles.display}>
      <ButtonCreateActivity />
      <InputSearch handleSearchInputChange={handleSearchInputChange} />
      <ResetFilters handleResetChange={handleResetChange} />
    </div>
  );
}
