import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleMovieForm from './index';
import { id, movie } from '../../utils/mock-data';

jest.mock('react-redux');

describe('Containers - VisibleMovieForm', () => {
  const dispatch = jest.fn();

  const state = {
    movieInfo: { movie },
    loading: { loading: false },
  };

  beforeAll(() => {
    useSelector.mockImplementation((cb) => cb(state));
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('should render EditMovieForm', () => {
    const { getByTestId } = render(
      <VisibleMovieForm movieId={id} />,
    );
    expect(dispatch).toHaveBeenCalledTimes(1);

    const form = getByTestId('edit-form');
    expect(form).toBeInTheDocument();
  });
});
