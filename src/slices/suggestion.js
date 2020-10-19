/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filterValue: 'All',
  sortValue: 'release_date',
};

const slice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {
    setFilterValue(state, action) {
      const { value } = action.payload;
      state.filterValue = value;
    },
    setSortValue(state, action) {
      const { value } = action.payload;
      state.sortValue = value;
    },
  },
});

export const { setFilterValue, setSortValue } = slice.actions;

export const currentFilterSelector = (state) => state.suggestion.filterValue;
export const currentSortSelector = (state) => state.suggestion.sortValue;

export default slice.reducer;
