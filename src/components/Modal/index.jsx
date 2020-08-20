import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, handleClick }) => {
  return (
    <div className="Modal">
      <div className="Modal_wrapper">
        <button type="button" className="Modal_close" onClick={handleClick}>X</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

Modal.defaultProps = {
  handleClick: () => {},
};

export default Modal;
