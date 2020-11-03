import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Container from '../Container';
import MovieCtalog from '../MovieCatalog';
import Footer from '../Footer';

const Main = ({ children }) => (
  <div className="Main">
    <Container>
      {children}
    </Container>
    <div className="Main_space" />
    <Container>
      <MovieCtalog />
    </Container>
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
