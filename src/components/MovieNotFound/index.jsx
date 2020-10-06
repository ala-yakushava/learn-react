import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../Heading';

const MovieNotFound = () => (
  <section className="MovieNotFound">
    <Heading>No Movie Found</Heading>
  </section>
);

Heading.propTypes = {
  onClick: PropTypes.func,
};

Heading.defaultProps = {
  onClick: () => {},
};

export default MovieNotFound;
