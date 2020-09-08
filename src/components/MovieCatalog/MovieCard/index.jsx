import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MovieCardMenu from '../MovieCardMenu';

const MovieCard = ({ movie, genres }) => {
  const [visible, setVisible] = useState(false);

  const handleClickOpenMenu = () => setVisible(true);
  const handleClickCloseMenu = () => setVisible(false);

  const {
    id, title, release_date: date, poster_path: poster,
  } = movie;
  const currentGenres = genres.filter((genre) => movie.genres.includes(genre.id));

  return (
    <article className="MovieCard">
      <img
        className="MovieCard_picture"
        src={poster}
        alt={`Poster for the movie ${title}`}
      />
      <h2 className="MovieCard_title">{ title }</h2>
      <span className="MovieCard_year">{ date }</span>
      <p className="MovieCard_genre-list">
        {currentGenres.map((genre) => <span className="MovieCard_genre-item" key={genre.id}>{ genre.label }</span>)}
      </p>
      <div className="MovieCard_menu">
        <button type="button" className="MovieCard_button" onClick={handleClickOpenMenu}>
          <span>...</span>
        </button>
        {visible && (
          <MovieCardMenu movieId={id} onClickCloseMenu={handleClickCloseMenu} />
        )}
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.number,
    poster_path: PropTypes.string.isRequired,
  }),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
};

MovieCard.defaultProps = {
  movie: {},
  genres: [],
};

export default MovieCard;
