import React, { useState, useEffect } from 'react';
import S from './createActivity.module.css';
import { useNavigate } from 'react-router-dom';

export function validate(input) {
  const validationRules = {
    name: 'descripcion is required',
    difficulty: 'dificultad is required',
    duration: 'duracion is required',
  };

  let errors = {};

  for (const key in validationRules) {
    if (!input[key]) {
      errors[key] = validationRules[key];
    }
  }

  return errors;
}

export default function CreateActivity({
  createActivity,
  countries,
  getCountries,
}) {
  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
  });
  const [errors, setErrors] = useState({});
  const [selectedSeason, setSelectedSeason] = useState('');
  const [paises, setPaises] = useState('');

  const navigation = useNavigate();

  useEffect(() => {
    const filters = { paises: 'paises' };
    getCountries(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = function (e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheckboxChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handlePaisesChange = (event) => {
    const pais = event.target.value;
    setPaises([...paises, pais]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name: input.name,
      difficulty: input.difficulty,
      duration: input.duration,
      season: selectedSeason,
      paises: paises,
    };
    createActivity(obj);
    alert('La actividad a sido creada!');
  };

  const handleDelete = (paisId) => {
    const newState = paises.filter((pais) => pais !== paisId);
    setPaises(newState);
  };

  return (
    <div className={S.div}>
      <form className={S.card} onSubmit={handleSubmit}>
        <div>
          <label className={S.label}>nombre:</label>
          <input
            className={S.input}
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          {<h6>{errors.descripcion}</h6>}
        </div>
        <div>
          <label className={S.label}>dificultad:</label>
          <input
            className={S.input}
            type="text"
            name="difficulty"
            value={input.difficulty}
            onChange={handleInputChange}
          />
          {<h6>{errors.dificultad}</h6>}
        </div>
        <div>
          <label className={S.label}>duracion:</label>
          <input
            className={S.input}
            type="text"
            name="duration"
            value={input.duration}
            onChange={handleInputChange}
          />
          {<h6>{errors.duracion}</h6>}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="season"
              value="winter"
              checked={selectedSeason === 'winter'}
              onChange={handleCheckboxChange}
            />
            Winter
          </label>
          <label>
            <input
              type="checkbox"
              name="season"
              value="spring"
              checked={selectedSeason === 'spring'}
              onChange={handleCheckboxChange}
            />
            Spring
          </label>
          <label>
            <input
              type="checkbox"
              name="season"
              value="summer"
              checked={selectedSeason === 'summer'}
              onChange={handleCheckboxChange}
            />
            Summer
          </label>
          <label>
            <input
              type="checkbox"
              name="season"
              value="fall"
              checked={selectedSeason === 'fall'}
              onChange={handleCheckboxChange}
            />
            Fall
          </label>
        </div>

        <div className={S.select}>
          <label htmlFor="countries-selector">Países:</label>
          {/* <select onChange={(e) => handleContinentChange(e)}> */}
          <select defaultValue="" onChange={handlePaisesChange}>
            <option value="">Seleccionar países</option>
            {countries.map((countrie, index) => {
              return (
                <option value={countrie.id} key={index}>
                  {countrie.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          Paises seleccionados:
          {paises.length > 0 ? (
            paises.map((paisId) => {
              const pais = countries.find((c) => c.id === paisId);
              return (
                <div key={paisId}>
                  <span>{pais.name}</span>
                  <button onClick={() => handleDelete(paisId)}>X</button>
                </div>
              );
            })
          ) : (
            <h6> No se han seleccionado paises </h6>
          )}
        </div>
      </form>
      <div className={S.divButton}>
        <button className={S.button} onClick={handleSubmit}>
          Crear
        </button>
        <button className={S.button} onClick={() => navigation('/countries')}>
          Volver
        </button>
      </div>
    </div>
  );
}
