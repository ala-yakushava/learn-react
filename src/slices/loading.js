/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    fetchFailure(state, action) {
      state.loading = false;
      const error = action.payload.toString();
      state.error = error;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = slice.actions;

export const loadingSelector = (state) => state.loading;

export default slice.reducer;
