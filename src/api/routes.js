const host = 'http://localhost:4000';

export default {
  moviePath: (id) => [host, 'movies', id].join('/'),
  moviesPath: () => [host, 'movies'].join('/'),
};
