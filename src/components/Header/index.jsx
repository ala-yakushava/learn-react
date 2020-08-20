import React from 'react';

import './style.scss';
import Logo from '../Logo';
import Button from '../Button';
import FindMovieForm from './FindMovieForm';
import ModalPortal from '../ModalPortal';
import Modal from '../Modal';
import AddMovieForm from '../Modal/AddMovieForm';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    this.setState(state => ({
      visible: true,
    }));
  }

  handleClickCloseButton = () => {
    this.setState(state => ({
      visible: false,
    }));
  }

  render() {
    return (
      <header className="Header">
        <Logo />
        <Button mode="transparent" onClick={this.handleClick}>Add movie</Button>
        <FindMovieForm className="Header_form"/>
        {this.state.visible &&
          <ModalPortal>
            <Modal onClick={this.handleClickCloseButton}>
              <AddMovieForm />
            </Modal>
          </ModalPortal>
        }
      </header>
    );
  }
};

export default Header;
