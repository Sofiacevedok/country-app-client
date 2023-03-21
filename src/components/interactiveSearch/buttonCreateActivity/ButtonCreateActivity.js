import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../countryViews/CountryViews.module.css';

export default function About() {
  return (
    <div>
      <Link to="/activity">
        <button className={S.buttonPag}>Crear actividad</button>
      </Link>
    </div>
  );
}
