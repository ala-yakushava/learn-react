import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';

const EditMovieForm = ({ movieId }) => {
  const [form, setValue] = useState({
    title: '',
    release_date: '',
    url: '',
    genres: '',
    overview: '',
    runtime: '',
  });

  const handleInputChange = () => (evt) => {
    const { name, value } = evt.target;
    setValue({ ...form, [name]: value });
  };

  const handleSubmit = (evt) => {
    console.log(form);
    evt.preventDefault();
  };

  const handleReset = () => {
    setValue({
      title: '',
      release_date: '',
      url: '',
      genres: '',
      overview: '',
      runtime: '',
    });
  };

  return (
    <form
      className="EditMovieForm"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Heading>Edit Movie</Heading>
      <TextInput
        value={movieId}
        readOnly
        label="Movie ID"
      />
      {formField.map(({
        id, name, label, placeholder,
      }) => (
        <TextInput
          key={id}
          name={name}
          label={label}
          placeholder={placeholder}
          value={form[name]}
          required
          onChange={handleInputChange(form[name])}
        />
      ))}
      <ModalFooter>
        <Button type="reset" mode="secondary">Reset</Button>
        <Button type="submit" mode="primary">Save</Button>
      </ModalFooter>
    </form>
  );
};

EditMovieForm.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default EditMovieForm;
