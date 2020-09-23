import React from 'react';
import { useDispatch } from 'react-redux';

import AddMovieForm from '../../components/Modal/AddMovieForm';
import { addMovie } from '../../slices/moviesInfo';

const VisibleMovieForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addMovie({ data }));
  };

  return <AddMovieForm onSubmit={handleSubmit} />;
};

export default VisibleMovieForm;
