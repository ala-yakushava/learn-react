import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MovieCardMenu from '../MovieCardMenu';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClickOpenMenu = () => {
    this.setState(state => ({
      visible: true,
    }));
  }

  handleClickCloseMenu = () => {
    this.setState(state => ({
      visible: false,
    }));
  }

  render() {
    const { id, title, genres, release_date, poster_path } = this.props.movie;

    return (
      <article className="MovieCard">
        <img className="MovieCard_picture" src={ poster_path } />
        <h2 className="MovieCard_title">{ title }</h2>
        <span className="MovieCard_year">{ release_date }</span>
        <p className="MovieCard_genre-list">
          {genres.map((genre, i) => {
            return <span className="MovieCard_genre-item" key={ i }>{ genre }</span>
          })}
        </p>
        <div className="MovieCard_menu">
          <button type="button" className="MovieCard_button" onClick={this.handleClickOpenMenu}>
            <span>...</span>
          </button>
          {this.state.visible &&
            <MovieCardMenu movieId={id} onClickCloseMenu={this.handleClickCloseMenu}/>
          }
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.number,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
