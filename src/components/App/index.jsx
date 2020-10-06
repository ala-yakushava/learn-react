import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Container from '../Container';
import MovieCtalog from '../MovieCatalog';
import Footer from '../Footer';

const App = ({ children }) => (
  <div className="App">
    <Container>
      {children}
    </Container>
    <div className="App_space" />
    <Container>
      <MovieCtalog />
    </Container>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
