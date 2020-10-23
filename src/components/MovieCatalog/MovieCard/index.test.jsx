import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MovieCard from './index';
import { movie } from '../../../utils/mock-data';

describe('Components - MovieCard', () => {
  const handleRemove = jest.fn();

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MovieCard movie={movie} onRemoveMovie={handleRemove} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should open MovieCardMenu', () => {
    const { getByTestId, getByRole } = render(
      <MemoryRouter>
        <MovieCard movie={movie} onRemoveMovie={handleRemove} />
      </MemoryRouter>,
    );

    const leftClick = { button: 0 };
    const button = getByRole('button', { name: /.../i });
    userEvent.click(button, leftClick);

    const menu = getByTestId('card-menu');
    expect(menu).toBeInTheDocument();

    const closeMenu = getByRole('button', { name: /х/i });
    userEvent.click(closeMenu, leftClick);

    expect(menu).not.toBeInTheDocument();
  });
});
