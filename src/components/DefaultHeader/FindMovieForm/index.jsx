import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import Button from '../../Button';

const FindMovieForm = ({ className }) => {
  const [form, setValue] = useState({ text: '' });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setValue({ [name]: value });
  };

  const handleSubmit = (evt) => {
    console.log(form);
    evt.preventDefault();
  };

  const FormClass = cn({
    FindMovieForm: true,
    [className]: true,
  });

  return (
    <form className={FormClass} onSubmit={handleSubmit}>
      <Heading className="FindMovieForm_title">Find your movie</Heading>
      <TextInput
        name="text"
        className="FindMovieForm_input"
        placeholder="What do you want to watch?"
        value={form.text}
        required
        onChange={handleInputChange}
      />
      <Button type="submit" mode="primary">Search</Button>
    </form>
  );
};

FindMovieForm.propTypes = {
  className: PropTypes.string,
};

FindMovieForm.defaultProps = {
  className: '',
};

export default FindMovieForm;
