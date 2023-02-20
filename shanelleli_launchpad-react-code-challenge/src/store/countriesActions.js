import { SET_COUNTRIES } from './actionTypes';


import axios from 'axios';

export const getCountries = () => async (dispatch) => {
  try {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none');
    const countries = response.data.data.map(country => country.name);
    dispatch({
      type: SET_COUNTRIES,
      payload: countries,
    });
  } catch (error) {
    console.log(error);
  }
};