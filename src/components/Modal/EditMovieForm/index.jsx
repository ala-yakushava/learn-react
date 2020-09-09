import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';

const EditMovieForm = ({ movie, onSubmit }) => {
  const defaultState = {
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    genres: movie.genres.join(', '),
    overview: movie.overview,
    runtime: String(movie.runtime),
  };

  const [form, setValue] = useState(defaultState);

  const handleReset = () => setValue(defaultState);

  const handleSubmit = (evt) => {
    const data = {
      ...form,
      id: movie.id,
      runtime: Number(form.runtime),
      genres: form.genres.split(', '),
    };

    evt.preventDefault();
    onSubmit(data);
  };

  const handleInputChange = () => (evt) => {
    const { name, value } = evt.target;
    setValue({ ...form, [name]: value });
  };

  return (
    <form
      className="EditMovieForm"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Heading>Edit Movie</Heading>
      <TextInput
        value={String(movie.id)}
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
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditMovieForm;
