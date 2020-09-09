import { combineReducers } from '@reduxjs/toolkit';
import moviesInfo from './moviesInfo';
import movieInfo from './movieInfo';
import sorting from './sorting';
import filtering from './filtering';

export default combineReducers({
  moviesInfo,
  movieInfo,
  sorting,
  filtering,
});
