import React, { useState, useEffect } from 'react';

import MovieDetails from '../../components/Header/MovieDetails';
import * as data from '../../data';

const VisibleMovieDetails = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(data.movie);
  }, []);

  return <MovieDetails movie={movie} />;
};

export default VisibleMovieDetails;
