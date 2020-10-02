import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MovieDetails from '../../components/Header/MovieDetails';
import { fetchMovie, movieSelector } from '../../slices/movieInfo';

const VisibleMovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie } = useSelector(movieSelector);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return <MovieDetails movie={movie} />;
};

export default VisibleMovieDetails;
