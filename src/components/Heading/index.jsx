import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Heading = ({ children, className }) => {
  const headingClass = cn({
    Heading: true,
    [className]: true,
  });

  return (
    <div className={headingClass}>
      { children }
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Heading.defaultProps = {
  children: null,
  className: '',
};

export default Heading;
