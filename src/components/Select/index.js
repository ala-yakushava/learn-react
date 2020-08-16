import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Select = ({ options })=>{
  return (
    <select className='Select'>
      {options.map(({ value, label }, i) => <option key={i} value={value}>{label}</option>)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
      PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
