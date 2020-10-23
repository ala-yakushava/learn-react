import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleMovieList from './index';
import { movies } from '../../utils/mock-data';

jest.mock('react-redux');

describe('Containers - VisibleMovieList', () => {
  const dispatch = jest.fn();

  const state = {
    moviesInfo: { movies: [] },
    suggestion: { filterValue: 'All', sortValue: 'release_date' },
  };

  beforeAll(() => {
    useSelector.mockImplementation((cb) => cb(state));
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('should render MovieNotFound', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/movies']}>
        <VisibleMovieList />
      </MemoryRouter>,
    );

    expect(dispatch).toHaveBeenCalledTimes(0);

    const section = getByTestId('movie-not-found');
    expect(section).toBeInTheDocument();
  });

  it('should render MovieList', () => {
    useSelector.mockImplementation((cb) => cb({ ...state, moviesInfo: { movies } }));

    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={['/movies?title=k']}>
        <VisibleMovieList />
      </MemoryRouter>,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);

    const list = getByTestId('movie-list');
    expect(list).toContainElement(getByText('Zootopia'));
    expect(list).toContainElement(getByText('Ready Player One'));
  });
});
