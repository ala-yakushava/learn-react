import axios from 'axios';

import routes from './routes';

export const getMovies = async () => {
  const url = routes.moviesPath();
  const response = await axios.get(url);
  return response.data.data;
};

export const searchMovies = async (value, type) => {
  const url = routes.moviesSearchPath(value, type);
  const response = await axios.get(url);
  return response.data.data;
};

export const getMovie = async (id) => {
  const url = routes.moviePath(id);
  const response = await axios.get(url);
  return response.data;
};

export const createMovie = async (data) => {
  const url = routes.moviesPath();
  const response = await axios.post(url, data);
  return response.data;
};

export const updateMovie = async (data) => {
  const url = routes.moviesPath();
  const response = await axios.put(url, data);
  return response.data;
};

export const deleteMovie = async (id) => {
  const url = routes.moviePath(id);
  await axios.delete(url);
};
