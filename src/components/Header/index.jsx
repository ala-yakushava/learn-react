import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Logo from '../Logo';
import Button from '../Button';
import MovieDetailsVisible from '../../containers/VisibleMovieDetails';

const Header = ({ onClick }) => (
  <header className="Header">
    <Logo />
    <Button mode="transparent" onClick={onClick}>Search</Button>
    <div className="Header_inner">
      <MovieDetailsVisible />
    </div>
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func,
};

Header.defaultProps = {
  onClick: () => {},
};

export default Header;
