import React, { useState } from 'react';

import './style.scss';
import Container from '../Container';
import Header from '../Header';
import DefaultHeader from '../DefaultHeader';
import MovieCtalog from '../MovieCatalog';
import Footer from '../Footer';

const App = () => {
  const [isDefaultHeader, setHeader] = useState(false);

  const handleClick = () => setHeader(true);

  return (
    <div className="App">
      <Container>
        {isDefaultHeader ? <DefaultHeader /> : <Header onClick={handleClick} />}
      </Container>
      <div className="App_space" />
      <Container>
        <MovieCtalog />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
