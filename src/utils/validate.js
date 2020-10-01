import * as yup from 'yup';

const MovieFormSchema = yup.object().shape({
  title: yup.string().transform((value) => value.trim()).min(2).required('Required'),
  release_date: yup.date().max(new Date(), 'Future date'),
  poster_path: yup.string().url('Invalid URL').required('Required'),
  genres: yup.string().transform((value) => value.trim()).min(3).required('Required'),
  overview: yup.string().transform((value) => value.trim()).min(10).required('Required'),
  runtime: yup.number('Invalid number').required('Required').min(0, 'Too Short!').integer(),
});

export default MovieFormSchema;
