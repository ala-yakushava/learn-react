/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getMovie } from '../api';

const initialState = {
  movie: {},
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'movieInfo',
  initialState,
  reducers: {
    getMovieStart(state) {
      state.loading = true;
      state.error = null;
    },
    getMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movie = movie;
      state.loading = false;
      state.error = null;
    },
    getMovieFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { getMovieStart, getMovieSuccess, getMovieFailure } = slice.actions;

export const fetchMovie = (id) => async (dispatch) => {
  try {
    dispatch(getMovieStart());
    const movie = await getMovie(id);
    dispatch(getMovieSuccess({ movie }));
  } catch (err) {
    dispatch(getMovieFailure(err));
  }
};

export const movieSelector = (state) => state.movieInfo;

export default slice.reducer;
