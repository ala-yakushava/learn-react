import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/MovieCatalog/Filter';
import { setFilterValue, filterItemsSelector, currentFilterSelector } from '../../slices/filtering';

const VisibleFilter = () => {
  const dispatch = useDispatch();

  const { filterItems } = useSelector(filterItemsSelector);
  const currentFilterValue = useSelector(currentFilterSelector);

  const handleClick = useCallback(
    (value) => () => {
      dispatch(setFilterValue({ value }));
    }, [],
  );

  return (
    <Filter filterItems={filterItems} defaultValue={currentFilterValue} onClick={handleClick} />
  );
};

export default VisibleFilter;
