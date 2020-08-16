import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class ModalPortal extends React.Component {
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
      this.props.children,
      this.el
    );
  }
}

ModalPortal.propTypes = {
  children: PropTypes.node,
};

export default ModalPortal;
