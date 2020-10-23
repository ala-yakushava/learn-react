import reducer, { initialState, getMovieSuccess } from './movieInfo';
import { movie } from '../utils/mock-data';

describe('Reducer - movieInfo', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  describe('undefined action', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should handle getMovieSuccess', () => {
    it('should update value for movie', () => {
      const action = getMovieSuccess({ movie });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, movie });
    });
  });
});
