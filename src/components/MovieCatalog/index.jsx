import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import MovieList from './MovieList';
import { genres, options, movies } from '../../data.js';

class MovieCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      options: [],
      movies: [],
    };
  }

  componentDidMount() {
    this.setState({
      genres,
      options,
      movies,
    });
  }

  componentWillUnmount() {
    console.log('Компонент будет размонтирован');
  }

  render() {
    const { genres, options, movies } = this.state;

    return (
      <>
        <ErrorBoundary>
          <Filter genres={ genres } options={options} />
          <MovieList movies={ movies }  genres={ genres } />
        </ErrorBoundary>
      </>
    )
  }
};

export default MovieCatalog;
