import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import App from './index';

jest.mock('react-redux');

describe('Components - App', () => {
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

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/movies']}>
          <App>
            <div>Content</div>
          </App>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
