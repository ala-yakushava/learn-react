import uniqueId from 'lodash/uniqueId';

export const formField = [
  {
    id: uniqueId(),
    name: 'title',
    label: 'Title',
    placeholder: 'Title here',
  },
  {
    id: uniqueId(),
    name: 'release_date',
    label: 'Release date',
    placeholder: 'Select date',
  },
  {
    id: uniqueId(),
    name: 'url',
    label: 'Movie URL',
    placeholder: 'Movie URL here',
  },
  {
    id: uniqueId(),
    name: 'genres',
    label: 'Genre',
    placeholder: 'Select genre',
  },
  {
    id: uniqueId(),
    name: 'overview',
    label: 'Overview',
    placeholder: 'Overview text goes here',
  },
  {
    id: uniqueId(),
    name: 'runtime',
    label: 'Runtime',
    placeholder: 'Runtime text goes here',
  },
];

export const genres = [
  {
    id: '00',
    label: 'all',
    value: 'all',
  },
  {
    id: '01',
    label: 'Documentary',
    value: 'documentary',
  },
  {
    id: '02',
    label: 'Comedy',
    value: 'comedy',
  },
  {
    id: '03',
    label: 'Horror',
    value: 'horror',
  },
  {
    id: '04',
    label: 'Crime',
    value: 'crime',
  },
];

export const options = [
  {
    id: uniqueId(),
    label: 'Title',
    value: 'title',
  },
  {
    id: uniqueId(),
    label: 'Release date',
    value: 'release date',
  },
];

export const movies = [
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres: ['01'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres: ['02'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres: ['03'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres: ['04'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres:  ['04'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
  {
    id: uniqueId(),
    title: 'Pupl Fiction',
    genres:  ['04'],
    release_date: 2004,
    poster_path: './public/img-1.img',
  },
];
