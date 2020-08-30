import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, onClick }) => {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
    return () => {
      modalRoot.removeChild(element);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 0;
    };
  });

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal_wrapper">
        <button type="button" className="Modal_close" onClick={onClick}>X</button>
        {children}
      </div>
    </div>,
    element,
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
