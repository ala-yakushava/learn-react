import reducer, {
  initialState, fetchStart, fetchSuccess, fetchFailure,
} from './loading';

describe('Reducer - loading', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  describe('undefined action', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should handle fetchStart', () => {
    it('should set true for loading ', () => {
      const action = fetchStart();
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, loading: true });
    });
  });

  describe('should handle fetchSuccess', () => {
    it('should set false for loading', () => {
      state = { ...state, loading: true };
      const action = fetchSuccess();
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, loading: false });
    });
  });

  describe('should handle fetchFailure', () => {
    it('should set false for loading and error value', () => {
      state = { ...state, loading: true };
      const action = fetchFailure(new Error('Something broke!'));
      const result = reducer(state, action);
      expect(result).toEqual({ ...state, loading: false, error: 'Error: Something broke!' });
    });
  });
});
