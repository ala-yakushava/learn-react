import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import MovieEditForm from '../../components/Modal/EditMovieForm';
import { editMovie, movieByIdSelector } from '../../slices/moviesInfo';

const VisibleMovieForm = ({ movieId }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => movieByIdSelector(state, movieId));

  const handleSubmit = (data) => {
    dispatch(editMovie({ data }));
  };

  return (
    <MovieEditForm movie={movie} onSubmit={handleSubmit} />
  );
};

VisibleMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VisibleMovieForm;
