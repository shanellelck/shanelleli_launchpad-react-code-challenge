import { combineReducers } from 'redux';
import postReducer from './postReducer';
import countriesReducer from './countriesReducer';
import universitiesReducer from './universitiesReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  countries: countriesReducer,
  universities: universitiesReducer
});

export default rootReducer;
