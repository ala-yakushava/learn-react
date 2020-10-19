/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getMovie } from '../api';
import { fetchStart, fetchSuccess, fetchFailure } from './loading';

export const initialState = { movie: {} };

const slice = createSlice({
  name: 'movieInfo',
  initialState,
  reducers: {
    getMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movie = movie;
    },
  },
});

export const { getMovieSuccess } = slice.actions;

export const fetchMovie = (id) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const movie = await getMovie(id);
    dispatch(getMovieSuccess({ movie }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const movieSelector = (state) => state.movieInfo;

export default slice.reducer;
