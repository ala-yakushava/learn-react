import reducer, {
  initialState, getMoviesSuccess, removeMovieSuccess, editMovieSuccess, addMovieSuccess,
} from './moviesInfo';
import {
  id, movie, editedMovie, movies,
} from '../utils/mock-data';

describe('Reducer - moviesInfo', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  describe('undefined action', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should handle getMoviesSuccess', () => {
    it('should add movies to state', () => {
      const action = getMoviesSuccess({ movies });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, movies });
    });
  });

  describe('should handle addMovieSuccess', () => {
    it('should add new movie to movies', () => {
      const action = addMovieSuccess({ movie });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, movies: [movie] });
    });
  });

  describe('should handle editMovieSuccess', () => {
    it('should edit movie in movies', () => {
      state = { ...initialState, movies: [movie, ...movies] };
      const action = editMovieSuccess({ movie: editedMovie });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, movies: [editedMovie, ...movies] });
    });
  });

  describe('should handle removeMovieSuccess', () => {
    it('should remove movie from movies', () => {
      state = { ...initialState, movies: [movie, ...movies] };
      const action = removeMovieSuccess({ id });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, movies });
    });
  });
});
