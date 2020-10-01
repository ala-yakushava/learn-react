import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';
import MovieFormSchema from '../../../utils/validate';

const AddMovieForm = ({ onSubmit }) => {
  const defaultState = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: '',
    overview: '',
    runtime: '',
  };

  const formik = useFormik({
    initialValues: defaultState,
    validationSchema: MovieFormSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        runtime: Number(values.runtime),
        genres: values.genres.split(', '),
      };
      onSubmit(data);
    },
  });

  const {
    values, isSubmitting, dirty, isValid, errors, handleSubmit, resetForm, handleChange,
  } = formik;

  return (
    <form
      className="AddMovieForm"
      onSubmit={handleSubmit}
      onReset={resetForm}
    >
      <Heading>Add Movie</Heading>
      {formField.map(({
        id, name, type, label, placeholder,
      }) => (
        <TextInput
          key={id}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          value={values[name]}
          required
          onChange={handleChange}
          errors={errors[name]}
        />
      ))}
      <ModalFooter>
        <Button type="reset" mode="secondary">Reset</Button>
        <Button type="submit" mode="primary" disabled={isSubmitting || !dirty || !isValid}>Submit</Button>
      </ModalFooter>
    </form>
  );
};

AddMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddMovieForm;
