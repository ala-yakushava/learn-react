import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';
import Logo from '../Logo';
import Button from '../Button';
import MovieDetailsVisible from '../../containers/VisibleMovieDetails';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/movies');
  };

  return (
    <header className="Header">
      <Logo />
      <Button mode="transparent" onClick={handleClick}>Search</Button>
      <div className="Header_inner">
        <MovieDetailsVisible />
      </div>
    </header>
  );
};

export default Header;
