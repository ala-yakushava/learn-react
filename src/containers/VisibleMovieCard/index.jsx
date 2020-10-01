import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import MovieCard from '../../components/MovieCatalog/MovieCard';
import { currentMovieIdSelector, setCurrentMovieId, removeMovie } from '../../slices/moviesInfo';

const VisibleMovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const currentMovieId = useSelector(currentMovieIdSelector);

  const handleClick = () => {
    if (currentMovieId !== movie.id) {
      dispatch(setCurrentMovieId({ id: movie.id }));
    }
  };

  const handleRemoveMovie = () => dispatch(removeMovie(movie.id));

  return <MovieCard movie={movie} onRemoveMovie={handleRemoveMovie} onClick={handleClick} />;
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
