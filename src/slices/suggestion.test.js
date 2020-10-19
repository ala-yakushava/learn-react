import reducer, { initialState, setFilterValue, setSortValue } from './suggestion';

describe('Reducer - suggestion', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  describe('undefined action', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should handle setFilterValue', () => {
    it('should update value for filterValue', () => {
      const action = setFilterValue({ value: 'Horror' });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, filterValue: 'Horror' });
    });
  });

  describe('should handle setSortValue', () => {
    it('should update value for sortValue', () => {
      const action = setSortValue({ value: 'vote_average' });
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, sortValue: 'vote_average' });
    });
  });
});
