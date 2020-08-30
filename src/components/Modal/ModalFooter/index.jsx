import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ModalFooter = ({ children }) => (
  <div className="ModalFooter">
    { children }
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
