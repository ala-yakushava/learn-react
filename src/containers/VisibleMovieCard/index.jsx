import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import MovieCard from '../../components/MovieCatalog/MovieCard';
import { removeMovie } from '../../slices/moviesInfo';

const VisibleMovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const handleRemoveMovie = () => dispatch(removeMovie(movie.id));

  return <MovieCard movie={movie} onRemoveMovie={handleRemoveMovie} />;
};

VisibleMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default VisibleMovieCard;
