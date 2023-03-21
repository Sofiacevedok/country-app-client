/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import S from './CountryDetail.module.css';

export default function CountryDetail({ getCountry, country }) {
  const [pais, setPais] = useState('');
  let { idPais } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    getCountry(idPais);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pais]);

  console.log({ pais: country });
  const nameActividad =
    country?.Activities?.length > 0
      ? country.Activities[0].name
      : 'No hay actividad asociada';

  return (
    <div className={S.display}>
      <div className={S.card}>
        <h1 className={S.p}> {country.name}</h1>
        <img className={S.img} src={country.bandera} alt={country.name} />
        <p>Código: {country.id}</p>
        <p>Continente: {country.continente}</p>
        <p>Capital: {country.capital}</p>
        <p>Subregión: {country.subregión}</p>
        <p>Área: {country.area} km²</p>
        <p>Población: {country.población}</p>
        <p>Actividad: {nameActividad}</p>
      </div>
      <button onClick={() => navigation('/countries')} className={S.button}>
        volver
      </button>
    </div>
  );
}
