import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/MovieCatalog/Filter';
import Sorting from '../../components/MovieCatalog/Sorting';
import {
  setFilterValue, setSortValue, currentFilterSelector, currentSortSelector,
} from '../../slices/suggestion';
import { filterItems, sortItems } from '../../data';

const VisibleSuggestion = () => {
  const dispatch = useDispatch();

  const currentFilterValue = useSelector(currentFilterSelector);
  const currentSortValue = useSelector(currentSortSelector);

  const handleChange = useCallback(
    (evt) => {
      const { value } = evt.target;
      dispatch(setSortValue({ value }));
    }, [],
  );

  const handleClick = useCallback(
    (value) => () => {
      dispatch(setFilterValue({ value }));
    }, [],
  );

  return (
    <>
      <Filter filterItems={filterItems} defaultValue={currentFilterValue} onClick={handleClick} />
      <Sorting sortingItems={sortItems} defaultValue={currentSortValue} onChange={handleChange} />
    </>
  );
};

export default VisibleSuggestion;
