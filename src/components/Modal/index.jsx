import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, onClick }) => {
  return (
    <div className="Modal">
      <div className="Modal_wrapper">
        <button type="button" className="Modal_close" onClick={onClick}>X</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  onClick: () => {},
};

export default Modal;
