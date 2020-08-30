import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MovieCard from '../MovieCard';

const MovieList = ({ movies, genres }) => (
  <section className="MovieList">
    <p className="MovieList_lead">
      { movies.length }
      {' '}
      movies found
    </p>
    <div className="MovieList_list">
      { movies.map((movie) => <MovieCard movie={movie} genres={genres} key={movie.id} />) }
    </div>
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
  genres: [],
};

export default MovieList;
