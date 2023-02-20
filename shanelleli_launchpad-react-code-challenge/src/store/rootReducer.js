import { combineReducers } from 'redux';
import postReducer from './postReducer';
import countriesReducer from './countriesReducer';
import universitiesReducer from './universitiesReducer';
import zipCodeReducer from './zipCodeReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  countries: countriesReducer,
  universities: universitiesReducer,
  zipCode: zipCodeReducer
});

export default rootReducer;
