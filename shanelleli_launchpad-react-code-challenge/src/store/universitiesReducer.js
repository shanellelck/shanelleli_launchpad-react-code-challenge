import {
    FETCH_UNIVERSITIES_REQUEST,
    FETCH_UNIVERSITIES_SUCCESS,
    FETCH_UNIVERSITIES_FAILURE,
  } from './actionTypes';
  
  const initialState = {
    uniList: [],
    loading: false,
    error: "",
  };
  
  const universitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_UNIVERSITIES_REQUEST:
        return { ...state, loading: true, error: "" };
      case FETCH_UNIVERSITIES_SUCCESS:
        return {
          ...state,
          loading: false,
          uniList: action.payload.uniList,
          country: action.payload.country,
        };
      case FETCH_UNIVERSITIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default universitiesReducer;