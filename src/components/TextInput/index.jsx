import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TextInput = ({
  label, name, value, placeholder, required, readOnly, onChange,
}) => (
  <div className="TextInput">
    {label && <label className="TextInput_label" htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      className="TextInput_field"
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  label: null,
  name: '',
  value: '',
  placeholder: null,
  required: false,
  readOnly: false,
  onChange: () => {},
};

export default TextInput;
