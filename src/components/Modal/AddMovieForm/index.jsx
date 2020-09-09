import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';
import { addMovie } from '../../../slices/moviesInfo';

const AddMovieForm = () => {
  const defaultState = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: '',
    overview: '',
    runtime: '',
  };

  const dispatch = useDispatch();

  const [form, setValue] = useState(defaultState);

  const handleReset = () => setValue(defaultState);

  const handleSubmit = (evt) => {
    const data = {
      ...form,
      runtime: Number(form.runtime),
      genres: form.genres.split(', '),
    };

    evt.preventDefault();
    dispatch(addMovie({ data }));
  };

  const handleInputChange = () => (evt) => {
    const { name, value } = evt.target;
    setValue({ ...form, [name]: value });
  };

  return (
    <form
      className="AddMovieForm"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Heading>Add Movie</Heading>
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
        <Button type="submit" mode="primary">Submit</Button>
      </ModalFooter>
    </form>
  );
};

export default AddMovieForm;
