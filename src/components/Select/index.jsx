import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Select = ({ options, value, onChange }) => (
  <select className="Select" value={value} onChange={onChange}>
    {options.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
};

export default Select;
