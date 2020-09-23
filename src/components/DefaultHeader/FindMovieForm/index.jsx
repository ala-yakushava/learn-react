import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useFormik } from 'formik';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import Button from '../../Button';

const FindMovieForm = ({ className }) => {
  const formik = useFormik({
    initialValues: { text: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const FormClass = cn('FindMovieForm', className);

  const {
    values, isSubmitting, dirty, isValid, handleSubmit, handleChange,
  } = formik;

  return (
    <form className={FormClass} onSubmit={handleSubmit}>
      <Heading className="FindMovieForm_title">Find your movie</Heading>
      <TextInput
        name="text"
        className="FindMovieForm_input"
        placeholder="What do you want to watch?"
        value={values.text}
        required
        onChange={handleChange}
      />
      <Button type="submit" mode="primary" disabled={isSubmitting || !dirty || !isValid}>Search</Button>
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
