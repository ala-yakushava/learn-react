import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisibleSuggestion from './index';

jest.mock('react-redux');

describe('Containers - VisibleSuggestion', () => {
  const dispatch = jest.fn();

  const state = {
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

  it('should render Filter and Sorting', () => {
    const { getByTestId } = render(<VisibleSuggestion />);

    expect(getByTestId('filter')).toBeInTheDocument();
    expect(getByTestId('sorting')).toBeInTheDocument();
  });
});
