import axios from 'axios';

import {
  getMovies, searchMovies, getMovie, createMovie, updateMovie, deleteMovie,
} from '.';
import routes from './routes';
import {
  id, movie, editedMovie, movies,
} from '../utils/mock-data';

jest.mock('axios');

describe('Server API', () => {
  describe('API - getMovies', () => {
    it('should get list of movies', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: { data: movies } }));
      await expect(getMovies()).resolves.toEqual(movies);
      expect(axios.get).toHaveBeenCalledWith(routes.moviesPath());
    });
  });

  describe('API - searchMovies', () => {
    it('should get movies by query params', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: { data: movies } }));
      await expect(searchMovies('l', 'title')).resolves.toEqual(movies);
      expect(axios.get).toHaveBeenCalledWith(routes.moviesSearchPath('l', 'title'));
    });
  });

  describe('API - getMovie', () => {
    it('should get movie by id', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: movie }));
      await expect(getMovie(id)).resolves.toEqual(movie);
      expect(axios.get).toHaveBeenCalledWith(routes.moviePath(id));
    });
  });

  describe('API - createMovie', () => {
    it('should create movie', async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ data: movie }));
      await expect(createMovie(movie)).resolves.toEqual(movie);
      expect(axios.post).toHaveBeenCalledWith(routes.moviesPath(movie), movie);
    });
  });

  describe('API - updateMovie', () => {
    it('should update movie', async () => {
      axios.put.mockImplementationOnce(() => Promise.resolve({ data: editedMovie }));
      await expect(updateMovie(editedMovie)).resolves.toEqual(editedMovie);
      expect(axios.put).toHaveBeenCalledWith(routes.moviesPath(), editedMovie);
    });
  });

  describe('API - deleteMovie', () => {
    it('should delete movie by id', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve());
      await expect(deleteMovie(id)).resolves.toEqual();
      expect(axios.delete).toHaveBeenCalledWith(routes.moviePath(id));
    });
  });
});
