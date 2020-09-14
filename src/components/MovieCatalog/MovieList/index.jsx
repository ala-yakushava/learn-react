import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import VisibleMovieCard from '../../../containers/VisibleMovieCard';

const MovieList = ({ movies }) => (
  <section className="MovieList">
    <p className="MovieList_lead">
      { movies.length }
      {' movies found'}
    </p>
    <div className="MovieList_list">
      { movies.map((movie) => <VisibleMovieCard movie={movie} key={movie.id} />) }
    </div>
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
