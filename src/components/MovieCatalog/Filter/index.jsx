import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Select from '../../Select';

const Filter = ({ genres, options }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('release date');

  const handleChange = useCallback(
    (evt) => {
      setSort(evt.target.value);
      console.log(evt.target.value);
    },
    [sort],
  );

  const handleClick = useCallback(
    (value) => () => {
      setFilter(value);
      console.log(value);
    },
    [filter],
  );

  const cn = (value) => {
    const isActive = filter === value;
    return isActive ? 'Filter_item active' : 'Filter_item';
  };

  return (
    <div className="Filter">
      <div className="Filter_list">
        { genres.map(({ id, value, label }) => (
          <button type="button" className={cn(value)} key={id} onClick={handleClick(value)}>
            { label }
          </button>
        )) }
      </div>
      <div className="Filter_select">
        <span className="Filter_label">Sort by</span>
        <Select options={options} value={sort} onChange={handleChange} />
      </div>
    </div>
  );
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  options: PropTypes.arrayOf(PropTypes.object),
};

Filter.defaultProps = {
  genres: [],
  options: [],
};

export default Filter;
