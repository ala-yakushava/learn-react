import React from 'react';

import MovieCatalog from '../../components/MovieCatalog';
import { genres, options, movies } from '../../data.js';

class VisibleMovieCatalog extends React.Component {
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
    return <MovieCatalog genres={genres} options={options} movies={movies} />
  }
};

export default VisibleMovieCatalog;
