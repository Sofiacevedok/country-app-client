import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../containerFilter/ContainerFilter';
import InteractiveSearch from '../interactiveSearch/InteractiveSearch';
import styles from './CountryViews.module.css';

function Countries({ countries, getCountries }) {
  const [continent, setContinent] = useState('');
  const [activity, setActivity] = useState('');
  const [population, setPopulation] = useState('');
  const [alphabetically, setAlphabetically] = useState('');
  const [name, setName] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const filters = {
      continent,
      activity,
      population,
      alphabetically,
      name,
    };
    getCountries(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent, activity, population, alphabetically, name]);

  const handleActivityChange = (e) => {
    const selectedActividades = e.target.value;
    console.log('User Selected Value - ', e.target.value);
    setActivity(selectedActividades);
  };

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    setContinent(selectedContinent);
  };

  const handlePopulationChange = (event) => {
    const selectedOrder = event.target.value;
    setAlphabetically('');
    setPopulation(selectedOrder);
  };

  const handleAlphabetChange = (event) => {
    const selectedAlphabet = event.target.value;
    setPopulation('');
    setAlphabetically(selectedAlphabet);
  };

  const handleResetChange = (e) => {
    setPopulation('');
    setAlphabetically('');
    setContinent('');
    setActivity('');
  };

  function handleSearchInputChange(event) {
    setName(event.target.value);
  }

  const listaPaises = countries.slice(
    (paginaActual - 1) * 12,
    paginaActual * 12
  );

  const cambiarPagina = (direccion) => {
    if (direccion === 'siguiente') {
      setPaginaActual(paginaActual + 1);
    } else if (direccion === 'anterior') {
      setPaginaActual(paginaActual - 1);
    }
  };

  console.log('SADASDASD', {
    countries,
    population,
    alphabetically,
    activity,
    name,
  });

  return (
    <div className={styles.container}>
      <Container
        handleActivityChange={handleActivityChange}
        handleContinentChange={handleContinentChange}
        handlePopulationChange={handlePopulationChange}
        handleAlphabetChange={handleAlphabetChange}
        population={population}
        alphabetically={alphabetically}
      />

      <InteractiveSearch
        handleSearchInputChange={handleSearchInputChange}
        handleResetChange={handleResetChange}
      />
      <div className={styles.countries}>
        {countries &&
          countries.length &&
          listaPaises.map((country) => (
            <Link
              className={styles.card}
              to={`/countries/${country.id}`}
              key={country.id}
            >
              <p className={styles.p}> {country.name}</p>
              <img
                className={styles.img}
                src={country.bandera}
                alt={country.name}
              />
              <p className={styles.p}>{country.continente}</p>
            </Link>
          ))}
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.buttonPag}
          onClick={() => cambiarPagina('anterior')}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <button
          className={styles.buttonPag}
          onClick={() => cambiarPagina('siguiente')}
          disabled={listaPaises.length < 12}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Countries;
