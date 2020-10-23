import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import RouterComponent from '../src/routes';
import PageNotFound from '../src/components/PageNotFound';
import { movie, movies } from '../src/utils/mock-data';

jest.mock('react-redux');

describe('React Router', () => {
  const dispatch = jest.fn();

  const state = {
    moviesInfo: { movies },
    movieInfo: { movie },
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

  it('should render App with DefaultHeader', () => {
    const history = createMemoryHistory();
    history.push('/movies');

    const { getByTestId } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>,
    );

    const section = getByTestId('default-header');
    expect(section).toBeInTheDocument();
  });

  it('should redirect and render App with DefaultHeader', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByTestId } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>,
    );

    const section = getByTestId('default-header');
    expect(section).toBeInTheDocument();
  });

  it('should render MovieDetails', () => {
    const history = createMemoryHistory();
    history.push('/movies');

    const { getByTestId, getByRole } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>,
    );

    const leftClick = { link: 0 };
    const link = getByRole('link', { name: /Ready Player One/i });
    userEvent.click(link, leftClick);

    const section = getByTestId('movie-details');
    expect(section).toBeInTheDocument();
  });

  it('should render PageNotFound', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Route path="*" component={PageNotFound} />
      </BrowserRouter>,
    );

    const section = getByTestId('page-not-found');
    expect(section).toBeInTheDocument();
  });
});
