import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './style.scss';
import MovieCardMenu from '../MovieCardMenu';
import { setCurrentMovieId } from '../../../slices/moviesInfo';

const MovieCard = ({ movie }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    id, title, release_date: date, poster_path: poster, genres,
  } = movie;

  const handleClick = () => dispatch(setCurrentMovieId({ id }));
  const handleClickOpenMenu = () => setVisible(true);
  const handleClickCloseMenu = () => setVisible(false);

  return (
    // eslint-disable-next-line
    <article className="MovieCard" onClick={handleClick}>
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
          <MovieCardMenu movieId={id} onClickCloseMenu={handleClickCloseMenu} />
        )}
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
