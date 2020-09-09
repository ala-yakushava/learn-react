/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const initialState = {
  sortItems: [
    {
      id: uniqueId(),
      value: 'vote_average',
      label: 'Rating',
    },
    {
      id: uniqueId(),
      value: 'release_date',
      label: 'Release date',
    },
  ],
  currentSortValue: 'release_date',
};

const slice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortValue(state, action) {
      const { value } = action.payload;
      state.currentSortValue = value;
    },
  },
});

export const { setSortValue } = slice.actions;

export const sortItemsSelector = (state) => state.sorting;
export const currentSortSelector = (state) => state.sorting.currentSortValue;

export default slice.reducer;
