import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieDetails from '../../components/Header/MovieDetails';
import { currentMovieIdSelector } from '../../slices/moviesInfo';
import { fetchMovie, movieSelector } from '../../slices/movieInfo';

const VisibleMovieDetails = () => {
  const dispatch = useDispatch();

  const id = useSelector(currentMovieIdSelector);
  const { movie } = useSelector(movieSelector);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return <MovieDetails movie={movie} />;
};

export default VisibleMovieDetails;
