import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Filter = ({ filterItems, defaultValue, onClick }) => {
  const cn = (value) => {
    const isActive = value === defaultValue;
    return isActive ? 'Filter_item active' : 'Filter_item';
  };

  return (
    <div className="Filter" data-testid="filter">
      { filterItems.map(({ id, value, label }) => (
        <button type="button" className={cn(value)} key={id} onClick={onClick(value)}>
          { label }
        </button>
      )) }
    </div>
  );
};

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
