import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sorting from '../../components/MovieCatalog/Sorting';
import { setSortValue, sortItemsSelector, currentSortSelector } from '../../slices/sorting';

const VisibleSorting = () => {
  const dispatch = useDispatch();

  const { sortItems } = useSelector(sortItemsSelector);
  const currentSortValue = useSelector(currentSortSelector);

  const handleChange = useCallback(
    (evt) => {
      const { value } = evt.target;
      dispatch(setSortValue({ value }));
    }, [],
  );

  return (
    <Sorting sortingItems={sortItems} defaultValue={currentSortValue} onChange={handleChange} />
  );
};

export default VisibleSorting;
