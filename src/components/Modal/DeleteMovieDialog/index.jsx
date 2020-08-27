import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../../Heading';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';

const DeleteMovieDialog = ({ movieId }) => {
  const handleClick = () => {
    console.log(movieId);
  }

  return (
    <div className="DeleteMovieDialog">
      <Heading>Delete Movie</Heading>
      <p>Are you sure you want to delete this movie?</p>
      <ModalFooter>
        <Button mode="primary" onClick={handleClick}>Confirm</Button>
      </ModalFooter>
    </div>
  );
}

DeleteMovieDialog.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default DeleteMovieDialog;
