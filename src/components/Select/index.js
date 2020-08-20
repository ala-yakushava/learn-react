import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Select = ({ options })=>{
  return (
    <select className='Select'>
      {options.map(({ id, value, label }) => <option key={id} value={value}>{label}</option>)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
