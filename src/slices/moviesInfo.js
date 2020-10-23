/* eslint-disable no-param-reassign */
import { createSlice, createSelector } from '@reduxjs/toolkit';

import {
  getMovies, searchMovies, deleteMovie, updateMovie, createMovie,
} from '../api';
import { currentFilterSelector, currentSortSelector } from './suggestion';
import { fetchStart, fetchSuccess, fetchFailure } from './loading';

export const initialState = { movies: [] };

const slice = createSlice({
  name: 'moviesInfo',
  initialState,
  reducers: {
    getMoviesSuccess(state, action) {
      const { movies } = action.payload;
      state.movies = movies;
    },
    removeMovieSuccess(state, action) {
      const { id } = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
    editMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movies = state.movies.map((item) => {
        const isCurrent = item.id === movie.id;
        return isCurrent ? movie : item;
      });
    },
    addMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movies = [movie, ...state.movies];
    },
  },
});

export const {
  getMoviesSuccess, removeMovieSuccess, editMovieSuccess, addMovieSuccess,
} = slice.actions;

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const movies = await getMovies();
    dispatch(getMoviesSuccess({ movies }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const fetchMoviesByQuery = (value, type) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const movies = await searchMovies(value, type);
    dispatch(getMoviesSuccess({ movies }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const removeMovie = (id) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    await deleteMovie(id);
    dispatch(removeMovieSuccess({ id }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const editMovie = ({ data }) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const movie = await updateMovie(data);
    dispatch(editMovieSuccess({ movie }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const addMovie = ({ data }) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const movie = await createMovie(data);
    dispatch(addMovieSuccess({ movie }));
    dispatch(fetchSuccess());
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const moviesSelector = (state) => state.moviesInfo.movies;

export const movieByIdSelector = createSelector(
  (state) => state.moviesInfo.movies,
  (_, id) => id,
  (movies, id) => movies.find((movie) => movie.id === id),
);

export const filterMoviesSelector = createSelector(
  [moviesSelector, currentFilterSelector],
  (movies, value) => {
    if (value === 'All') return movies;
    return movies.filter(({ genres }) => genres.includes(value));
  },
);

export const sortingMoviesSelector = createSelector(
  [filterMoviesSelector, currentSortSelector],
  (movies, value) => {
    const result = movies.slice();

    switch (value) {
      case 'vote_average':
        return result.sort((a, b) => {
          const prevItem = Number(a.vote_average) || 0;
          const nextItem = Number(b.vote_average) || 0;
          return nextItem - prevItem;
        });
      case 'release_date':
        return result.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date));
      default:
        throw new Error(`Unknown value: ${value}`);
    }
  },
);

export default slice.reducer;
