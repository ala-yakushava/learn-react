import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import MovieDetails from '../../components/MovieCatalog/MovieCard';
import { setCurrentMovieId, removeMovie } from '../../slices/moviesInfo';

const VisibleMovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setCurrentMovieId({ id: movie.id }));
  const handleRemoveMovie = () => dispatch(removeMovie(movie.id));

  return <MovieDetails movie={movie} onRemoveMovie={handleRemoveMovie} onClick={handleClick} />;
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
