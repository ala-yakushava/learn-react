import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Button = ({
  children, onClick, type, className, mode, disabled,
}) => {
  const buttonClass = cn('Button', `Button--${mode}`, className);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} disabled={disabled} className={buttonClass} onClick={onClick}>
      <span className="Button_text">
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  mode: PropTypes.oneOf(['default', 'primary', 'secondary', 'transparent']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: '',
  mode: 'default',
  disabled: false,
};

export default Button;
