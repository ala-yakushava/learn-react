import React, { useState, useEffect } from 'react';

import MovieCatalog from '../../components/MovieCatalog';
import * as data from '../../data';

const VisibleMovieCatalog = () => {
  const [genres, setGenres] = useState([]);
  const [options, setOptions] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setGenres(data.genres);
  }, []);

  useEffect(() => {
    setOptions(data.options);
  }, []);

  useEffect(() => {
    setMovies(data.movies);
  }, []);

  return <MovieCatalog genres={genres} options={options} movies={movies} />;
};

export default VisibleMovieCatalog;
