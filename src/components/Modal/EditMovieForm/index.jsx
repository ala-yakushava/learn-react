import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../utils/data';
import MovieFormSchema from '../../../utils/validate';

const EditMovieForm = ({ movie, onSubmit }) => {
  const defaultState = {
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    genres: movie.genres ? movie.genres.join(', ') : '',
    overview: movie.overview,
    runtime: String(movie.runtime),
  };

  const formik = useFormik({
    initialValues: defaultState,
    validationSchema: MovieFormSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        id: movie.id,
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
      className="EditMovieForm"
      onSubmit={handleSubmit}
      onReset={resetForm}
      data-testid="edit-form"
    >
      <Heading>Edit Movie</Heading>
      <TextInput
        value={String(movie.id)}
        readOnly
        label="Movie ID"
      />
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
        <Button type="submit" mode="primary" disabled={isSubmitting || !dirty || !isValid}>Save</Button>
      </ModalFooter>
    </form>
  );
};

EditMovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  onSubmit: PropTypes.func,
};

EditMovieForm.defaultProps = {
  movie: {},
  onSubmit: () => {},
};

export default EditMovieForm;
