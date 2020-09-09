import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './style.scss';
import Heading from '../../Heading';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { removeMovie } from '../../../slices/moviesInfo';

const DeleteMovieDialog = ({ movieId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeMovie(movieId));
  };

  return (
    <div className="DeleteMovieDialog">
      <Heading>Delete Movie</Heading>
      <p>Are you sure you want to delete this movie?</p>
      <ModalFooter>
        <Button mode="primary" onClick={handleClick}>Confirm</Button>
      </ModalFooter>
    </div>
  );
};

DeleteMovieDialog.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DeleteMovieDialog;
