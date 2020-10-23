import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MovieCardMenu from './index';
import { id } from '../../../utils/mock-data';

jest.mock('../../../containers/VisibleEditMovieForm', () => () => (
  <div data-testid="VisibleMovieForm" />
));

jest.mock('../../Modal/DeleteMovieDialog', () => () => (
  <div data-testid="DeleteMovieDialog" />
));

describe('Components - MovieCardMenu', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);

    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    const body = document.querySelector('body');
    body.appendChild(modalRoot);
  });

  afterAll(() => {
    ReactDOM.createPortal.mockClear();
  });

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MovieCardMenu movieId={id} onClickCloseMenu={handleClose} onRemoveMovie={handleRemove} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should open modal with VisibleMovieForm', () => {
    const { getByTestId, getByRole } = render(
      <MovieCardMenu movieId={id} onClickCloseMenu={handleClose} onRemoveMovie={handleRemove} />,
    );

    const leftClick = { button: 0 };
    const button = getByRole('button', { name: /Edit/i });
    userEvent.click(button, leftClick);

    const modal = getByTestId('modal');
    const dialog = getByTestId('VisibleMovieForm');
    expect(modal).toContainElement(dialog);

    const closeModal = getByRole('button', { name: /x/i });
    userEvent.click(closeModal, leftClick);
    expect(modal).not.toBeInTheDocument();
  });

  test('should open modal with DeleteMovieDialog', () => {
    const { getByTestId, getByRole } = render(
      <MovieCardMenu movieId={id} onClickCloseMenu={handleClose} onRemoveMovie={handleRemove} />,
    );

    const leftClick = { button: 0 };
    const button = getByRole('button', { name: /Delete/i });
    userEvent.click(button, leftClick);

    const modal = getByTestId('modal');
    const dialog = getByTestId('DeleteMovieDialog');
    expect(modal).toContainElement(dialog);

    const closeModal = getByRole('button', { name: /x/i });
    userEvent.click(closeModal, leftClick);
    expect(modal).not.toBeInTheDocument();
  });
});
