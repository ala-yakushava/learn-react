import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Button = ({ children, handleClick, type, className, mode, isDisabled }) => {
  const buttonClass = cn({
    Button: true,
    [`Button--${mode}`]: true,
    [className]: true,
  });

  return (
    <button type={type} disabled={isDisabled} className={buttonClass} onClick={handleClick}>
      <span className='Button_text'>
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  mode: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: () => {},
  type: 'button',
  className: '',
  mode: 'default',
  isDisabled: false,
};

export default Button;
