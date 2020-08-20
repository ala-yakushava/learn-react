import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TextInput = ({ label, name, value, placeholder, isRequired, isReadonly, onChange }) => {
  return (
    <div className="TextInput">
      {label && <label className="TextInput_label">{label}</label>}
      <input
        name={name}
        className="TextInput_field"
        required={isRequired}
        readOnly={isReadonly}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isReadonly: PropTypes.bool,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  isRequired: false,
  isReadonly: false,
  onChange: () => {},
};

export default TextInput;
