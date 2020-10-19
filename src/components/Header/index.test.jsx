import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Header from './index';
import { id, movie } from '../../utils/mock-data';

jest.mock('react-redux');

describe('Components - Header', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    useSelector.mockImplementation((cb) => cb({ movieInfo: { movie } }));
    useDispatch.mockReturnValue(dispatch);
  });

  afterAll(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[`/movies/${id}`]}>
          <Header />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
