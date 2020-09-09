import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from '../../components/MovieCatalog/MovieList';
import { fetchMovies, sortingMoviesSelector } from '../../slices/moviesInfo';

const VisibleMovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(sortingMoviesSelector);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <MovieList movies={movies} />;
};

export default VisibleMovieList;
