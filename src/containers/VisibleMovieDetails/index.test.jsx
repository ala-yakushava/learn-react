import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleMovieDetails from './index';
import { id, movie } from '../../utils/mock-data';

jest.mock('react-redux');

describe('Containers - VisibleMovieDetails', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    useSelector.mockImplementation((cb) => cb({ movieInfo: { movie } }));
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('should render MovieDetails', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={[`/movies/${id}`]}>
        <VisibleMovieDetails />
      </MemoryRouter>,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);

    const article = getByTestId('movie-details');
    expect(article).toContainElement(getByText('Thor: Ragnarok'));
  });
});
