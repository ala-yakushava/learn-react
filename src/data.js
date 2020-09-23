import uniqueId from 'lodash/uniqueId';

export const sortItems = [
  {
    id: 'sort-rating',
    value: 'vote_average',
    label: 'Rating',
  },
  {
    id: 'sort-release_date',
    value: 'release_date',
    label: 'Release date',
  },
];

export const filterItems = [
  {
    id: 'filter-all',
    value: 'All',
    label: 'All',
  },
  {
    id: 'filter-documentary',
    value: 'Documentary',
    label: 'Documentary',
  },
  {
    id: 'filter-comedy',
    value: 'Comedy',
    label: 'Comedy',
  },
  {
    id: 'filter-horror',
    value: 'Horror',
    label: 'Horror',
  },
  {
    id: 'filter-crime',
    value: 'Crime',
    label: 'Crime',
  },
];

export const formField = [
  {
    id: uniqueId(),
    name: 'title',
    type: 'text',
    label: 'Title',
    placeholder: 'Title here',
  },
  {
    id: uniqueId(),
    name: 'release_date',
    type: 'date',
    label: 'Release date',
    placeholder: 'Select date',
  },
  {
    id: uniqueId(),
    name: 'poster_path',
    type: 'url',
    label: 'Movie URL',
    placeholder: 'Movie URL here',
  },
  {
    id: uniqueId(),
    name: 'genres',
    type: 'text',
    label: 'Genre',
    placeholder: 'Select genre',
  },
  {
    id: uniqueId(),
    name: 'overview',
    type: 'text',
    label: 'Overview',
    placeholder: 'Overview text goes here',
  },
  {
    id: uniqueId(),
    name: 'runtime',
    type: 'text',
    label: 'Runtime',
    placeholder: 'Runtime text goes here',
  },
];
