import React, { useState } from 'react';

import './style.scss';
import Logo from '../Logo';
import Button from '../Button';
import FindMovieForm from './FindMovieForm';
import Modal from '../Modal';
import VisibleAddMovieForm from '../../containers/VisibleAddMovieForm';

const DefaultHeader = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <header className="DefaultHeader">
      <Logo />
      <Button mode="transparent" onClick={handleClick}>Add movie</Button>
      <FindMovieForm className="DefaultHeader_form" />
      {visible && (
        <Modal onClick={handleClose}>
          <VisibleAddMovieForm />
        </Modal>
      )}
    </header>
  );
};

export default DefaultHeader;
