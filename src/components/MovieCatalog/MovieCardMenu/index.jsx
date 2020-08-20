import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import ModalPortal from '../../ModalPortal';
import Modal from '../../Modal';
import EditMovieForm from '../../Modal/EditMovieForm';
import DeleteMovieDialog from '../../Modal/DeleteMovieDialog';

class MovieCardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      modalType: null,
    };
  }

  handleClickOpenModal = type => () => {
    this.setState(state => ({
      visible: true,
      modalType: type,
    }));
  }

  handleClickCloseModal = () => {
    this.setState(state => ({
      visible: false,
      modalType: null,
    }));
  }

  modalBody = {
    editMovie: <EditMovieForm movieId={this.props.movieId} />,
    deleteMovie: <DeleteMovieDialog movieId={this.props.movieId} />,
  };

  render() {
    return (
      <div className="MovieCardMenu">
        <button type="button" className="MovieCardMenu_close" onClick={this.props.onClickCloseMenu}>X</button>
        <button className="MovieCardMenu_button" onClick={this.handleClickOpenModal('deleteMovie')}>Delete</button>
        <button className="MovieCardMenu_button" onClick={this.handleClickOpenModal('editMovie')}>Edit</button>
        {this.state.visible &&
          <ModalPortal>
            <Modal onClick={this.handleClickCloseModal}>
              {this.modalBody[this.state.modalType]}
            </Modal>
          </ModalPortal>
        }
      </div>
    )
  }
};

MovieCardMenu.propTypes = {
  onClickCloseMenu: PropTypes.func,
};

MovieCardMenu.defaultProps = {
 onClickCloseMenu: () => {},
};

export default MovieCardMenu;
