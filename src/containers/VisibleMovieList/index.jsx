import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import MovieList from '../../components/MovieCatalog/MovieList';
import MovieNotFound from '../../components/MovieNotFound';
import { fetchMoviesByQuery, sortingMoviesSelector } from '../../slices/moviesInfo';

const VisibleMovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(sortingMoviesSelector);

  const type = 'title';
  const useQuery = () => new URLSearchParams(useLocation().search);
  const value = useQuery().get(type);

  useEffect(() => {
    if (value) dispatch(fetchMoviesByQuery(value, type));
  }, [dispatch, value]);

  return movies.length ? <MovieList movies={movies} /> : <MovieNotFound />;
};

export default VisibleMovieList;
