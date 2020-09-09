/* eslint-disable no-param-reassign */
import { createSlice, createSelector } from '@reduxjs/toolkit';

import {
  getMovies, deleteMovie, updateMovie, createMovie,
} from '../api';
import { currentFilterSelector } from './filtering';
import { currentSortSelector } from './sorting';

const initialState = {
  movies: [],
  currentMovieID: 400617,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'moviesInfo',
  initialState,
  reducers: {
    getMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getMoviesSuccess(state, action) {
      const { movies } = action.payload;
      state.movies = movies;
      state.loading = false;
      state.error = null;
    },
    removeMovieSuccess(state, action) {
      const { id } = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
      state.loading = false;
      state.error = null;
    },
    editMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movies = state.movies.map((item) => {
        const isCurrent = item.id === movie.id;
        return isCurrent ? movie : item;
      });
      state.loading = false;
      state.error = null;
    },
    addMovieSuccess(state, action) {
      const { movie } = action.payload;
      state.movies = [movie, ...state.movies];
      state.loading = false;
      state.error = null;
    },
    setCurrentMovieId(state, action) {
      const { id } = action.payload;
      state.currentMovieID = id;
    },
  },
});

export const {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  removeMovieSuccess,
  editMovieSuccess,
  addMovieSuccess,
  setCurrentMovieId,
} = slice.actions;

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const movies = await getMovies();
    dispatch(getMoviesSuccess({ movies }));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};

export const removeMovie = (id) => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    await deleteMovie(id);
    dispatch(removeMovieSuccess({ id }));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};

export const editMovie = ({ data }) => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const movie = await updateMovie(data);
    dispatch(editMovieSuccess({ movie }));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};

export const addMovie = ({ data }) => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const movie = await createMovie(data);
    dispatch(addMovieSuccess({ movie }));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};

export const moviesSelector = (state) => state.moviesInfo.movies;
export const currentMovieIdSelector = (state) => state.moviesInfo.currentMovieID;

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
