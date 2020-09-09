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
    name: 'poster_path',
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

export default formField;
