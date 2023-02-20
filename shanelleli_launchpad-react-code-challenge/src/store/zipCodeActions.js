import { FETCH_ZIPCODE_REQUEST,FETCH_ZIPCODE_SUCCESS,FETCH_ZIPCODE_FAILURE } from './actionTypes';
import axios from 'axios';


export const fetchZipCodeRequest = () => {
    return {
      type: FETCH_ZIPCODE_REQUEST
    };
  };
  
  export const fetchZipCodeSuccess = (info) => {
    return {
      type: FETCH_ZIPCODE_SUCCESS,
      payload: info
    };
  };
  
  export const fetchZipCodeFailure = (error) => {
    return {
      type: FETCH_ZIPCODE_FAILURE,
      payload: error
    };
  };


// Thunk action creator
export const fetchZipCode = (zipCode) => {
  return (dispatch) => {
    dispatch(fetchZipCodeRequest());

    axios.get(`https://api.zippopotam.us/us/${zipCode}`)
      .then(response => {
        dispatch(fetchZipCodeSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchZipCodeFailure('Error fetching ZIP code information'));
      });
  };
};