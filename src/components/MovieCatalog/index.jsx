import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import MovieList from './MovieList';

const MovieCatalog = ({ genres, movies, options }) => {
  return (
    <>
      <ErrorBoundary>
        <Filter genres={ genres } options={options} />
        <MovieList movies={ movies }  genres={ genres } />
      </ErrorBoundary>
    </>
  )
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.object),
};

export default MovieCatalog;
