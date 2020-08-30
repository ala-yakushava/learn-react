import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Button = ({
  children, onClick, type, className, mode, disabled,
}) => {
  const buttonClass = cn({
    Button: true,
    [`Button--${mode}`]: true,
    [className]: true,
  });

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
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  mode: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  type: 'button',
  className: '',
  mode: 'default',
  disabled: false,
};

export default Button;
