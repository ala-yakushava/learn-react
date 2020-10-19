import React from 'react';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleMovieCard from './index';
import { movie } from '../../utils/mock-data';

jest.mock('react-redux');

describe('Containers - VisibleMovieCard', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useDispatch.mockClear();
  });

  it('should render MovieCard', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <VisibleMovieCard movie={movie} />
      </MemoryRouter>,
    );

    const card = getByTestId('movie-card');
    expect(card).toBeInTheDocument();
  });
});
