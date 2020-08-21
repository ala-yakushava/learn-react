import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Select = ({ options, value, onChange })=>{
  return (
    <select className='Select' value={value} onChange={onChange}>
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
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  onChange: () => {},
};

export default Select;
