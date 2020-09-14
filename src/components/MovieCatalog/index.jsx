import React from 'react';

import './style.scss';
import ErrorBoundary from '../ErrorBoundary';
import VisibleSuggestion from '../../containers/VisibleSuggestion';
import VisibleMovieList from '../../containers/VisibleMovieList';

const MovieCatalog = () => (
  <div className="MovieCatalog">
    <div className="MovieCatalog_filter">
      <VisibleSuggestion />
    </div>
    <ErrorBoundary>
      <VisibleMovieList />
    </ErrorBoundary>
  </div>
);

export default MovieCatalog;
