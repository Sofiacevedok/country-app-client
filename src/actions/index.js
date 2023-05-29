import axios from 'axios';
import { apiUrl } from '../index';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY = 'GET_COUNTRY';

export function getCountries(filters) {
  const { continent, activity, population, alphabetically, paises, name } =
    filters;
  const url = `${apiUrl}/countries?continente=${
    continent ? continent : ''
  }&actividad=${activity ? activity : ''}&poblacion=${
    population ? population : ''
  }&alfabetico=${alphabetically ? alphabetically : ''}&paises=${
    paises ? paises : ''
  }&name=${name ? name : ''}`;

  return function (dispatch) {
    return axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getActivities() {
  const url = `${apiUrl}/activity`;

  return function (dispatch) {
    return axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_ACTIVITY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function createActivity(obj) {
  const url = `${apiUrl}/activity`;
  return function (dispatch) {
    return axios
      .post(url, obj) //axios. post
      .then((response) => {
        // el response va ser la respuesta del api que es la actividad creada
        dispatch({
          type: CREATE_ACTIVITY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
export function getCountry(id) {
  const url = `${apiUrl}/countries/${id}`;

  return function (dispatch) {
    return axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_COUNTRY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
