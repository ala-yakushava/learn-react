import { combineReducers } from '@reduxjs/toolkit';
import moviesInfo from './moviesInfo';
import movieInfo from './movieInfo';
import loading from './loading';
import suggestion from './suggestion';

export default combineReducers({
  moviesInfo,
  movieInfo,
  suggestion,
  loading,
});
