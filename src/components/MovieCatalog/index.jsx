import React from 'react';

import './style.scss';
import ErrorBoundary from '../ErrorBoundary';
import VisibleFilter from '../../containers/VisibleFilter';
import VisibleSorting from '../../containers/VisibleSorting';
import VisibleMovieList from '../../containers/VisibleMovieList';

const MovieCatalog = () => (
  <div className="MovieCatalog">
    <div className="MovieCatalog_filter">
      <VisibleFilter />
      <VisibleSorting />
    </div>
    <ErrorBoundary>
      <VisibleMovieList />
    </ErrorBoundary>
  </div>
);

export default MovieCatalog;
