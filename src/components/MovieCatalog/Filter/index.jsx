import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Select from '../../Select';

const Filter = ({ genres, options }) => {
  return (
    <div className="Filter">
      <div className="Filter_list">
        { genres.map(({ id, label }) => <a className="Filter_item" key={ id }>{ label }</a>) }
      </div>
      <div className="Filter_select">
        <span className="Filter_label">Sort by</span>
        <Select options={options} selectedValue="Release date" />
      </div>
    </div>
  )
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Filter;
