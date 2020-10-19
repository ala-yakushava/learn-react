import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MovieCardMenu from './index';
import { id, movie } from '../../../utils/mock-data';

jest.mock('react-redux');

describe('Components - MovieCardMenu', () => {
  const handleClose = jest.fn();
  const handleRemove = jest.fn();
  const dispatch = jest.fn();

  const state = {
    movieInfo: { movie },
    loading: { loading: false },
  };

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);
    useSelector.mockImplementation((cb) => cb(state));
    useDispatch.mockReturnValue(dispatch);

    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    const body = document.querySelector('body');
    body.appendChild(modalRoot);
  });

  afterAll(() => {
    ReactDOM.createPortal.mockClear();
    useDispatch.mockClear();
  });

  test('should match snapshot', () => {
    const tree = renderer
      .create(
        <MovieCardMenu movieId={id} onClickCloseMenu={handleClose} onRemoveMovie={handleRemove} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should open modal with EditMovieForm', () => {
    const { getByTestId, getByRole } = render(
      <MovieCardMenu movieId={id} onClickCloseMenu={handleClose} onRemoveMovie={handleRemove} />,
    );

    const leftClick = { button: 0 };
    const button = getByRole('button', { name: /Edit/i });
    userEvent.click(button, leftClick);

    const modal = getByTestId('modal');
    const dialog = getByTestId('edit-form');
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
    const dialog = getByTestId('delete-dialog');
    expect(modal).toContainElement(dialog);

    const closeModal = getByRole('button', { name: /x/i });
    userEvent.click(closeModal, leftClick);
    expect(modal).not.toBeInTheDocument();
  });
});
