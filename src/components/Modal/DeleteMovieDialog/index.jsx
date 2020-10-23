import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../../Heading';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';

const DeleteMovieDialog = ({ onClick }) => (
  <div className="DeleteMovieDialog" data-testid="delete-dialog">
    <Heading>Delete Movie</Heading>
    <p>Are you sure you want to delete this movie?</p>
    <ModalFooter>
      <Button mode="primary" onClick={onClick}>Confirm</Button>
    </ModalFooter>
  </div>
);

DeleteMovieDialog.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteMovieDialog;
