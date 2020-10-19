import React from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import DefaultHeader from './index';

jest.mock('react-redux');

describe('Components - DefaultHeader', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);
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
      .create(<DefaultHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should open modal with AddMovieForm', () => {
    const { getByTestId, getByRole } = render(
      <DefaultHeader />,
    );

    const leftClick = { button: 0 };
    const button = getByRole('button', { name: /Add movie/i });
    userEvent.click(button, leftClick);

    const modal = getByTestId('modal');
    const form = getByTestId('create-form');
    expect(modal).toContainElement(form);

    const closeModal = getByRole('button', { name: /X/i });
    userEvent.click(closeModal, leftClick);

    expect(modal).not.toBeInTheDocument();
  });
});
