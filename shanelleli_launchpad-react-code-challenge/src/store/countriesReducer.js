import { SET_COUNTRIES } from "./actionTypes";
  
  const initialState = {
    countries: [],
  };
  
const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default countriesReducer;
  