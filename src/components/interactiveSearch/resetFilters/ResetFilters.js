import React from 'react';
import S from '../../countryViews/CountryViews.module.css';
export default function ResetFilters({ handleResetChange }) {
  return (
    <div>
      {' '}
      <button className={S.buttonPag} onClick={handleResetChange}>
        Quitar filtros
      </button>
    </div>
  );
}
