import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Select from '../../Select';

const Sorting = ({ sortingItems, defaultValue, onChange }) => (
  <div className="Sorting">
    <span className="Sorting_label">Sort by</span>
    <Select options={sortingItems} value={defaultValue} onChange={onChange} />
  </div>
);

Sorting.propTypes = {
  sortingItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sorting;
