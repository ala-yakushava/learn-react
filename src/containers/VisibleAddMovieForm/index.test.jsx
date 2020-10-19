import React from 'react';
import { useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleMovieForm from './index';

jest.mock('react-redux');

describe('Containers - VisibleMovieForm', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useDispatch.mockClear();
  });

  it('should render AddMovieForm', () => {
    const { getByTestId } = render(<VisibleMovieForm />);

    const form = getByTestId('create-form');
    expect(form).toBeInTheDocument();
  });
});
