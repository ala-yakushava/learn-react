import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = 0;
  }

  render() {
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal_wrapper">
          <button type="button" className="Modal_close" onClick={this.props.onClick}>X</button>
          {this.props.children}
        </div>
      </div>,
      this.el
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  onClick: () => {},
};

export default Modal;
