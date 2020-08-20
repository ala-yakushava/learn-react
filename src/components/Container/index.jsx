import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Container = ({ children }) => {
  return (
    <div className="Container">
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container;
