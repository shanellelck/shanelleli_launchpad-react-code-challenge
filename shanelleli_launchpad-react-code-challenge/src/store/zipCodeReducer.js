import {
    FETCH_ZIPCODE_REQUEST,
    FETCH_ZIPCODE_SUCCESS,
    FETCH_ZIPCODE_FAILURE
  } from './actionTypes';
  
  const initialState = {
    info: null,
    error: null,
    loading: false
  };

  const zipCodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ZIPCODE_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_ZIPCODE_SUCCESS:
        return {
          ...state,
          info: action.payload,
          error: null,
          loading: false
        };
      case FETCH_ZIPCODE_FAILURE:
        return {
          ...state,
          info: null,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default zipCodeReducer;