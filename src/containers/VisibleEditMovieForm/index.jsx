import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import EditMovieForm from '../../components/Modal/EditMovieForm';
import { fetchMovie, movieSelector } from '../../slices/movieInfo';
import { loadingSelector } from '../../slices/loading';
import { editMovie } from '../../slices/moviesInfo';

const VisibleMovieForm = ({ movieId }) => {
  const dispatch = useDispatch();
  const { movie } = useSelector(movieSelector);
  const { loading } = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  const handleSubmit = (data) => {
    dispatch(editMovie({ data }));
  };

  return (
    !loading && <EditMovieForm movie={movie} onSubmit={handleSubmit} />
  );
};

VisibleMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VisibleMovieForm;
