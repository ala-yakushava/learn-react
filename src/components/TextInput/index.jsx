import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TextInput = ({
  label, name, type, value, placeholder, required, readOnly, onChange, errors,
}) => (
  <div className="TextInput">
    {label && <label className="TextInput_label" htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      type={type}
      className="TextInput_field"
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {errors && <span className="TextInput_error">{errors}</span>}
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.string,
};

TextInput.defaultProps = {
  label: null,
  name: '',
  type: 'text',
  value: '',
  placeholder: null,
  required: false,
  readOnly: false,
  onChange: () => {},
  errors: null,
};

export default TextInput;
