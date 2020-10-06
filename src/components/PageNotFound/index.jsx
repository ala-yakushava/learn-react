import React from 'react';

import './style.scss';
import Container from '../Container';
import Logo from '../Logo';
import Heading from '../Heading';
import Button from '../Button';
import Footer from '../Footer';

const PageNotFound = () => (
  <div className="PageNotFound">
    <Container>
      <Logo />
      <div className="PageNotFound_inner">
        <Heading className="PageNotFound_title">Page Not Found</Heading>
        <p className="PageNotFound_404">404</p>
        <Button mode="secondary" className="PageNotFound_button">Go back to home</Button>
      </div>
    </Container>
    <Footer />
  </div>
);

export default PageNotFound;
