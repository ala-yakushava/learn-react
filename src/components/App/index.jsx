import React from 'react';

import './style.scss';
import Container from '../Container';
import Header from '../Header';
import VisibleMovieCatalog from '../../containers/VisibleMovieCatalog';
import Footer from '../Footer';

const App = () => (
  <div className="App">
    <Container>
      <Header />
    </Container>
    <div className="App_space" />
    <Container>
      <VisibleMovieCatalog />
    </Container>
    <Footer />
  </div>
);

export default App;
