import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../../Heading';

const MovieDetails = ({ movie }) => {
  const {
    title, tagline, overview, runtime, vote_average: vote, release_date: date, poster_path: poster,
  } = movie;

  const releaseYear = date ? date.split('-')[0] : null;

  return (
    <article className="MovieDetails" data-testid="movie-details">
      <div className="MovieDetails_picture">
        <img src={poster} alt={`Poster for the movie ${title}`} />
      </div>
      <div className="MovieDetails_inner">
        <header className="MovieDetails_header">
          <Heading className="MovieDetails_title">{ title }</Heading>
          <span className="MovieDetails_vote">{ vote }</span>
        </header>
        <p className="MovieDetails_lead">{ tagline }</p>
        <p className="MovieDetails_details">
          <span>{ releaseYear }</span>
          <span>{ `${runtime} min` }</span>
        </p>
        <p className="MovieDetails_description">{ overview }</p>
      </div>
    </article>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  }),
};

MovieDetails.defaultProps = {
  movie: {},
};

export default MovieDetails;
