/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const initialState = {
  filterItems: [
    {
      id: uniqueId(),
      value: 'All',
      label: 'All',
    },
    {
      id: uniqueId(),
      value: 'Documentary',
      label: 'Documentary',
    },
    {
      id: uniqueId(),
      value: 'Comedy',
      label: 'Comedy',
    },
    {
      id: uniqueId(),
      value: 'Horror',
      label: 'Horror',
    },
    {
      id: uniqueId(),
      value: 'Crime',
      label: 'Crime',
    },
  ],
  currentFilterValue: 'All',
};

const slice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    setFilterValue(state, action) {
      const { value } = action.payload;
      state.currentFilterValue = value;
    },
  },
});

export const { setFilterValue } = slice.actions;

export const filterItemsSelector = (state) => state.filtering;
export const currentFilterSelector = (state) => state.filtering.currentFilterValue;

export default slice.reducer;
