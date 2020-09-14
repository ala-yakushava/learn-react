import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MovieCardMenu from '../MovieCardMenu';

const MovieCard = ({ movie, onClick, onRemoveMovie }) => {
  const [visible, setVisible] = useState(false);

  const {
    id, title, release_date: date, poster_path: poster, genres,
  } = movie;

  const handleClickOpenMenu = (evt) => {
    evt.stopPropagation();
    setVisible(true);
  };

  const handleClickCloseMenu = (evt) => {
    evt.stopPropagation();
    setVisible(false);
  };

  return (
    // eslint-disable-next-line
    <article className="MovieCard" onClick={onClick}>
      <img
        className="MovieCard_picture"
        src={poster}
        alt={`Poster for the movie ${title}`}
      />
      <h2 className="MovieCard_title">{ title }</h2>
      <span className="MovieCard_year">{ date }</span>
      <p className="MovieCard_genre-list">{ genres.join(', ') }</p>
      <div className="MovieCard_menu">
        <button type="button" className="MovieCard_button" onClick={handleClickOpenMenu}>
          <span>...</span>
        </button>
        {visible && (
          <MovieCardMenu
            movieId={id}
            onClickCloseMenu={handleClickCloseMenu}
            onRemoveMovie={onRemoveMovie}
          />
        )}
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default MovieCard;
